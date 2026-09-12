import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center h-16 p-10">
        <Logo />
        <Link
          href="/login"
          className="px-8 py-3 rounded-md bg-gray-300 text-black cursor-pointer text-sm font-semibold transition-all duration-100 border shadow-[4px_4px_0px_#c2410c] hover:text-black active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
