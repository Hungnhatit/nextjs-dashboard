import Link from "next/link";


export default function LoginPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-100 text-black">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl text-center">Login</h1>
        <form action="">
          <label htmlFor="email" className="">Email</label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="flex h-10 w-full rounded-md border border-indigo-300 bg-transparent py-2 px-3 text-sm placeholder:text-indigo-400 focus:outline-none focus:ring-2 mb-4"
          />

          <label htmlFor="password" className="">Password</label>
          <input
            type="password"
            placeholder=""
            className="flex h-10 w-full rounded-md border border-indigo-300 bg-transparent py-2 px-3 text-sm placeholder:text-indigo-400 focus:outline-none focus:ring-2 mb-4"
          />

          <div className="w-full">
            <button className="bg-blue-500 text-white p-2 w-full rounded-lg">
              Login
            </button>
          </div>


        </form>
        <p className="text-center">
          Don't have an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/register">
            Sign up now
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}