import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import { z } from "zod";

declare module "next-auth" {
	interface User {
		// Add your additional properties here:
		id?: string | undefined;
		role?: string | null | unknown;
	}
}

declare module "@auth/core/adapters" {
	interface AdapterUser {
		// Add your additional properties here:
		role?: string | null | unknown;
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string() })
					.safeParse(credentials);
				try {
					if (parsedCredentials.success) {
						const { email, password } = parsedCredentials.data;

						const user = await prisma.user.findUnique({
							where: { email },
						});
						// console.log(user);
						if (!user) throw new Error("No such user found.");
						else {
							if (user.password === password) {
								// console.log(user)
								return user;
							} else throw new Error("Invalid credentials.");
						}
					} else {
						throw new Error(
							"zod says: " +
								parsedCredentials.error.issues[0].message
						);
					}
				} catch (error: any) {
					throw error.message;
				}
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.role = user.role;
				token.id = user.id;
			}

			return token;
		},
		session({ session, token }) {
			console.log(session);
			session.user.role = token.role;
			session.user.id = token.id as string;

			return session;
		},
	},
});
