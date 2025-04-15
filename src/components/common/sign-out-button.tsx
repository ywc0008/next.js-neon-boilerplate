"use client";

import type { Session } from "next-auth";

import { useTransition } from "react";

import { signOutAction } from "@/actions";
import { Button } from "../ui/button";

type SignOutButtonProps = {
	session?: Session;
};

export default function SignOutButton({ session }: SignOutButtonProps) {
	const [isPending, startTransition] = useTransition();

	const handleSignOut = async () => {
		startTransition(async () => {
			await signOutAction();
		});
	};

	return (
		<form action={handleSignOut}>
			<Button disabled={isPending} type="submit" variant="outline">
				Sign Out
			</Button>
		</form>
	);
}
