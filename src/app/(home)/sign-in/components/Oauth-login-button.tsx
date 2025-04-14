"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";

import { signInWithOauth } from "../actions";
import { GoogleIcon, AppleIcon, KakaoIcon, NaverIcon, GithubIcon } from "@/components/common/social-icons";

interface OauthLoginButtonProps {
	provider: "Apple" | "Google" | "Kakao" | "Naver" | "Github";
}

export default function OauthLoginButton({ provider }: OauthLoginButtonProps) {
	const [isPending, startTransition] = useTransition();

	const onSubmit = async () => {
		startTransition(async () => {
			await signInWithOauth(provider);
		});
	};

	return (
		<form action={onSubmit}>
			<Button
				type="submit"
				disabled={isPending}
				className="w-full text-sm h-12 bg-white text-dark border cursor-pointer hover:bg-black/5"
			>
				{provider === "Google" && <GoogleIcon className="size-8" />}
				{provider === "Apple" && <AppleIcon className="size-8" />}
				{provider === "Kakao" && <KakaoIcon className="size-7" />}
				{provider === "Naver" && <NaverIcon className="size-6" />}
				{provider === "Github" && <GithubIcon className="size-6" />}
				<span className="ml-2">Continue with {provider}</span>
			</Button>
		</form>
	);
}
