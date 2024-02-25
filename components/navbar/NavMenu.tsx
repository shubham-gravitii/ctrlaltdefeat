import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill, RiAdminFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import Link from "next/link"
import { useCurrentRole } from "@/hooks/use-current-role";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from '@/lib/actions/auth.action';

export default function NavMenu({ className }: { className?: string }) {
    const role = useCurrentRole()
    const user = useCurrentUser()
    // const role = 'user'
    // const user = 'l'
    {
        return (
            <div className={cn(className)}>
                <Sheet>
                    <SheetTrigger><RxHamburgerMenu size={30} /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="pl-3 text-2xl text-left">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 flex flex-col">
                            <SheetTrigger asChild>
                                <Link href="/" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                    <FaHome className="inline-block mr-2" size={20} />
                                    Home
                                </Link>
                            </SheetTrigger>
                            {user ?
                                <>
                                    {role === 'user' ?
                                        <><SheetTrigger asChild>
                                            <Link href="/dashboard" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                                <FaCalendarAlt className="inline-block mr-2" size={20} />
                                                Dashboard
                                            </Link>
                                        </SheetTrigger>
                                            <SheetTrigger asChild>
                                                <Link href="/additems" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                                    <MdLeaderboard className="inline-block mr-2" size={20} />
                                                    Add Items
                                                </Link>
                                            </SheetTrigger></>
                                        :
                                        <SheetTrigger asChild>
                                            <Link href="/admin" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                                <RiTeamFill className="inline-block mr-2" size={20} />
                                                Admin
                                            </Link>
                                        </SheetTrigger>
                                    }

                                    <SheetTrigger asChild>
                                        <button className="flex items-center p-3 text-xl hover:bg-slate-200" onClick={() => {
                                            logout();
                                        }}>
                                            <RiAdminFill className="inline-block mr-2" size={20} />
                                            Logout
                                        </button>
                                    </SheetTrigger>
                                </> :
                                <>
                                    <SheetTrigger asChild>
                                        <Link href="/login" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                            <RiAdminFill className="inline-block mr-2" size={20} />
                                            Login
                                        </Link>
                                    </SheetTrigger>
                                    <SheetTrigger asChild>
                                        <Link href="/register" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                            <RiAdminFill className="inline-block mr-2" size={20} />
                                            Register
                                        </Link>
                                    </SheetTrigger></>}


                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
}