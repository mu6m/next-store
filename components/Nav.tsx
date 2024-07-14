"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import Search from "./Search";

export default function Nav() {
	const [search, setSearch] = useState(false);
	return (
		<header className="flex items-center justify-between h-16 px-4 bg-white shadow-sm sm:px-6 lg:px-8">
			<Link href="#" className="flex items-center gap-2" prefetch={false}>
				<MountainIcon className="w-6 h-6" />
				<span className="sr-only">Acme Store</span>
			</Link>
			<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
				<Link
					href="#"
					className="text-gray-600 hover:text-gray-900"
					prefetch={false}
				>
					Home
				</Link>
				<Link
					href="#"
					className="text-gray-600 hover:text-gray-900"
					prefetch={false}
				>
					Shop
				</Link>
				<Link
					href="#"
					className="text-gray-600 hover:text-gray-900"
					prefetch={false}
				>
					About
				</Link>
				<Link
					href="#"
					className="text-gray-600 hover:text-gray-900"
					prefetch={false}
				>
					Contact
				</Link>
			</nav>

			<div className="hidden md:flex items-center gap-4">
				<Search />
				<Button variant="ghost" size="icon" className="rounded-full">
					<ShoppingCartIcon className="w-6 h-6" />
					<span className="sr-only">Cart</span>
				</Button>
			</div>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="md:hidden">
						<MenuIcon className="w-6 h-6" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="bg-white">
					<div className="flex flex-col gap-4 p-4">
						<Link href="#" className="flex items-center gap-2" prefetch={false}>
							<MountainIcon className="w-6 h-6" />
							<span className="sr-only">Acme Store</span>
						</Link>
						<nav className="flex flex-col gap-2">
							<Link
								href="#"
								className="text-gray-600 hover:text-gray-900"
								prefetch={false}
							>
								Home
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-gray-900"
								prefetch={false}
							>
								Shop
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-gray-900"
								prefetch={false}
							>
								About
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-gray-900"
								prefetch={false}
							>
								Contact
							</Link>
							<Link
								href="/cart"
								className="text-gray-600 hover:text-gray-900"
								prefetch={false}
							>
								Cart
							</Link>
						</nav>
						<div className="flex gap-2">
							<Input
								type="text"
								placeholder="Search products..."
								className="pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
							/>
							<Button variant="ghost" size="icon" className="rounded-full">
								<SearchIcon className="w-6 h-6" />
								<span className="sr-only">Search</span>
							</Button>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</header>
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

function MountainIcon(props) {
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
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
