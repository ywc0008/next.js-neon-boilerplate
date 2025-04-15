"use server";

import { signIn } from "@/auth";

// List of supported OAuth providers
const SUPPORTED_PROVIDERS = ["google", "apple", "kakao", "naver", "github"];

export async function signInWithOauthAction(provider: string) {
	const providerLower = provider.toLowerCase();

	if (SUPPORTED_PROVIDERS.includes(providerLower)) {
		await signIn(providerLower, { redirectTo: "/" });
	} else {
		console.error("Unsupported OAuth provider:", provider);
	}
}
