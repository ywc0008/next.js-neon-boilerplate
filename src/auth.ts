import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";
import Apple from "next-auth/providers/apple";
import GitHub from "next-auth/providers/github";

// *DO NOT* create a `Pool` here, outside the request handler.

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
	// Create a `Pool` inside the request handler.
	const pool = new Pool({ connectionString: process.env.DATABASE_URL });

	return {
		adapter: NeonAdapter(pool),
		providers: [Google, Apple, Kakao, Naver, GitHub],
		session: {
			strategy: "jwt",
			maxAge: 60 * 60 * 24 * 7,
		},
	};
});
