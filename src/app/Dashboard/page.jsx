"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [username, setUsername] = useState("JohnDoe"); // Replace with actual user data
  const [state, setState] = useState("");
  const [area, setArea] = useState("");

  const handleLogout = () => {
    // Implement your logout functionality here
    router.push('/signin'); // Redirect to login page
  };

  const handleSearch = () => {
    // Implement search functionality here
    // Fetch hospitals based on selected state and area
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-4 md:px-0">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Dashboard
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#search" className="text-gray-600 hover:text-gray-900">
                Search
              </a>
              <a href="#account" className="text-gray-600 hover:text-gray-900">
                Account
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-8 px-4 md:px-0 text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to your dashboard. Here you can view your account details, manage your subscription, view your order history, and more.
        </p>
      </div>

      {/* Search Section */}
      <div id="search" className="container mx-auto py-8 px-4 md:px-0">
        <h2 className="text-2xl font-bold text-center">Search Hospitals</h2>
        <div className="mt-4 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <select
            className="p-2 border border-gray-300 rounded-lg"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            {/* Add more states as needed */}
          </select>
          <select
            className="p-2 border border-gray-300 rounded-lg"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Select Area</option>
            <option value="area1">Area 1</option>
            <option value="area2">Area 2</option>
            {/* Add more areas as needed */}
          </select>
          <button
            className="p-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Account Section */}
      <div id="account" className="container mx-auto py-8 px-4 md:px-0">
        <h2 className="text-2xl font-bold text-center">Account</h2>
        <p className="text-center text-lg text-gray-600 mt-4">
          Welcome, {username}
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="p-2 bg-red-500 text-white rounded-lg"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
