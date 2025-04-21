import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import OauthLoginButtons from "./components/Oauth-login-buttons";

export default function SignInPage() {
	return (
		<div className="flex min-h-[calc(100vh-70px)] items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
					<CardDescription className="text-center">Sign in with</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<OauthLoginButtons />
				</CardContent>
			</Card>
		</div>
	);
}
