"use server";

import { signIn } from "@/auth";

// List of supported OAuth providers
const SUPPORTED_PROVIDERS = ["google", "apple", "kakao", "naver", "github"];

export async function signInWithOauth(provider: string) {
	try {
		const providerLower = provider.toLowerCase();

		// Validate provider
		if (!SUPPORTED_PROVIDERS.includes(providerLower)) {
			console.error(`Unsupported OAuth provider: ${provider}`);
			return;
		}

		// Proceed with OAuth login
		await signIn(providerLower, { redirectTo: "/" });
	} catch (error) {
		// console.error("Error during OAuth login:", error);
	}
}
