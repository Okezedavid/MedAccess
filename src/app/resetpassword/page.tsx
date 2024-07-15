import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "../../assets/imgs/capstone logo.jpg";

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="py-8">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:min-h-screen md:flex-row">
        
        <form className="mt-8 md:ml-8 p-8 bg-white rounded-lg  max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center md:text-left relative ">Reset Password</h1>
          <p className="text-gray-700 text-center md:text-left text-sm">By entering your email address to reset your password,you'll receive a link in your inbox that will allow you to reset your password.</p>
          <div className="mt-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              placeholder="Enter registered email address here"
              type="email"
              name="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-6">
            <Link href="/resetconfirmed">
              <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300">
                Reset Password
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
