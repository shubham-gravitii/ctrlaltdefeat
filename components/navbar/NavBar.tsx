import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import NavMenu from "./NavMenu";
// import { ThemeSwitcher } from "./ThemeSwitcher";



export default async function NavBar() {

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
                    <Link href="/">Dashboard</Link>
                    <Link href="/events">Admin</Link>
                    <Link href="/admin" className={buttonVariants({ variant: 'default' })}>Register</Link>
                    <Link href="/admin" className={buttonVariants({ variant: 'default' })}>Login</Link>

                    {/* <Link href="#"><ThemeSwitcher /></Link> */}
                </div>
                <NavMenu className="lg:hidden" />
            </div>
        </nav >
    );
}