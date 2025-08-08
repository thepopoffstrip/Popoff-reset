// pages/login.js
import Image from 'next/image';
import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>PopOff – Login</title>
      </Head>
      <div className="relative w-full h-screen bg-black text-white">
        {/* Background image */}
        <Image
          src="/popoff-login-bg.png"
          alt="Login background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Login Box */}
        <div className="relative z-20 flex justify-center items-center h-full px-4">
          <div className="bg-black/80 rounded-2xl p-6 w-full max-w-sm shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-6">Get started</h1>

            {/* Google Login */}
            <button className="flex items-center w-full py-3 mb-3 bg-white text-black rounded-full justify-center gap-2 hover:bg-gray-100 transition">
              <Image src="/google-icon.png" alt="Google" width={20} height={20} />
              Sign in with Google
            </button>

            {/* X Login */}
            <button className="flex items-center w-full py-3 mb-3 bg-[#1A1A1A] text-white rounded-full justify-center gap-2 hover:bg-[#2a2a2a] transition">
              <Image src="/x-icon.png" alt="X (Twitter)" width={20} height={20} />
              Sign in with X
            </button>

            {/* Manual login */}
            <button className="w-full py-3 mb-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Sign in with password
            </button>

            {/* Bottom text */}
            <p className="text-sm text-center text-gray-300">
              Don’t have an account? <span className="underline cursor-pointer">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

