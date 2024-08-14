"use client";
import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { auth } from '../../firebaseConfig';
import Navbar from "../Dashboard/page";

interface User {
  name: string | null;
  email: string | null;
}

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [showModal, setShowModal] = useState(false); 

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

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    auth.signOut().then(() => {
      // Redirect to sign-in page
      window.location.href = "/signin";
    }).catch((error) => {
      console.error('Logout Error:', error);
    });
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen relative -top-20">
        <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {isLoading ? (
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
                <button onClick={handleLogout} className="font-serif w-full py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 text-sm md:text-base">
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-3xl shadow-lg p-6 w-96">
            <h3 className="text-base font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-end space-x-4">
              <button onClick={cancelLogout} className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
              <button onClick={confirmLogout} className="py-2 px-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800">yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
