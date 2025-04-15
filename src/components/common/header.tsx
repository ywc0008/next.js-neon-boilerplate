import Link from "next/link";
import { auth } from "@/auth";

import { Button } from "@/components/ui/button";
import SignOutButton from "./sign-out-button";
import { GithubIcon } from "./social-icons";

export default async function Header() {
  const session = await auth();

  return (
    <header className="py-4 px-6 md:px-12 flex items-center justify-between border-b">
      {/* 로고 영역 */}
      <div className="z-10">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl md:text-3xl font-bold text-green-500">
            Next.js+Neon
          </h1>
        </Link>
      </div>

      {/* 사용자 영역 */}
      <div className="flex items-center gap-2 z-10">
        <Link
          target="_blank"
          href="https://github.com/ywc0008/next.js-neon-boilerplate"
        >
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
    </header>
  );
}
