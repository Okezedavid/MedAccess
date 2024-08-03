"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assets/imgs/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io'; 
import dash from "../../assets/imgs/dash.svg";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <div>
      <main>
        <nav className="bg-white shadow-lg fixed-top w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <Image src={logo} alt="logo" width={100} height={100} />
              <p className="text-2xl font-bold text-gray-800 relative -left-7 font-mono">MedAccess</p>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>

            {/* Navbar Links */}
            <div className="hidden lg:flex flex-1 justify-center space-x-8">
              <Link className="relative group text-gray-600 text-sm md:text-lg hover:text-blue-500 transition-colors duration-300" href="/">
                Home
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link className="relative group text-gray-600 hover:text-blue-500 text-sm md:text-lg transition-colors duration-300" href="/hospitals">
                Search
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link className="relative group text-gray-600 hover:text-blue-500 text-sm md:text-lg transition-colors duration-300" href="/account">
                Account
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
              <div className="flex flex-col items-center mt-16 space-y-4">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IoMdClose size={24} />
                </button>

                <Link className="text-gray-600 hover:text-blue-500 text-lg font-sans" href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link className="font-sans text-gray-600 hover:text-blue-500 text-lg" href="/hospitals" onClick={() => setIsMenuOpen(false)}>
                  Search
                </Link>
                <Link className="text-gray-600 hover:text-blue-500 text-lg font-sans" href="/account" onClick={() => setIsMenuOpen(false)}>
                  Account
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <section className="px-4 py-8 bg-gray-100">
          <div className="max-w-3xl mx-auto">
            <details className="group border font-sans border-gray-200 rounded-lg shadow-sm bg-white mb-4">
              <summary className="cursor-pointer font-serif px-6 py-4 text-lg font-medium text-gray-700 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition-colors duration-300">
              Home
              </summary>
              <div className="px-6 py-4 bg-white">
                Click on <span className='font-semibold text-blue-300'>Home</span> to go back to the home page.
              </div>
            </details>
            <details className="group border font-sans border-gray-200 rounded-lg shadow-sm bg-white mb-4">
              <summary className="cursor-pointer font-serif px-6 py-4 text-lg font-medium text-gray-700 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition-colors duration-300">
                Search
              </summary>
              <div className="px-6 py-4 bg-white">
                Click on <span className='font-semibold text-blue-300'>Search</span> to view and export hospitals near you.
              </div>
            </details>
            <details className="group border font-sans border-gray-200 rounded-lg shadow-sm bg-white mb-4">
              <summary className="cursor-pointer font-serif px-6 py-4 text-lg font-medium text-gray-700 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition-colors duration-300">
                Account
              </summary>
              <div className="px-6 py-4 bg-white">
                Click on <span className='font-semibold text-blue-300'>Account</span> to view some of your details.
              </div>
            </details>
          </div>
        </section>
        <section className="pt-8">
          <div className="relative">
            <Image src={dash} alt="dashboard" layout="responsive" width={1920} height={1080} />
          </div>
        </section>
      </main>
    </div>
  );
}
