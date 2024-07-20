"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { cart } from "./action";
import Remove from "./Remove";

const initialState = {
	success: false,
	message: "",
	count: 0,
};

function SubmitButton({ isAdded }: any) {
	const { pending } = useFormStatus();
	return (
		<>
			<Button disabled={pending} type="submit" size={"lg"}>
				{pending ? (
					<>
						<svg
							aria-hidden="true"
							role="status"
							className="inline mr-3 w-4 h-4 text-white animate-spin"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="#E5E7EB"
							></path>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentColor"
							></path>
						</svg>
						Loading...
					</>
				) : (
					<>{isAdded ? <>Edit Cart</> : <>Add to Cart</>}</>
				)}
			</Button>
		</>
	);
}
function Alert({ state }: any) {
	const GreenIcon = () => {
		return (
			<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
				<svg
					className="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
				</svg>
				<span className="sr-only">Check icon</span>
			</div>
		);
	};
	const RedIcon = () => {
		return (
			<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
				<svg
					className="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
				</svg>
				<span className="sr-only">Error icon</span>
			</div>
		);
	};
	return (
		<div
			className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
			role="alert"
		>
			{state.success ? <GreenIcon /> : <RedIcon />}
			<div className="ms-3 text-sm font-normal">{state.message}</div>
		</div>
	);
}

export default function Counter({ data, added, refetch }: any) {
	const [state, formAction] = useActionState(cart, initialState);
	const [isAdded, setAdded] = useState(added || state?.count > 0);
	const [count, updateCount] = useState(state?.count || added?.count || 1);
	const limit = Math.min(data.limit, 100);
	if (limit == 0) {
		return <p className="text-sm">product is out of stock</p>;
	}
	useEffect(() => {
		if (state.success && state?.count > 0) {
			setAdded(true);
		}
	}, [state]);
	return (
		<div className="mr-auto grid gap-2">
			{state?.message != "" && !state?.success && <Alert state={state} />}
			<form action={formAction} className="flex flex-col gap-2">
				<input value={data.id} name="id" hidden={true} />
				<div className="flex gap-2">
					<Button
						type="button"
						variant="outline"
						size="icon"
						className="h-8 w-8"
						onClick={() => {
							if (count > 1) {
								updateCount(count - 1);
							}
						}}
					>
						<MinusIcon className="h-4 w-4" />
						<span className="sr-only">Decrease quantity</span>
					</Button>
					<Select
						defaultValue={count.toString()}
						value={count.toString()}
						onValueChange={(value: any) => updateCount(parseInt(value))}
						name="count"
					>
						<SelectTrigger className="w-24">
							<SelectValue placeholder="Select" />
						</SelectTrigger>
						<SelectContent className="h-32">
							{[...Array(limit)].map((e, i) => (
								<SelectItem key={i + 1} value={(i + 1).toString()}>
									{i + 1}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Button
						type="button"
						variant="outline"
						size="icon"
						className="h-8 w-8"
						onClick={() => {
							if (count < limit) {
								updateCount(count + 1);
							}
						}}
					>
						<PlusIcon className="h-4 w-4" />
						<span className="sr-only">Increase quantity</span>
					</Button>
				</div>
				<div className="flex flex-col gap-2">
					<SubmitButton isAdded={isAdded} />
					{isAdded && (
						<Remove refetch={refetch} id={data.id} setAdded={setAdded} />
					)}
				</div>
			</form>
		</div>
	);
}
