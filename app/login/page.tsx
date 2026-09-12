import Logo from "../components/navbar/Logo";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center px-4 min-h-screen">
      <div className="w-full rounded-md p-5 max-w-md bg-gray-950 border border-gray-900">
        <div className="flex flex-col items-center gap-3">
          <Logo />
          <h3 className="text-xl font-semibold text-center">
            Login to Unfiltered
          </h3>
        </div>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-black rounded-lg outline-none text-sm text-white placeholder-gray-500 "
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-black rounded-lg outline-none text-sm text-white placeholder-gray-500 "
            />
          </div>
          <button className=" py-2.5 rounded-lg bg-gray-300 w-full text-black cursor-pointer text-sm font-semibold transition-all duration-100 border shadow-[4px_4px_0px_#c2410c] hover:text-black active:translate-x-1 active:translate-y-1 active:shadow-none">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
