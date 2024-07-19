"use server";

import { signAccessToken, verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function form(prevState: any, formData: FormData) {
	const schema = z.object({
		id: z.string().min(1, { message: "ID is required" }),
		name: z.string().min(1, { message: "Name is required" }),
		slug: z.string().min(1, { message: "Name is required" }),
	});
	const parse = schema.safeParse({
		id: formData.get("id"),
		name: formData.get("name"),
		slug: formData.get("slug"),
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
		await prisma.category.update({
			where: {
				id: parse.data.id,
			},
			data: {
				name: parse.data.name,
				slug: parse.data.slug,
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
		message: `category "${parse.data.name}" is updated`,
	};
}
