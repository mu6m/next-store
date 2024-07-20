import Counter from "@/components/cart/Counter";
import { verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Comp({ params }: any) {
	const data = await prisma.product.findFirst({
		where: {
			id: params.id,
		},
	});
	if (!data) {
		return notFound();
	}
	const cookie = cookies().get("user");
	const token: any = await verifyAccessToken(cookie?.value);
	if (token === false || !token) {
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
	const added = await prisma.cart.findFirst({
		where: {
			productId: params.id,
			userId: token.id,
		},
	});
	return (
		<div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
			<div className="grid gap-4">
				<img
					src={data.images[0]}
					alt={data.title}
					width={600}
					height={600}
					className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
				/>
			</div>
			<div className="py-8 flex flex-col gap-4 md:gap-10 justify-between h-full">
				<div className="grid gap-4">
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
						{data.title}
					</h1>
					<p className="text-muted-foreground">
						{data.content ? data.content : "no content"}
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<h2 className="text-2xl font-bold">${data.price}</h2>
						<div className="bg-primary px-3 py-1 rounded-full text-primary-foreground text-sm font-medium">
							{data.limit == 0 ? "Out Of Stock" : "In Stock"}
						</div>
					</div>
					<Counter added={added} data={data} />
				</div>
			</div>
		</div>
	);
}
