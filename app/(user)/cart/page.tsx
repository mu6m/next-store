import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

export default function Component() {
	return (
		<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div>
				<Card>
					<CardHeader>
						<CardTitle>Order Summary</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<div className="font-medium">Sunset Beach Towel</div>
									<div>$19.99</div>
								</div>
								<div className="text-sm text-muted-foreground flex w-full items-center gap-1.5">
									<Label htmlFor="qty">Qty:</Label>
									<Input
										id="qty"
										type="number"
										defaultValue={1}
										min={1}
										max={10}
										className="w-16 ml-2 text-center"
									/>
								</div>
							</div>
							<Separator />
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<div className="font-medium">Sunset Beach Towel</div>
									<div>$19.99</div>
								</div>
								<div className="text-sm text-muted-foreground flex w-full items-center gap-1.5">
									<Label htmlFor="qty">Qty:</Label>
									<Input
										id="qty"
										type="number"
										defaultValue={1}
										min={1}
										max={10}
										className="w-16 ml-2 text-center"
									/>
								</div>
							</div>
							<Separator />
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<div className="font-medium">Sunset Beach Towel</div>
									<div>$19.99</div>
								</div>
								<div className="text-sm text-muted-foreground flex w-full items-center gap-1.5">
									<Label htmlFor="qty">Qty:</Label>
									<Input
										id="qty"
										type="number"
										defaultValue={1}
										min={1}
										max={10}
										className="w-16 ml-2 text-center"
									/>
								</div>
							</div>
							<Separator />
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<div className="font-medium">Sunset Beach Towel</div>
									<div>$19.99</div>
								</div>
								<div className="text-sm text-muted-foreground flex w-full items-center gap-1.5">
									<Label htmlFor="qty">Qty:</Label>
									<Input
										id="qty"
										type="number"
										defaultValue={1}
										min={1}
										max={10}
										className="w-16 ml-2 text-center"
									/>
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<div className="grid gap-2">
							<div className="flex flex-col items-start justify-between font-semibold">
								<div>Total:</div>
								<div>$148.98</div>
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
			<div className="flex flex-col gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Payment Details</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="John Doe" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="john@example.com" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="phone">Phone</Label>
								<Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="address-1">Address 1</Label>
								<Input id="address-1" placeholder="123 Main St" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="address-2">Address 2</Label>
								<Input id="address-2" placeholder="Apt 123" />
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="city">City</Label>
									<Input id="city" placeholder="New York" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="state">State</Label>
									<Input id="state" placeholder="NY" />
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="zip">Zip</Label>
									<Input id="zip" placeholder="10001" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="country">Country</Label>
									<Input id="country" placeholder="US" />
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<div className="flex items-center gap-2">
							<Button size="lg" className="flex-1">
								Pay ${148.98}
							</Button>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
