"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/imgs/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <div>
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="logo" width={80} height={80} />
            <p className="text-xl font-bold text-gray-800 relative -left-5 font-mono">
              MedAccess
            </p>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>

          {/* Navbar Links */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8 font-serif">
            <Link
              className="relative group text-gray-600 text-sm md:text-lg hover:text-blue-500 transition-colors duration-300 "
              href="/Welcome"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              className="relative group text-gray-600 hover:text-blue-500 text-sm md:text-lg transition-colors duration-300"
              href="/hospitals"
            >
              Search
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              className="relative group text-gray-600 hover:text-blue-500 text-sm md:text-lg transition-colors duration-300"
              href="/account"
            >
              Account
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out z-40 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col items-center mt-4 space-y-4">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoMdClose size={30} />
              </button>

              <Link
                className="text-gray-600 hover:text-blue-500 text-lg font-sans"
                href="/Welcome"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="font-sans text-gray-600 hover:text-blue-500 text-lg"
                href="/hospitals"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                className="text-gray-600 hover:text-blue-500 text-lg font-sans"
                href="/account"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="mt-24">
        {/* Your main content goes here */}
      </main>
    </div>
  );
}
