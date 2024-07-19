import { LemonsqueezyClient } from "lemonsqueezy.ts";
451611;
453727;

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method == "POST") {
		//get user id
		//get sum of products in user id
		const client = new LemonsqueezyClient(process.env.LEMON_API);
		const checkout = await client.createCheckout({
			checkout_options: {
				button_color: "#2DD272",
			},
			checkout_data: {
				email: "yogendramanawat@gmail.com",
				name: "Yogendra Manawat",
				custom: {
					planName: "BASIC_PLAN",
					userId: "123",
				},
				variant_quantities: [],
			},
			expires_at: new Date(),
			custom_price: 99,
			store: "59035",
			variant: "453727",
		});
	}
}
