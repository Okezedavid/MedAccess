import React from 'react';

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to MedAccess!</h1>
      <p className="text-lg mb-6 text-gray-600">
        Your one-stop solution for finding hospitals near you and managing your medical appointments.
      </p>
      <div className="flex justify-center mb-6 space-x-6">
        <a href="/hospitals" className="text-blue-500 hover:underline text-xl">Find Hospitals</a>
        <a href="/appointments" className="text-blue-500 hover:underline text-xl">Manage Appointments</a>
        <a href="/profile" className="text-blue-500 hover:underline text-xl">Profile</a>
      </div>
      <div className="text-left">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
        <p className="mb-2 text-gray-700">Visited XYZ Hospital on 25th July 2024</p>
        <p className="mb-2 text-gray-700">Booked an appointment with Dr. John Doe</p>
        <p className="mb-2 text-gray-700">Updated profile information</p>
      </div>
    </div>
  );
}
