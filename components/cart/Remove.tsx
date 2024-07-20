import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import axios from "axios";
export default function Remove({ id, setAdded, refetch }: any) {
	const [loading, setLoading] = useState(false);
	return (
		<Button
			onClick={async () => {
				setLoading(true);
				const { data } = await axios.delete("/product/", {
					params: { id },
				});
				setLoading(false);
				if (data.success) {
					await refetch();
					setAdded(false);
				}
			}}
			variant="outline"
			disabled={loading}
		>
			{loading ? (
				<>
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					Please wait
				</>
			) : (
				<>Delete</>
			)}
		</Button>
	);
}
