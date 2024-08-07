"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firestore } from "@/firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import login from "../../assets/imgs/login.svg";
import Spinner from "../spinner/spinner";  

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);  // State to manage the loading spinner
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);  // Set loading to true when login starts

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        const registrationData = localStorage.getItem("registrationData");
        const { firstName = "", lastName = "", gender = "" } = registrationData ? JSON.parse(registrationData) : {};

        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });
        }
        router.push("/Welcome");
      } else {
        setError("Please verify your email address");
      }
    } catch (error: any) {
      console.error("Login Error:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);  // Set loading to false when login completes
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);  // Set loading to true when Google Sign-In starts

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(firestore, "users", user.uid), {
            firstName: user.displayName?.split(' ')[0] || '',
            lastName: user.displayName?.split(' ')[1] || '',
            email: user.email,
          });
        }
        router.push("/Welcome");
      }
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);  // Set loading to false when Google Sign-In completes
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    loading ? (
      <Spinner />
    ) : (
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 relative">
        {/* Illustration container */}
        <div className="hidden md:block w-full md:w-1/2 flex justify-center">
          <Image src={login} alt="login" className="h-full" />
        </div>
        {/* Form container */}
        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleLogin} className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex justify-center relative -top-7  font-mono ">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div className="mt-4 text-center ">
                <p className="text-gray-700 text-xs md:text-base">
                  Forgot your password?{" "}
                  <Link
                    className="text-blue-500 hover:underline font-medium text-xs md:text-base"
                    href="/resetpassword"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
              <div className="py-2 flex justify-center">
                <h2 className=" text-sm md:text-lg font-sans">CREATE AN ACCOUNT? <Link className="text-blue-600 hover:underline" href="/signup">Signup</Link></h2>
              </div>
            </form>
            <div className="mt-6 flex flex-col space-y-4">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300"
              >
                <FaGoogle className="mr-2 text-red-500" /> Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300">
                <FaFacebook className="mr-2 text-blue-500" /> Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
