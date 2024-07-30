"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaHospital,
  FaUser,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../assets/imgs/download.svg";
import Image from "next/image";
import dash from "../../assets/imgs/dash.svg";

const Dashboard = () => {
  // FOR THE NAVBAR TOGGLE BUTTON
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex">
      <div
        className={`h-screen bg-blue-100 text-white flex flex-col fixed ${
          isCollapsed ? "w-16 sm:w-20" : "w-48 sm:w-64"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20 border-b border-gray-700 px-2 sm:px-4">
          <Image
            className="relative -right-2 sm:-right-3"
            src={logo}
            alt="logo"
            width={30}
            height={30}
          />
        </div>

        <nav className="flex-grow">
          <ul className="flex flex-col p-2 sm:p-4 space-y-2">
            <li className="flex items-center py-3">
              <Link href="/home">
                <p
                  onClick={() => handleNavItem("Home")}
                  className="flex items-center space-x-2 block py-2 px-2 sm:py-2.5 sm:px-4 rounded transition duration-200 hover:bg-blue-300 cursor-pointer text-sm sm:text-base"
                >
                  <FaHome className="text-lg sm:text-xl text-gray-600" />
                  <span
                    className={`transition-opacity px-2 sm:px-6 font-serif text-gray-600 duration-300 ${
                      isCollapsed ? "opacity-0" : "opacity-100"
                    } ${isCollapsed ? "hidden" : "block"}`}
                  >
                    Home
                  </span>
                </p>
              </Link>
            </li>
            <li className="flex items-center py-3">
              <Link href="/hospitals">
                <p
                  onClick={() => handleNavItem("Hospitals")}
                  className="flex items-center space-x-2 block py-2 px-2 sm:py-2.5 sm:px-4 rounded transition duration-200 hover:bg-blue-300 cursor-pointer text-sm sm:text-base"
                >
                  <FaHospital className="text-lg sm:text-xl text-gray-600" />
                  <span
                    className={`transition-opacity font-serif px-2 sm:px-6 text-gray-600 duration-300 ${
                      isCollapsed ? "opacity-0" : "opacity-100"
                    } ${isCollapsed ? "hidden" : "block"}`}
                  >
                    Hospitals
                  </span>
                </p>
              </Link>
            </li>
            <li className="flex items-center py-3">
              <Link href="/account">
                <p
                  onClick={() => handleNavItem("Account")}
                  className="flex items-center space-x-2 block py-2 px-2 sm:py-2.5 sm:px-4 rounded transition duration-200 hover:bg-blue-300 cursor-pointer text-sm sm:text-base"
                >
                  <FaUser className="text-lg sm:text-xl text-gray-600" />
                  <span
                    className={`transition-opacity font-serif px-2 sm:px-6 text-gray-600 duration-300 ${
                      isCollapsed ? "opacity-0" : "opacity-100"
                    } ${isCollapsed ? "hidden" : "block"}`}
                  >
                    Account
                  </span>
                </p>
              </Link>
            </li>
          </ul>

          {/* Logout Button */}
          <div className="p-2 sm:p-4 absolute bottom-0">
            <Link href="/signin">
              <button className="flex items-center space-x-2 block py-2 px-2 sm:py-2.5 sm:px-4 rounded transition duration-200 hover:bg-blue-300 cursor-pointer text-sm sm:text-base">
                <FaSignOutAlt className="text-lg sm:text-xl text-gray-800" />
                <span
                  className={`transition-opacity font-semibold px-2 sm:px-6 text-gray-800 duration-300 ${
                    isCollapsed ? "opacity-0" : "opacity-100"
                  } ${isCollapsed ? "hidden" : "block"}`}
                >
                  Logout
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-grow ml-16 sm:ml-48 transition-all duration-300 relative">
        <div
          className={`fixed top-4 ${
            isCollapsed ? "left-16 sm:left-28" : "left-48 sm:left-72"
          } z-50 flex items-center space-x-2 transition-all duration-300`}
        >
          <button
            onClick={handleToggle}
            className="focus:outline-none text-gray-700 p-2 rounded-full transform transition-transform duration-300"
          >
            <FaBars className="text-lg sm:text-xl" />
          </button>
          {activeItem && (
            <span className="text-lg sm:text-xl font-bold">{activeItem}</span>
          )}
        </div>
       
      </div>
     
        <div className="flex justify-center ">
         {/* WELCOME MESSAGE FOR THE USER WITH THEIR REGISTERED NAME */}
         <h1 className="text-blue-500 py-4 text-lg  md:hidden text-semibold font-serif">MedAccess</h1>
            <button className=" text-sm font-mono md:text-2xl -bottom-48 md:hidden relative -left-20 bg-blue-400 p-4 h-16 border-none rounded-md"  >Find Nearest Hospital</button>  
  
         <Image className="hidden md:block relative -left-24" src={dash} alt="dashboard" width={700} height={700} />
  
     
        </div>
      
        
    </div>
  );
};

export default Dashboard;
