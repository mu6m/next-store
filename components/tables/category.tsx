import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
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
	PaginationLink,
	PaginationEllipsis,
	PaginationNext,
} from "@/components/ui/pagination";

export default async function DataTable() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Users</CardTitle>
				<CardDescription>
					Manage your users and their information.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-2">
						<Input
							type="search"
							placeholder="Search users..."
							className="max-w-xs"
						/>
						<Button size="sm">Search</Button>
					</div>
					<Button size="sm">Add User</Button>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">John Doe</TableCell>
							<TableCell>john.doe@example.com</TableCell>
							<TableCell>Admin</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button size="icon" variant="ghost">
											<span className="sr-only">Actions</span>
											<ExpandIcon className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem>
											<FilePenIcon className="h-4 w-4 mr-2" />
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											<EyeIcon className="h-4 w-4 mr-2" />
											View
										</DropdownMenuItem>
										<DropdownMenuItem>
											<TrashIcon className="h-4 w-4 mr-2" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Jane Smith</TableCell>
							<TableCell>jane.smith@example.com</TableCell>
							<TableCell>User</TableCell>
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
											<FilePenIcon className="h-4 w-4 mr-2" />
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											<EyeIcon className="h-4 w-4 mr-2" />
											View
										</DropdownMenuItem>
										<DropdownMenuItem>
											<TrashIcon className="h-4 w-4 mr-2" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Bob Johnson</TableCell>
							<TableCell>bob.johnson@example.com</TableCell>
							<TableCell>User</TableCell>
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
											<FilePenIcon className="h-4 w-4 mr-2" />
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											<EyeIcon className="h-4 w-4 mr-2" />
											View
										</DropdownMenuItem>
										<DropdownMenuItem>
											<TrashIcon className="h-4 w-4 mr-2" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Alice Williams</TableCell>
							<TableCell>alice.williams@example.com</TableCell>
							<TableCell>Editor</TableCell>
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
											<FilePenIcon className="h-4 w-4 mr-2" />
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem>
											<EyeIcon className="h-4 w-4 mr-2" />
											View
										</DropdownMenuItem>
										<DropdownMenuItem>
											<TrashIcon className="h-4 w-4 mr-2" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<div className="flex items-center justify-between">
					<div className="text-xs text-muted-foreground">
						Showing <strong>1-10</strong> of <strong>32</strong> users
					</div>
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</CardFooter>
		</Card>
	);
}

function ExpandIcon(props) {
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
			<path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
			<path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
			<path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
			<path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
		</svg>
	);
}

function EyeIcon(props) {
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
			<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

function FilePenIcon(props) {
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
			<path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
		</svg>
	);
}

function TrashIcon(props) {
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
			<path d="M3 6h18" />
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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
