"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/imgs/capstone logo.jpg";
import login from "../../assets/imgs/login.svg";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 relative">
      {/* Illustration container */}
      <div className="hidden md:block w-full md:w-1/2 flex justify-center">
        <Image src={login} alt="login" className="h-full" />
      </div>
      {/* Form container */}
      <div className="w-full md:w-1/2 p-8">
        <div className="max-w-md mx-auto">
         
          <form className="space-y-4">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 relative -right-16 font-mono">
              Welcome Back
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                placeholder="Enter Email"
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div
                className="absolute inset-y-0 right-3 -bottom-6 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button
              type="submit"
              className="w-full font-medium bg-blue-500 text-white p-3 mt-6 rounded-2xl hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm md:text-base">
                Forgot your password?{" "}
                <Link
                  className="text-blue-500 hover:underline font-medium"
                  href="/resetpassword"
                >
                  Reset Password
                </Link>
              </p>
            </div>
          </form>
          <div className="mt-6 flex flex-col space-y-4">
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300">
              <FaGoogle className="mr-2 text-red-500" /> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300">
              <FaFacebook className="mr-2 text-blue-500" /> Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
