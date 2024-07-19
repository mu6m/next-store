"use client";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import useSWR from "swr";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import Delete from "./delete/Delete";
import { ExpandIcon, FilePenIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import View from "./view/View";

export default function DataTable({ searchParams }: any) {
	const fetcher = (url) => fetch(url).then((r) => r.json());
	let { data, mutate } = useSWR(
		`/admin/product/read?${new URLSearchParams(searchParams).toString()}`,
		fetcher
	);
	const router = useRouter();
	const search: string = searchParams.q || "";
	const currentPage: number = Number(searchParams.page) || 1;
	let nextPage = { ...searchParams };
	let prevPage = { ...searchParams };
	nextPage.page = currentPage + 1;
	prevPage.page = currentPage - 1;
	const nextUrl = `/admin/product?${new URLSearchParams(nextPage).toString()}`;
	const prevUrl = `/admin/product?${new URLSearchParams(prevPage).toString()}`;
	const search_input = useRef(null);
	return (
		<Card>
			<CardHeader>
				<CardTitle>Product</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-2">
						<Input
							type="search"
							placeholder="Search ..."
							className="max-w-xs"
							defaultValue={search}
							ref={search_input}
						/>
						<Button
							size="sm"
							onClick={() => {
								let newParams = { ...searchParams };

								newParams.q = search_input?.current?.value || "";
								const url = `/admin/product?${new URLSearchParams(
									newParams
								).toString()}`;
								router.push(url);
							}}
						>
							Search
						</Button>
					</div>
					<Button size="sm" asChild>
						<Link href="/admin/product/create">Create</Link>
					</Button>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>id</TableHead>
							<TableHead>title</TableHead>
							<TableHead>limit</TableHead>
							<TableHead>price</TableHead>
							<TableHead>published</TableHead>
							<TableHead>category</TableHead>
							<TableHead>actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data
							? data.items.map((item: any, index: number) => {
									return (
										<TableRow key={item.id}>
											<TableCell>{index + 1}</TableCell>
											<TableCell className="font-medium">
												{item.title}
											</TableCell>
											<TableCell>
												{item.limit} {item.limit == -1 && "(unlimited)"}
											</TableCell>
											<TableCell>{item.price}</TableCell>
											<TableCell>{item.published.toString()}</TableCell>
											<TableCell>
												{item?.category?.name || "no category"}
											</TableCell>
											<TableCell>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button size="icon" variant="ghost">
															<ExpandIcon className="h-4 w-4" />
															<span className="sr-only">Actions</span>
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align="end">
														<DropdownMenuItem>
															<Link
																href={`/admin/product/${item.id}`}
																className="flex gap-1"
															>
																<FilePenIcon className="h-4 w-4 mr-2" />
																Edit
															</Link>
														</DropdownMenuItem>
														<DropdownMenuItem
															onClick={(e) => {
																e.preventDefault();
															}}
														>
															<Delete mutate={mutate} id={item.id} />
														</DropdownMenuItem>
														<DropdownMenuItem
															onClick={(e) => {
																e.preventDefault();
															}}
														>
															<View id={item.id} />
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									);
							  })
							: [...Array(7)].map((index: number) => {
									return (
										<TableRow key={index}>
											<TableCell>
												<Skeleton className="h-4 w-[250px]" />
											</TableCell>
											<TableCell>
												<Skeleton className="h-4 w-[250px]" />
											</TableCell>
										</TableRow>
									);
							  })}
					</TableBody>
				</Table>
			</CardContent>
			{data && data.items.length == 0 && (
				<CardFooter>
					<div className="mx-auto">
						<div className="text-xs flex gap-1 w-full text-muted-foreground">
							no data.
						</div>
					</div>
				</CardFooter>
			)}
			{data && (
				<CardFooter>
					<div className="flex items-center justify-between">
						<div className="text-xs flex gap-1 w-full text-muted-foreground">
							page <strong>{currentPage}</strong> of{" "}
							<strong>{Math.max(data.pages, 1)}</strong>
						</div>
						<Pagination>
							<PaginationContent>
								{currentPage > 1 && (
									<PaginationItem>
										<PaginationPrevious href={prevUrl} />
									</PaginationItem>
								)}
								{currentPage < data.pages && (
									<PaginationItem>
										<PaginationNext href={nextUrl} />
									</PaginationItem>
								)}
							</PaginationContent>
						</Pagination>
					</div>
				</CardFooter>
			)}
		</Card>
	);
}
