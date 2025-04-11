import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import KakaoLoginButton from "./components/kakao-login-button";

export default function SignInPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">로그인</CardTitle>
					<CardDescription className="text-center">계정에 로그인하여 서비스를 이용하세요</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<KakaoLoginButton />
				</CardContent>
			</Card>
		</div>
	);
}
