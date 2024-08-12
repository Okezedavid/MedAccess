"use client";
import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '../../firebaseConfig';
import Navbar from "../Dashboard/page";

interface User {
  name: string | null;
  email: string | null;
}

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

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
      setIsLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen relative -top-20">
        <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {isLoading ? (
            // Skeleton Loader
            <div className="flex flex-col items-center space-y-4 animate-pulse">
              <div className="h-6 bg-gray-700 rounded w-1/3"></div>
              <div className="text-left w-full space-y-2">
                <div className="flex flex-col space-y-1">
                  <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-500 rounded w-full"></div>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-500 rounded w-full"></div>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4 w-full">
                <div className="h-10 bg-gray-600 rounded w-full"></div>
                <div className="h-10 bg-gray-600 rounded w-full"></div>
              </div>
            </div>
          ) : (
            // Actual Content
            <div className="flex flex-col items-center space-y-4">
              {user && (
                <>
                  <h2 className="text-2xl font-bold font-sans">User Profile</h2>
                  <div className="text-left w-full space-y-2">
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <h3 id="email" className="bg-white text-gray-600 rounded-md py-2 px-3 text-xs md:text-sm">{user.email}</h3>
                    </div>
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">Username</label>
                      <h3 id="name" className="bg-white text-gray-600 rounded-md py-2 px-3 text-xs md:text-sm">{user.name}</h3>
                    </div>
                  </div>
                </>
              )}
              <div className="mt-6 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4 w-full">
                <Link href="/resetpassword" className="w-full">
                  <button className="font-serif w-full py-2 mb-3 sm:mb-0 bg-blue-700 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base">Change Password</button>
                </Link>
                <Link href="/signin" className="w-full">
                  <button className="font-serif w-full py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-red-600 text-sm md:text-base">
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
