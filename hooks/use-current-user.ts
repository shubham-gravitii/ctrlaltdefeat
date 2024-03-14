import { auth } from "@/auth";
import { useSession } from "next-auth/react";

export function useCurrentUser() {
	const session = useSession();
	console.log(session);
	if (!session) return null;

	return session.data?.user;
}

export async function currentUser() {
	const session = await auth();

	return session?.user;
}
