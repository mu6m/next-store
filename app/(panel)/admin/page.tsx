"use client";

import { ChartCategory } from "@/components/charts/ChartCategory";
import { ChartSales } from "@/components/charts/ChartSales";
import { ChartShipped } from "@/components/charts/ChartShipped";
import { ChartTopProducts } from "@/components/charts/ChartTopProducts";

export default function Comp() {
	return (
		<div className=" flex flex-col max-w-5xl mx-auto gap-8">
			<div className="flex flex-col md:flex-row gap-8">
				<ChartTopProducts />
				<ChartCategory />
				<ChartSales />
			</div>
			<ChartShipped />
		</div>
	);
}
