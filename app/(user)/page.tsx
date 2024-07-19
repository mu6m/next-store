import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Component() {
	return (
		<>
			<main className="flex flex-col items-center mx-auto w-full max-w-7xl">
				<section className="w-full py-12 md:py-24 lg:py-32 ">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Featured Products
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Discover Our Top Picks
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Browse our selection of high-quality petroleum products
									tailored to meet your diverse needs.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
							<Card className="group">
								<a href="/product/12" target="_blank">
									<CardHeader>
										<img
											src="/placeholder.svg"
											width="300"
											height="200"
											alt="Product"
											className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
										/>
									</CardHeader>
									<CardContent>
										<div className="space-y-1">
											<h3 className="text-lg font-bold">Premium Gasoline</h3>
											<p className="text-muted-foreground">$3.99 / gallon</p>
										</div>
									</CardContent>
								</a>
							</Card>
							<Card className="group">
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="300"
										height="200"
										alt="Product"
										className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
									/>
								</CardHeader>
								<CardContent>
									<div className="space-y-1">
										<h3 className="text-lg font-bold">Diesel Fuel</h3>
										<p className="text-muted-foreground">$4.29 / gallon</p>
									</div>
								</CardContent>
							</Card>
							<Card className="group">
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="300"
										height="200"
										alt="Product"
										className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
									/>
								</CardHeader>
								<CardContent>
									<div className="space-y-1">
										<h3 className="text-lg font-bold">Lubricating Oil</h3>
										<p className="text-muted-foreground">$24.99 / 5 quarts</p>
									</div>
								</CardContent>
							</Card>
							<Card className="group">
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="300"
										height="200"
										alt="Product"
										className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
									/>
								</CardHeader>
								<CardContent>
									<div className="space-y-1">
										<h3 className="text-lg font-bold">Kerosene</h3>
										<p className="text-muted-foreground">$3.79 / gallon</p>
									</div>
								</CardContent>
							</Card>
							<Card className="group">
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="300"
										height="200"
										alt="Product"
										className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
									/>
								</CardHeader>
								<CardContent>
									<div className="space-y-1">
										<h3 className="text-lg font-bold">Propane</h3>
										<p className="text-muted-foreground">$19.99 / 20 lb tank</p>
									</div>
								</CardContent>
							</Card>
							<Card className="group">
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="300"
										height="200"
										alt="Product"
										className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
									/>
								</CardHeader>
								<CardContent>
									<div className="space-y-1">
										<h3 className="text-lg font-bold">Heating Oil</h3>
										<p className="text-muted-foreground">$3.49 / gallon</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

function FuelIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="3" x2="15" y1="22" y2="22" />
			<line x1="4" x2="14" y1="9" y2="9" />
			<path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
			<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
		</svg>
	);
}

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
