import { verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export const DELETE = async (request: any, params: any) => {
	const searchParams = request.nextUrl.searchParams;
	const id: any = searchParams.get("id");
	if (!id) {
		return Response.json({
			success: false,
			message: `id is required`,
		});
	}

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
	try {
		await prisma.category.delete({
			where: {
				id,
			},
		});
	} catch (error) {
		return Response.json({
			success: false,
			message: `error in db`,
		});
	}
	return Response.json({
		success: true,
		message: `category is removed`,
	});
};
