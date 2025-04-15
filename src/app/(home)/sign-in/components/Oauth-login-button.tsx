"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { GoogleIcon, AppleIcon, KakaoIcon, NaverIcon, GithubIcon } from "@/components/common/social-icons";

import { signInWithOauthAction } from "../actions";

interface OauthLoginButtonProps {
	provider: "Apple" | "Google" | "Kakao" | "Naver" | "Github";
	isDisabled?: boolean;
	onLoginStart?: () => void;
}

export default function OauthLoginButton({ provider, isDisabled = false, onLoginStart }: OauthLoginButtonProps) {
	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (onLoginStart) {
			onLoginStart();
		}

		setTimeout(() => {
			startTransition(async () => {
				await signInWithOauthAction(provider);
			});
		}, 10);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Button
				type="submit"
				disabled={isPending || isDisabled}
				className="w-full text-sm h-12 bg-white text-dark border cursor-pointer hover:bg-black/5"
			>
				{isPending ? (
					<div className="size-6 border-2 border-dark border-t-transparent rounded-full animate-spin" />
				) : (
					<>
						{provider === "Google" && <GoogleIcon className="size-8" />}
						{provider === "Apple" && <AppleIcon className="size-8" />}
						{provider === "Kakao" && <KakaoIcon className="size-7" />}
						{provider === "Naver" && <NaverIcon className="size-6" />}
						{provider === "Github" && <GithubIcon className="size-6" />}
					</>
				)}
				<span className="ml-2">{isPending ? "Signing in..." : `Continue with ${provider}`}</span>
			</Button>
		</form>
	);
}
