"use client";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";
import logo from "../../assets/imgs/capstone logo.jpg";
import back2 from "../../assets/imgs/back2.jpg";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-8 relative">
      
      <div className="hidden md:block absolute inset-0 bg-black opacity-50"></div>
      <div className="hidden md:block absolute inset-0" style={{ backgroundImage: `url(${back2.src})`, opacity: 0.5 }}></div>
      
      {/* Form container */}
      <div className="w-full max-w-md bg-transparent md:bg-white p-8 rounded-lg  md:shadow-none relative z-10">
        <div className="flex text-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <br />
        <form className="space-y-4">
          <h1 className="text-2xl font-bold mb-6 text-gray-900 relative -right-24">Sign In</h1>
          <p className="mb-6 font-semibold text-gray-700">Fill in the information below to sign in</p>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button type="submit" className="w-full font-medium bg-blue-500 text-white p-3 mt-6 rounded-2xl hover:bg-blue-600 transition duration-300">Log In</button>
          <div className="mt-4 text-center">
            <p className="text-gray-700 text-sm md:text-base ">Forgot your password? <Link className="text-blue-500 hover:underline font-medium" href="/resetpassword">Reset Password</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
