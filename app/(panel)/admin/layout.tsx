import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "admin | next store",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />
				<main className="flex-1 overflow-y-scroll p-16">{children}</main>
			</div>
		</>
	);
}
