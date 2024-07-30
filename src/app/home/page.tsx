import React from 'react';
import { FaHospitalAlt, FaCalendarCheck, FaUser, FaQuoteLeft } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';

export default function Home() {
  return (
    <div className="p-6 text-center bg-gray-100 min-h-screen">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
          Welcome to MedAccess!
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
          Your one-stop solution for finding hospitals near you and managing your medical appointments.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
        <p className="flex items-center text-blue-500 hover:underline text-base md:text-lg lg:text-xl">
          <MdLocalHospital className="mr-2" /> Find Hospitals
        </p>
        <p className="flex items-center text-blue-500 hover:underline text-base md:text-lg lg:text-xl">
          <FaCalendarCheck className="mr-2" /> Manage Appointments
        </p>
        <p className="flex items-center text-blue-500 hover:underline text-base md:text-lg lg:text-xl">
          <FaUser className="mr-2" /> Profile
        </p>
      </div>

      <section className="text-left mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mb-12">
          <p className="mb-2 text-gray-700 text-sm md:text-base lg:text-lg">Visited XYZ Hospital on 25th July 2024</p>
          <p className="mb-2 text-gray-700 text-sm md:text-base lg:text-lg">Booked an appointment with Dr. John Doe</p>
          <p className="mb-2 text-gray-700 text-sm md:text-base lg:text-lg">Updated profile information</p>
        </div>
      </section>

      <section className="text-left mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">Testimonials</h2>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center">
              <FaQuoteLeft className="text-blue-500 text-2xl md:text-3xl" />
              <div className="ml-4">
                <p className="text-gray-700 italic mt-4 text-sm md:text-base lg:text-lg">
                  "MedAccess helped me find the best hospital near me in no time. The appointment scheduling feature is fantastic!"
                </p>
                <p className="text-gray-800 font-semibold mt-2 text-sm md:text-base lg:text-lg">- Jane Doe</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <FaQuoteLeft className="text-blue-500 text-2xl md:text-3xl" />
              <div className="ml-4">
                <p className="text-gray-700 italic mt-4 text-sm md:text-base lg:text-lg">
                  "A wonderful and user-friendly platform. I could easily manage my medical appointments and keep track of my visits."
                </p>
                <p className="text-gray-800 font-semibold mt-2 text-sm md:text-base lg:text-lg">- John Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
