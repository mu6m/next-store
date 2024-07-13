import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";

export default function Component() {
	return (
		<div className="flex h-screen w-full border">
			<div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
				<div className="flex h-full flex-col gap-2">
					<div className="flex h-14 items-center border-b px-6">
						<Link
							href="#"
							className="flex items-center gap-2 font-semibold"
							prefetch={false}
						>
							<Package2Icon className="h-6 w-6" />
							<span className="">Acme Inc</span>
						</Link>
					</div>
					<div className="flex-1 overflow-auto">
						<nav className="grid items-start px-4 text-sm font-medium">
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
								prefetch={false}
							>
								<HomeIcon className="h-4 w-4" />
								Home
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
								prefetch={false}
							>
								<ShoppingCartIcon className="h-4 w-4" />
								Orders
								<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
									6
								</Badge>
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
								prefetch={false}
							>
								<PackageIcon className="h-4 w-4" />
								Products
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
								prefetch={false}
							>
								<UsersIcon className="h-4 w-4" />
								Customers
							</Link>
							<Link
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
								prefetch={false}
							>
								<LineChartIcon className="h-4 w-4" />
								Analytics
							</Link>
						</nav>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
					<div className="w-full flex-1">
						<form>
							<div className="relative">
								<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
								<Input
									type="search"
									placeholder="Search orders..."
									className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
								/>
							</div>
						</form>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
							>
								<img
									src="/placeholder.svg"
									width="32"
									height="32"
									className="rounded-full"
									alt="Avatar"
								/>
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main className="flex-1 p-4 md:p-6">
					<div className="grid gap-4">
						<h1 className="text-lg font-semibold">Products</h1>
						<div className="border shadow-sm rounded-lg">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[80px]">Image</TableHead>
										<TableHead className="max-w-[150px]">Name</TableHead>
										<TableHead className="hidden md:table-cell">
											Status
										</TableHead>
										<TableHead className="hidden md:table-cell">
											Inventory
										</TableHead>
										<TableHead>Vendor</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>
											<img
												src="/placeholder.svg"
												width="64"
												height="64"
												alt="Product image"
												className="aspect-square rounded-md object-cover"
											/>
										</TableCell>
										<TableCell className="font-medium">Glimmer Lamps</TableCell>
										<TableCell className="hidden md:table-cell">
											In Production
										</TableCell>
										<TableCell>500 in stock</TableCell>
										<TableCell className="hidden md:table-cell">
											Luminance Creations
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<img
												src="/placeholder.svg"
												width="64"
												height="64"
												alt="Product image"
												className="aspect-square rounded-md object-cover"
											/>
										</TableCell>
										<TableCell className="font-medium">Aqua Filters</TableCell>
										<TableCell className="hidden md:table-cell">
											Available for Order
										</TableCell>
										<TableCell>750 in stock</TableCell>
										<TableCell className="hidden md:table-cell">
											HydraClean Solutions
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<img
												src="/placeholder.svg"
												width="64"
												height="64"
												alt="Product image"
												className="aspect-square rounded-md object-cover"
											/>
										</TableCell>
										<TableCell className="font-medium">Eco Planters</TableCell>
										<TableCell className="hidden md:table-cell">
											Backordered
										</TableCell>
										<TableCell>300 in stock</TableCell>
										<TableCell className="hidden md:table-cell">
											GreenGrowth Designers
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<img
												src="/placeholder.svg"
												width="64"
												height="64"
												alt="Product image"
												className="aspect-square rounded-md object-cover"
											/>
										</TableCell>
										<TableCell className="font-medium">Zest Juicers</TableCell>
										<TableCell className="hidden md:table-cell">
											Newly Launched
										</TableCell>
										<TableCell>1000 in stock</TableCell>
										<TableCell className="hidden md:table-cell">
											FreshTech Appliances
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<img
												src="/placeholder.svg"
												width="64"
												height="64"
												alt="Product image"
												className="aspect-square rounded-md object-cover"
											/>
										</TableCell>
										<TableCell className="font-medium">
											Flexi Wearables
										</TableCell>
										<TableCell className="hidden md:table-cell">
											Selling Fast
										</TableCell>
										<TableCell>200 in stock</TableCell>
										<TableCell className="hidden md:table-cell">
											Vitality Gear Co.
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

function HomeIcon(props) {
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
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}

function LineChartIcon(props) {
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
			<path d="M3 3v18h18" />
			<path d="m19 9-5 5-4-4-3 3" />
		</svg>
	);
}

function MenuIcon(props) {
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
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function Package2Icon(props) {
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
			<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
			<path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
			<path d="M12 3v6" />
		</svg>
	);
}

function PackageIcon(props) {
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
			<path d="m7.5 4.27 9 5.15" />
			<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
			<path d="m3.3 7 8.7 5 8.7-5" />
			<path d="M12 22V12" />
		</svg>
	);
}

function SearchIcon(props) {
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
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}

function ShoppingCartIcon(props) {
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
			<circle cx="8" cy="21" r="1" />
			<circle cx="19" cy="21" r="1" />
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
		</svg>
	);
}

function UsersIcon(props) {
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
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
