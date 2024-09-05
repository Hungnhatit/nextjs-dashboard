export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 lg:px-32 bg-gray-900 text-white">
        <h1 className="text-3xl font-semibold mb-6">Hello, <span className="text-blue-400">Digital Fortress</span></h1>
        <p className="mb-8">Log in to platform to start creating magic.</p>

        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm" htmlFor="email">Email</label>
            <div className="flex items-center border-b border-gray-500 focus-within:border-blue-400">

              <input
                type="email"
                id="email"
                placeholder="candidate.digitalfortress@gmail.com"
                className="appearance-none bg-transparent border-none w-full text-white p-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm" htmlFor="password">Password</label>
            <div className="flex items-center border-b border-gray-500 focus-within:border-blue-400">              
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="appearance-none bg-transparent border-none w-full text-white p-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2 text-blue-400 focus:ring-blue-400" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-400 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 py-2 rounded-lg hover:bg-green-500 transition duration-200"
          >
            Log in
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>
            Don't have an account? <a href="#" className="text-blue-400 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-cover bg-center relative" style={{ backgroundImage: 'url("/pattern.jpg")' }}>
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="relative p-12 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Digital Fortress has been a game-changer for our content creation process.</h2>
          <p className="mb-8 text-lg">The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.</p>
          <p className="font-semibold">Lily Alisson</p>
          <p className="text-sm">CMO at Digital Fortress</p>
        </div>
      </div>
    </div>
  );
}