import { signIn } from "@/auth";

import { Button } from "@/components/ui/button";
import { Kakao } from "@/components/common/social-icons";

export default function KakaoLoginButton() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("kakao", { redirectTo: "/" });
			}}
		>
			<Button type="submit" className="w-full bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90">
				<Kakao />
				<span className="ml-2">카카오로 로그인</span>
			</Button>
		</form>
	);
}
