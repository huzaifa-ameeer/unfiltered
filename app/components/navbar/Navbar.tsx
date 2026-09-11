import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
        <div className='flex justify-between items-center h-16 p-10'>
            <Logo/>
            <Link href="/login"
            className="px-8 py-3 rounded-full bg-white text-black cursor-pointer text-sm font-semibold hover:bg-white/50 transition"
            >
            Login
            </Link>
        </div>
    </nav>
  )
}
