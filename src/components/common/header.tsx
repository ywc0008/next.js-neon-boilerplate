import Link from "next/link";
import { auth } from "@/auth";

import { Button } from "@/components/ui/button";

import { GithubIcon } from "./social-icons";
import SignOutButton from "./sign-out-button";
import { AuroraText } from "../magicui/aurora-text";
import { WordRotate } from "../magicui/word-rotate";

export default async function Header() {
	const session = await auth();

	return (
		<header className="sticky top-0 z-50 w-full flex items-center justify-center py-4 px-6 md:px-12 border-b bg-white">
			<div className="container flex items-center justify-between">
				{/* Logo */}
				<div className=" z-10">
					<Link href="/" className="flex items-center gap-2">
						<AuroraText className="text-xl md:text-3xl font-bold text-green-500">Next.js+Neon</AuroraText>
					</Link>
				</div>

				{/* User */}
				<div className="flex items-center gap-2 z-10">
					{session?.user && (
						<WordRotate className="text-xl font-bold mr-2" words={["Hello", `${session.user.name}!`]} duration={2000} />
					)}
					<Link target="_blank" href="https://github.com/ywc0008/next.js-neon-boilerplate">
						<GithubIcon className="size-6" />
					</Link>
					{session?.user ? (
						<SignOutButton session={session} />
					) : (
						<Button asChild variant="outline">
							<Link href="/sign-in">Sign In</Link>
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
