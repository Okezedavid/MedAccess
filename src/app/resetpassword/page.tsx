"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/imgs/capstone logo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import sent from "../../assets/imgs/sent.svg";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left half - sent image */}
      <div className="hidden md:flex w-full md:w-1/2 h-full justify-center items-center">
        <Image src={sent} alt="Sent" className="w-full h-full object-cover" />
      </div>

      {/* Right half - form */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <form className="mt-8 p-8 bg-white rounded-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center md:text-left relative -top-6">
            Reset Password
          </h1>
          <p className="text-gray-700 text-center md:text-left text-sm">
            By entering the details below, you'll receive a confirmation email
            for your password reset.
          </p>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              placeholder="Enter registered email address here"
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm lg:placeholder:text-lg placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              New Password
            </label>
            <input
              placeholder="Enter new password here"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm lg:placeholder:text-lg placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 -bottom-6 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="mt-6">
            <Link href="/resetconfirmed">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Reset Password
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
