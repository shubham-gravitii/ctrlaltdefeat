"use client"
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import NavMenu from "./NavMenu";
import { useCurrentRole } from "@/hooks/use-current-role";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { ThemeSwitcher } from "./ThemeSwitcher";
import { logout } from '@/lib/actions/auth.action';



export default function NavBar() {
    // const role = useCurrentRole()
    // const user = useCurrentUser()
    const role = 'user'
    const user = 'l'

    return (
        <nav className="w-full shadow-md relative ">
            <div className="py-3 sm:px-10 px-3 flex mob:flex-col m-auto justify-between items-center">
                <Link
                    href={"/"}
                    className="text-[1.6rem] font-bold text-green-500 logo mob:border-b mob:border-b-gray-200 flex justify-center items-center"
                >
                    AgroTech
                </Link>
                <div className="hidden lg:flex justify-center items-center space-x-1 sm:space-x-5">
                    {user ?
                        <>
                            {role === 'user' && 
                            <>
                            <Link href="/dashboard">Dashboard</Link>
                            <Link href="/additems">Add Items</Link>
                            </>
                            }
                            {role === 'admin' && <Link href="/events">Admin</Link>}
                            <button  className={buttonVariants({ variant: 'default' })} onClick={()=>{
                                 logout();

                            }}>Logout</button>
                        </>
                        :
                        <>
                            <Link href="/admin" className={buttonVariants({ variant: 'default' })}>Register</Link>
                            <Link href="/admin" className={buttonVariants({ variant: 'default' })}>Login</Link>
                        </>}

                    {/* <Link href="#"><ThemeSwitcher /></Link> */}
                </div>
                <NavMenu className="lg:hidden" />
            </div>
        </nav >
    );
}