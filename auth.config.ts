const publicRoutes = ["/"];

const authRoutes = ["/login", "/register"];

const apiAuthPrefix = "/api/auth";
const DEFAULT_LOGIN_REDIRECT = "/";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }: any): boolean | Response {
			const isLoggedIn = !!auth?.user;
			// console.log(auth);

			const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
			const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
			const isAuthRoute = authRoutes.includes(nextUrl.pathname);

			if (isApiAuthRoute) return true;

			if (isAuthRoute) {
				if (isLoggedIn) {
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
