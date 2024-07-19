import { verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

const perPage = 10;

export const GET = async (request: any, params: any) => {
	const searchParams = request.nextUrl.searchParams;
	const search: string = searchParams.get("q") || "";
	const id: string = searchParams.get("id");
	const currentPage: number = Number(searchParams.get("page")) || 1;

	const cookie = cookies().get("user");
	const token = await verifyAccessToken(cookie?.value);
	if (token === false || !token || token.type != "ADMIN") {
		return Response.json(
			{
				success: false,
				message: `error in user token`,
			},
			{
				status: 400,
			}
		);
	}
	if (id) {
		try {
			const item = await prisma.product.findFirstOrThrow({
				where: {
					id,
				},
				include: {
					category: true,
				},
			});
			const category = await prisma.category.findMany();
			return Response.json({ item, category });
		} catch (error) {
			return Response.json(
				{
					success: false,
					message: `item not found`,
				},
				{
					status: 400,
				}
			);
		}
	}
	const count = await prisma.product.count({
		where: {
			OR: [
				{
					title: {
						contains: search,
					},
				},
				{
					content: {
						contains: search,
					},
				},
			],
		},
	});
	const pages = Math.ceil(count / perPage);
	const items = await prisma.product.findMany({
		skip: (currentPage - 1) * perPage,
		take: perPage,
		where: {
			OR: [
				{
					title: {
						contains: search,
					},
				},
				{
					content: {
						contains: search,
					},
				},
			],
		},
		include: {
			category: true,
		},
	});
	return Response.json({ items, pages });
};
