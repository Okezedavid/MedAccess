"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/imgs/capstone logo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import sent from "../../assets/imgs/sent.svg";
import { auth } from "@/firebase/firebase"; // Ensure you have your firebase configuration here
import { sendPasswordResetEmail } from "firebase/auth";
import type { FormEvent } from "react";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Left half - sent image */}
      <div className="hidden md:flex w-full md:w-1/2 h-full justify-center items-center">
        <Image src={sent} alt="Sent" className="w-full h-full object-cover" />
      </div>

      {/* Right half - form */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <form onSubmit={handleResetPassword} className="mt-8 p-8 bg-white rounded-lg max-w-md w-full">
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
              placeholder="Enter registered email address"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-sm lg:placeholder:text-lg placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
          <div className="mt-6">
           <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
