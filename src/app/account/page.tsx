"use client";
import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '../../firebaseConfig';
import profile from '../../assets/imgs/profile.svg';
import Navbar from "../Dashboard/page"

interface User {
  name: string | null;
  email: string | null;
}

export default function Account() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log('Current User:', currentUser);
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div> 
      <nav>
             <Navbar />
      </nav>
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row items-center p-6 md:p-0 space-y-4 md:space-y-0">
        <div className="hidden md:flex flex-col items-center justify-center w-full md:w-2/4 space-y-4 h-screen -mt-42">
          <Image src={profile} alt="Profile" className="w-full h-auto relative" width={1920} height={1980} />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-4 h-screen p-6 md:p-0 relative -top-8">
          <div className="text-center space-y-2">
            {user && (
              <>
                <label htmlFor="name" className="text-base md:text-2xl font-semibold text-gray-700 font-sans">Name</label>
                <h3 id="name" className="text-base md:text-xl py-2 font-medium text-gray-900 font-serif">{user.name}</h3>
                <label htmlFor="email" className="text-base md:text-2xl font-semibold text-gray-700 relative -bottom-4 font-sans">Email</label>
                <h3 id="email" className="text-base md:text-xl text-gray-600 py-5 font-serif">{user.email}</h3>
              </>
            )}
          </div>
          <div className="flex flex-col items-center space-y-4">
          <Link href="/resetpassword">
          <button className="px-4 py-2 text-sm font-sans md:text-base bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600">
              Change Password
            </button></Link>
            <Link href="/signin">
              <button className="flex items-center text-sm md:text-base px-16 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600">
                <FaSignOutAlt className="mr-2" />
                Sign out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
     