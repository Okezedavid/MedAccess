import React from 'react';
import Footer from "../../app/Footer/page"


export default function Dashboard() { 
  return (
    <div>
        {/* Dashboard */}
        <nav>
            <div className="container mx-auto py-4 px-4 md:px-0">
                <ul className="flex justify-center md:justify-end space-x-4">
                    <li>
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                            Dashboard
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container mx-auto py-8 px-4 md:px-0">
            <h1 className="text-4xl font-bold text-center">Dashboard</h1>
        </div>

    
            <p className="text-center text-lg text-gray-600 mt-4">
            Welcome to your dashboard. Here you can view your account details,
            manage your subscription, view your order history and more.
            </p>

   <div>
    <button>Sign out</button>
   </div>
    </div>
  )
}