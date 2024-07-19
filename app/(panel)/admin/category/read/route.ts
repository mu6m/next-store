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
			const item = await prisma.category.findFirstOrThrow({
				where: {
					id,
				},
			});
			return Response.json(item);
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
	const count = await prisma.category.count({
		where: {
			OR: [
				{
					name: {
						contains: search,
					},
				},
				{
					slug: {
						contains: search,
					},
				},
			],
		},
	});
	const pages = Math.ceil(count / perPage);
	const items = await prisma.category.findMany({
		skip: (currentPage - 1) * perPage,
		take: perPage,
		where: {
			OR: [
				{
					name: {
						contains: search,
					},
				},
				{
					slug: {
						contains: search,
					},
				},
			],
		},
	});
	return Response.json({ items, pages });
};
