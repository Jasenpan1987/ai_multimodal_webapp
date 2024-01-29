import { SignUp } from "@clerk/nextjs";
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#A3EE98] via-[#FFBBF4] to-[#E9FC88] p-4">
      <Head>
        <title>Kavach A.I. - Your Safe Space</title>
      </Head>
      <div className="text-center mb-10 px-2">
        {/* Updated h1 tag with brand colors */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2A8D5C] via-[#DE4FF3] to-[#ECFD33]">
          KAVACH A.I.
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-[#6D6C6A] mt-2">
          A new ally in your journey to mental wellness - safe, secure, and understanding.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <SignUp />
      </div>
      <div className="text-center mt-6 px-4">
        <p className="text-[#3C3B39]">
          Share your thoughts, and let&apos;s tackle school, home, or any challenges together. 
          Your privacy is our priority. Start your journey with Kavach A.I. today.
        </p>
      </div>
    </div>
  );
}
