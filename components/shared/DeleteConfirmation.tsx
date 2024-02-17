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
import { deleteEvent } from "@/lib/actions/event.actions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { buttonVariants } from "../ui/button";

type DeleteConfirmationProps = {
	eventId: string;
};

const DeleteConfirmation = ({ eventId }: DeleteConfirmationProps) => {
	const pathname = usePathname();
	let [isPending, startTransition] = useTransition();
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Image
					src="/assets/icons/delete.svg"
					alt="edit"
					width={20}
					height={20}
				/>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-white">
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you absolutely sure you want to delete this event?
					</AlertDialogTitle>
					<AlertDialogDescription className="p-regular-16 text-grey-600">
						This action cannot be undone. This will permanently delete your this
						event from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() =>
							startTransition(async () => {
								await deleteEvent({ eventId, path: pathname });
							})
						}
						className={buttonVariants({ variant: "destructive" })}
					>
						{isPending ? "Deleting" : "Delete"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteConfirmation;
