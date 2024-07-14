import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export default function Search() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon" className="rounded-full">
					<SearchIcon className="w-6 h-6" />
					<span className="sr-only">Search</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Search</DialogTitle>
				</DialogHeader>
				<div className="py-1">
					<Input
						id="name"
						placeholder="Search Text..."
						className="w-full col-span-3"
					/>
				</div>
				<DialogFooter>
					<Button type="submit">Search</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
