"use server";

import { signAccessToken, verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function form(prevState: any, formData: FormData) {
	const schema = z.object({
		id: z.string().min(1, { message: "id is required" }),
		title: z.string().min(1, { message: "title is required" }),
		content: z.string().nullable(),
		image: z.string().min(1, { message: "image is required" }),
		limit: z.number().min(-1, { message: "limit is required" }).default(-1),
		price: z.number().min(0, { message: "price is required" }).default(0),
		published: z.boolean().default(false),
		category: z.string().optional(),
	});
	const parse = schema.safeParse({
		id: formData.get("id"),
		title: formData.get("title"),
		content: formData.get("content"),
		image: formData.get("image"),
		limit: Number(formData.get("limit")),
		price: Number(formData.get("price")),
		published: Boolean(formData.get("published")),
		category: formData.get("category") == "" && undefined,
	});

	if (!parse.success) {
		return {
			success: false,
			message: `there is an error in your data ${parse.error.message}`,
		};
	}
	const cookie = cookies().get("user");
	const token = await verifyAccessToken(cookie?.value);
	if (token === false || !token || token.type != "ADMIN") {
		return {
			success: false,
			message: `error in user token`,
		};
	}
	try {
		await prisma.product.update({
			where: {
				id: parse.data.id,
			},
			data: {
				title: parse.data.title,
				content: parse.data.content,
				images: [parse.data.image],
				limit: parse.data.limit,
				price: parse.data.price,
				published: parse.data.published,
				categoryId: parse.data.category,
			},
		});
	} catch (error) {
		return {
			success: false,
			message: `error in db`,
		};
	}
	return {
		success: true,
		message: `product "${parse.data.title}" is updated`,
	};
}
