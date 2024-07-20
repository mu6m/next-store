"use server";

import { signAccessToken, verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { z } from "zod";

export async function cart(prevState: any, formData: FormData) {
	const schema = z.object({
		id: z.string().min(1, { message: "id is required" }),
		count: z.number().min(1),
	});
	const parse = schema.safeParse({
		id: formData.get("id"),
		count: Number(formData.get("count")),
	});

	if (!parse.success) {
		return {
			success: false,
			message: `there is an error in your data ${parse.error.message}`,
			count: prevState.count,
		};
	}
	const cookie = cookies().get("user");
	const token: any = await verifyAccessToken(cookie?.value);
	if (token === false || !token) {
		return {
			success: false,
			message: `there is an error in user token`,
			count: prevState.count,
		};
	}

	try {
		const data = await prisma.cart.upsert({
			where: {
				userId_productId: {
					productId: parse.data.id,
					userId: token.id,
				},
			},
			create: {
				productId: parse.data.id,
				userId: token.id,
				count: parse.data.count,
			},
			update: {
				count: parse.data.count,
			},
		});
		return {
			success: true,
			message: `updated cart`,
			count: data.count,
		};
	} catch (error) {
		return {
			success: false,
			message: `db error`,
			count: prevState.count,
		};
	}
}
