"use server";

import { signAccessToken, verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { LemonsqueezyClient } from "lemonsqueezy.ts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
// 451611;
// 453727;
export async function checkout(prevState: any, formData: FormData) {
	const schema = z.object({
		name: z.string().min(1, { message: "name is required" }),
		email: z.string().min(1, { message: "email is required" }),
		phone: z.string().min(1, { message: "phone is required" }),
		ad1: z.string().min(1, { message: "both addess are required" }),
		ad2: z.string().min(1, { message: "both addess are required" }),
		city: z.string().min(1, { message: "city is required" }),
		state: z.string().min(1, { message: "state is required" }),
		zip: z.string().min(1, { message: "zip is required" }),
		country: z.string().min(1, { message: "country is required" }),
	});
	let parse = schema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		phone: formData.get("phone"),
		ad1: formData.get("ad1"),
		ad2: formData.get("ad2"),
		city: formData.get("city"),
		state: formData.get("state"),
		zip: formData.get("zip"),
		country: formData.get("country"),
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
		};
	}
	const items = await prisma.cart.findMany({
		where: {
			userId: token.id,
		},
		include: {
			product: true,
		},
	});

	let price = 0;
	let info_text: string = "";
	for (const item of items) {
		//make checks for quantity here
		let count = item.count;
		if (item.product.limit != null && item.count > item.product.limit) {
			count = item.product.limit;
			info_text +=
				item.product.title +
				" count was " +
				item.count +
				" and has been changed to " +
				count +
				"\n";
		}
		price += count * (item.product.price || 0);
	}
	if (info_text != "") {
		info_text =
			"some modifications has been made to your order becuase of supply \n" +
			info_text;
	}
	const client = new LemonsqueezyClient(process.env.LEMON_API);
	(parse.data as any).user = token.id;
	const checkout = await client.createCheckout({
		checkout_options: {
			button_color: "#2DD272",
		},
		product_options: {
			description:
				info_text == ""
					? "no modifications has been done to the order"
					: info_text,
		},
		checkout_data: {
			email: parse.data.email,
			name: parse.data.name,
			custom: parse.data,
			variant_quantities: [],
		},
		expires_at: new Date(Date.now() + 5 * 60 * 1000), //5 minutes
		custom_price: price,
		store: "59035",
		variant: "453727",
		test_mode: true,
	});
	redirect(checkout.data.attributes.url);
	// return {
	// 	success: true,
	// 	message: `checkout created`,
	// };
	try {
	} catch (error) {
		return {
			success: false,
			message: `db error`,
		};
	}
}
