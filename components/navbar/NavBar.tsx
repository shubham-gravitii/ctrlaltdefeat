"use client"
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import NavMenu from "./NavMenu";
import { useCurrentRole } from "@/hooks/use-current-role";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from '@/lib/actions/auth.action';



export default function NavBar() {
    const role = useCurrentRole()
    const user = useCurrentUser()
    // const role = 'user'
    // const user = 'l'
    // console.log(role, user);

    return (
        <nav className="w-full shadow-md relative z-10">
            <div className="py-3 sm:px-10 px-3 flex mob:flex-col m-auto justify-between items-center">
                <Link
                    href={"/"}
                    className="text-[1.6rem] font-bold text-green-500 logo mob:border-b mob:border-b-gray-200 flex justify-center items-center"
                >
                    AgroTech
                </Link>
                <div className="hidden font-semibold lg:flex justify-center items-center space-x-1 sm:space-x-5">
                    {user ?
                        <>
                            {role === 'USER' &&
                                <>
                                    <Link href="/dashboard">Dashboard</Link>
                                    <Link href="/additems">Add Items</Link>
                                    <Link href="/marketplace">Marketplace</Link>
                                    <Link href="/post">Post</Link>
                                    <Link href="/analysis">Items Analytics</Link>
                                </>
                            }
                            {role === 'ADMIN' && <Link href="/admin">Admin</Link>}
                            <button className={buttonVariants({ variant: 'default' })} onClick={async () => {
                                await logout();

                            }}>Logout</button>
                        </>
                        :
                        <>
                            <Link href="/register" className={buttonVariants({ variant: 'default' })}>Register</Link>
                            <Link href="/login" className={buttonVariants({ variant: 'default' })}>Login</Link>
                        </>}
                </div>
                <NavMenu className="lg:hidden" />
            </div>
        </nav >
    );
}