import Link from "next/link";
export default function LoginPage() {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="flex-1 border border-gray-200 py-7 px-10 rounded-xl max-w-md mx-8 font-sans">
            <h1 className="flex justify-center items-center text-2xl font-semibold border-b border-gray-100 mb-5">Login</h1>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label>Email:</label>
                    <input type="email" className="flex-1 border border-gray-300 rounded-md bg-gray-50 focus:bg-white outline-none focus:border-blue-300 px-3 py-2 max-w-xl min-w-0"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Password:</label>
                    <input type="password" className="flex-1 border border-gray-300 rounded-md bg-gray-50 focus:bg-white outline-none focus:border-blue-300 px-3 py-2 max-w-xl min-w-0"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg outline-none my-3 max-w-20">Login</button>
                    <Link href='/signUp' className="text-sm underline underline-offset-8 text-blue-500">Don't have an account</Link>
                </div>
            </div>
        </div> 
      </div>
    );
  }
  