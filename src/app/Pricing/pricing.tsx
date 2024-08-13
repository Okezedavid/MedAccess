import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="pricing" className="wrapper py-16" data-aos="fade-up">
      <div className="inner text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-sm md:text-base mb-14 font-sans" data-aos="flip-up">Choose the plan that best suits your needs and enjoy enhanced features.</p>
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {/* Basic Plan */}
          <div
            className="flex-1 lg:w-1/3 px-8 py-10  rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-8">Free</p>
            <p className="mb-8">Perfect for individual users</p>
            <ul className="text-left space-y-4">
              <li>✔ Search Nearby Hospitals</li>
              <li>✔ Export Hospital Data (Limited)</li>
              <li>✔ Basic Markdown Support</li>
              <li>✔ Standard User Support</li>
              <li>✔ Ads on Exported Data</li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div
            className="flex-1 lg:w-1/3 px-8 py-10  rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold mb-4">Professional</h3>
            <p className="text-3xl font-bold mb-8">$15/month</p>
            <p className="mb-8">For frequent users and professionals</p>
            <ul className="text-left space-y-4">
              <li>✔ Advanced Search Filters</li>
              <li>✔ Unlimited Export Options</li>
              <li>✔ Enhanced Markdown Support</li>
              <li>✔ Priority User Support</li>
              <li>✔ Ad-free Experience</li>
            </ul>
          </div>

          {/* Teams Plan */}
          <div
            className="flex-1 lg:w-1/3 px-8 py-10  rounded-lg text-gray-900 hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold mb-4">Teams</h3>
            <p className="text-3xl font-bold mb-8">$25/month</p>
            <p className="mb-8">For collaborative teams and organizations</p>
            <ul className="text-left space-y-4">
              <li>✔ Team-based Hospital Searches</li>
              <li>✔ Advanced Export Features</li>
              <li>✔ Full Markdown Integration</li>
              <li>✔ Team Management and Roles</li>
              <li>✔ Dedicated Account Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
