"use client";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { EyeIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import useSWR from "swr";

export default function View({ id }: any) {
	const fetcher = (url) => fetch(url).then((r) => r.json());
	let { data } = useSWR(`/admin/product/read?id=${id}`, fetcher);
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<div className="flex">
					<EyeIcon className="h-4 w-4 mr-2" />
					View
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>product details</AlertDialogTitle>
					<AlertDialogDescription>
						{data ? (
							<div className="flex flex-col gap-4">
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900">
										title
									</label>
									<input
										type="text"
										className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={data.item.title}
										readOnly
									/>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										content
									</label>
									<textarea
										rows="4"
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										value={data.item.content}
										readOnly
									></textarea>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900">
										image
									</label>
									<input
										type="text"
										className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={data.item.images[0]}
										readOnly
									/>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900">
										limit (-1 makes it unlimited)
									</label>
									<input
										type="number"
										className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={data.item.limit}
										disabled
										readOnly
									/>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900">
										price
									</label>
									<input
										type="number"
										className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={data.item.price}
										readOnly
									/>
								</div>
								<div className="flex items-center">
									<input
										type="checkbox"
										checked={data.item.published}
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
										readOnly
									/>
									<label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
										published
									</label>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Select a category
									</label>
									<select
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										value={data?.item?.category?.id || ""}
										disabled
									>
										<option value="" selected>
											no category
										</option>
										{data &&
											data.category.map((item: any) => {
												return (
													<option key={item.id} value={item.id}>
														{item.name}
													</option>
												);
											})}
									</select>
								</div>
							</div>
						) : (
							[...Array(7)].map((index: number) => {
								return <Skeleton className="h-4 w-[250px]" />;
							})
						)}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Close</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
