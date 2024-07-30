import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js
import profile from "../../assets/imgs/profile.svg"; // Ensure this path is correct

export default function Account() {
  return (
   <div>
    <h1 className='flex justify-center py-6 font-serif text-4xl'>Profile</h1>
     <div className="flex flex-col md:flex-row items-center p-6 md:p-0 space-y-4 md:space-y-0">
      <div className="hidden md:flex flex-col items-center justify-center w-full  md:w-2/4 space-y-4 h-screen relative -top-20">
        <Image src={profile} alt="Profile" className="w-full h-auto" width={400} height={400} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-4 h-screen p-6 md:p-0 relative -top-40">
    
        <div className="text-center space-y-2">
          <h3 className="text-base md:text-xl py-2">John Doe</h3>
          <h3 className="text-base md:text-xl text-gray-600 py-5">johndoe78@gmail.com</h3>
        </div>
        <div className="flex flex-col items-center space-y-4 ">
          <button className="px-4 py-2 text-sm font-sans md:text-base relative -bottom-6 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 ">
            Change Password
          </button>
          <Link href="/signin">
            <button className="flex items-center text-sm md:text-base px-16 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600  relative -bottom-10">
              <FaSignOutAlt className="mr-2" />
              Sign out
            </button>
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
}
