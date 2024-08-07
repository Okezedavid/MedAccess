import React from "react";
import Image from "next/image";
import dash from "../../assets/imgs/dash.svg";
import Dashboard from "../Dashboard/page"

export default function Welcome() { 
    return ( 
        <div>
            <nav>
                <Dashboard />
            </nav>
            <section className="px-4 py-8 bg-gray-100">
          <div className="max-w-3xl mx-auto">
            <details className="group border font-sans border-gray-200 rounded-lg shadow-sm bg-white mb-4">
              <summary className="cursor-pointer font-serif px-6 py-4 text-lg font-medium text-gray-700 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition-colors duration-300">
                Home
              </summary>
              <div className="px-6 py-4 bg-white">
                Click on{" "}
                <span className="font-semibold text-blue-300">Home</span> to go
                back to the home page.
              </div>
            </details>
            <details className="group border font-sans border-gray-200 rounded-lg shadow-sm bg-white mb-4">
              <summary className="cursor-pointer font-serif px-6 py-4 text-lg font-medium text-gray-700 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition-colors duration-300">
                Search
              </summary>
              <div className="px-6 py-4 bg-white">
                Click on{" "}
                <span className="font-semibold text-blue-300">Search</span> to
                view and export hospitals near you.
              </div>
            </details>
            <details className="group border font-sans border-gray-200 rounded-lg shadow-sm bg-white mb-4">
              <summary className="cursor-pointer font-serif px-6 py-4 text-lg font-medium text-gray-700 bg-gray-200 rounded-t-lg hover:bg-gray-300 transition-colors duration-300">
                Account
              </summary>
              <div className="px-6 py-4 bg-white">
                Click on{" "}
                <span className="font-semibold text-blue-300">Account</span> to
                view some of your details.
              </div>
            </details>
          </div>
        </section>

        <section className="pt-8">
          <div className="relative">
            <Image
              src={dash}
              alt="dashboard"
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        </section>
        </div>
    )
}