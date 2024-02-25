import {
	publicRoutes,
	apiAuthPrefix,
	DEFAULT_LOGIN_REDIRECT,
	authRoutes,
} from "@/lib/auth/route";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }: any): boolean | Response {
			const isLoggedIn = !!auth?.user;
			console.log(auth);

			const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
			const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
			const isAuthRoute = authRoutes.includes(nextUrl.pathname);

			console.log(2);
			if (isApiAuthRoute) return true;

			console.log(3);
			if (isAuthRoute) {
				console.log(4);
				if (isLoggedIn) {
					console.log(5);
					return Response.redirect(
						new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)
					);
				}
				return true;
			}
			if (!isLoggedIn && !isPublicRoute) {
				return Response.redirect(new URL("/login", nextUrl));
			}
			return true;
		},
	},
	providers: [],
};
