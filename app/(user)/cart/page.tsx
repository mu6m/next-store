"use server";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Form from "./Form";
import prisma from "@/lib/prisma";
import Counter from "@/components/cart/Counter";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/lib/jwt";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Component() {
	const cookie = cookies().get("user");
	const token: any = await verifyAccessToken(cookie?.value);
	if (token === false || !token) {
		notFound();
	}
	const data = await prisma.cart.findMany({
		where: {
			userId: token.id,
		},
		include: {
			product: true,
		},
	});
	let price = 0;
	for (const item of data) {
		price += item.count * (item.product.price || 0);
	}
	return (
		<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div>
				<Card>
					<CardHeader>
						<CardTitle>Order Summary</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							{data.map((item: any, index: number) => {
								return (
									<>
										<div className="grid gap-2">
											<div className="flex items-center justify-between">
												<div className="font-medium">{item.product.title}</div>
												<div>${item.product.price}</div>
											</div>
											<div className="text-sm text-muted-foreground flex w-full items-center gap-1.5">
												<Counter
													refetch={async () => {
														"use server";
														revalidatePath("/cart/");
													}}
													added={item}
													data={item.product}
												/>
											</div>
										</div>
										{index < data.length - 1 && <Separator />}
									</>
								);
							})}
							{data.length == 0 && <p className="text-sm">no products !</p>}
						</div>
					</CardContent>
					<CardFooter>
						<div className="grid gap-2">
							<div className="flex flex-col items-start justify-between font-semibold">
								<div>Total:</div>
								<div>${price}</div>
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
			<div className="flex flex-col gap-8">
				<Form />
			</div>
		</div>
	);
}
