"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import illustration from "../../assets/imgs/illustration.svg.svg";
import Spinner from "../spinner/spinner";  // Import the Spinner component

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);  // State to manage the loading spinner
  const router = useRouter();

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);  // Set loading to true when registration starts

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);  // Set loading to false if there's an error
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      localStorage.setItem(
        "registration data",
        JSON.stringify({
          firstName,
          lastName,
          gender,
          email,
        })
      );

      setMessage("User registered successfully. Please verify your email address and proceed to login");

      setFirstName("");
      setLastName("");
      setGender("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);  // Set loading to false when registration completes
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);  // Set loading to true when Google Sign-In starts

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setMessage("Google sign-in successful. User: " + user.displayName);
      router.push("/Dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);  // Set loading to false when Google Sign-In completes
    }
  };

  return (
    loading ? (
      <Spinner />
    ) : (
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 relative">
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
          <Image src={illustration} alt="Illustration" className="h-full w-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl flex justify-center font-medium font-serif mb-6 text-gray-900">Create An Account</h1>
            <p className="text-lg flex justify-center font-medium font-serif mb-6 text-gray-900">
              Kickstart Healthy Living
            </p>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-gray-700 mb-2 text-sm font-semibold">First Name</label>
                  <input
                    placeholder="Enter firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName"
                    id="firstName"
                    required
                    className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="block text-gray-700 mb-2 text-sm font-semibold">Last Name</label>
                  <input
                    placeholder="Enter lastname"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    required
                    className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-semibold">Email Address</label>
                <input
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-gray-700 mb-2 text-sm font-semibold">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-300 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
                <div className="relative w-full">
                  <label htmlFor="password" className="block text-sm text-gray-700 mb-2 font-semibold">Password</label>
                  <input
                    placeholder="Enter Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    required
                    className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <div
                    className="absolute inset-y-0 right-3 -bottom-6 flex items-center cursor-pointer text-blue-900"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <div className="relative w-full">
                  <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2 font-semibold">Confirm Password</label>
                  <input
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    className="w-full p-2 border border-gray-300 rounded-xl placeholder:font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <div
                    className="absolute inset-y-0 right-3 -bottom-6 flex items-center cursor-pointer text-blue-900"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p className="text-green-500 text-sm">{message}</p>}
              <button
                type="submit"
                className="w-full font-medium bg-blue-500 text-white p-3 mt-6 rounded-2xl hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button>
              <div className="mt-4 text-center">
                <p className="text-gray-700">
                  Already have an account?{" "}
                  <Link className="text-blue-500 hover:underline font-medium" href="/signin">
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <div className="mt-6 flex flex-col space-y-4">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300"
              >
                <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
              </button>
              <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition duration-300">
                <FaFacebook className="mr-2 text-blue-500" /> Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
