import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Component() {
	return (
		<>
			<main className="flex flex-col items-center mx-auto w-full max-w-7xl">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Fuel Your Journey with Petro Shop
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										Discover a wide range of high-quality petroleum products for
										your vehicle, home, and business needs. Trusted by customers
										for over a decade.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link
										href="#"
										className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Shop Now
									</Link>
									<Link
										href="#"
										className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Learn More
									</Link>
								</div>
							</div>
							<img
								src="https://generated.vusercontent.net/placeholder.svg"
								width="550"
								height="550"
								alt="Hero"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Our Commitment
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Fueling a Sustainable Future
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									At Petro Shop, we are committed to promoting sustainable
									practices and reducing our environmental impact. From sourcing
									eco-friendly products to implementing energy-efficient
									operations, we strive to be a leader in the industry's
									transition towards a greener future.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									href="#"
									className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Learn More
								</Link>
								<Link
									href="#"
									className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-muted p-6 md:py-12 w-full ">
				<div className="container max-w-7xl mx-auto  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
					<div className="grid gap-1">
						<h3 className="font-semibold">Company</h3>
						<Link href="#" prefetch={false}>
							About Us
						</Link>
						<Link href="#" prefetch={false}>
							Our Team
						</Link>
						<Link href="#" prefetch={false}>
							Careers
						</Link>
						<Link href="#" prefetch={false}>
							News
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold">Products</h3>
						<Link href="#" prefetch={false}>
							Gasoline
						</Link>
						<Link href="#" prefetch={false}>
							Diesel
						</Link>
						<Link href="#" prefetch={false}>
							Lubricants
						</Link>
						<Link href="#" prefetch={false}>
							Kerosene
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold">Resources</h3>
						<Link href="#" prefetch={false}>
							Blog
						</Link>
						<Link href="#" prefetch={false}>
							FAQs
						</Link>
						<Link href="#" prefetch={false}>
							Support
						</Link>
						<Link href="#" prefetch={false}>
							Sustainability
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold">Legal</h3>
						<Link href="#" prefetch={false}>
							Privacy Policy
						</Link>
						<Link href="#" prefetch={false}>
							Terms of Service
						</Link>
						<Link href="#" prefetch={false}>
							Cookie Policy
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold">Contact</h3>
						<Link href="#" prefetch={false}>
							General Inquiries
						</Link>
						<Link href="#" prefetch={false}>
							Sales
						</Link>
						<Link href="#" prefetch={false}>
							Media
						</Link>
						<Link href="#" prefetch={false}>
							Partnerships
						</Link>
					</div>
				</div>
			</footer>
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
