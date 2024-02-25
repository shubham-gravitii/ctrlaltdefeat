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
		authorized({ auth, req }: any): boolean | Response {
			const isLoggedIn = !!auth?.user;

			const isApiAuthRoute =
				req.nextUrl.pathname.startsWith(apiAuthPrefix);
			const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
			const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);

			if (isApiAuthRoute) return true;

			console.log(req);

			if (isAuthRoute) {
				if (isLoggedIn) {
					return Response.redirect(
						new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl)
					);
				}
				return true;
			}
			if (!isLoggedIn && !isPublicRoute) {
				return Response.redirect(new URL("/login", req.nextUrl));
			}
			return true;
		},
	},
	providers: [],
};
