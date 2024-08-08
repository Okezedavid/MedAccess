"use client";
import Link from "next/link";
import Footer from "../app/Footer/page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pic1 from "../assets/imgs/pic1.jpg";
import pic2 from "../assets/imgs/pic2.webp";
import pic3 from "../assets/imgs/pic3.webp";
import pic4 from "../assets/imgs/pic4.jpg";
import logo from "../assets/imgs/logo.png";
import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <h1>MedAccess </h1>
      </Head>
      <header
        id="header"
        className="w-full flex justify-between items-center py-4 px-6 md:px-24 text-black"
        data-aos="fade-down"
      >
        <nav className="left flex relative -left-10">
          <Image
            className="rounded-2xl relative -right-4 -top-4"
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="text-lg font-bold relative -left-2 top-4 font-mono ">
            MedAccess
          </h1>
        </nav>
        <div className="flex flex-col xs:flex-row items-center xs:items-end space-y-2 xs:space-y-0 xs:space-x-2 relative -top-5">
          <Link href="/signin">
            {" "}
            <button className="text-xs md:text-sm text-blue-900 py-2 px-2">
              Log In
            </button>
          </Link>

          <Link href="/signup">
            {" "}
            <button className="text-xs md:text-sm btn-animated bg-gray-100 text-blue-900 py-2 px-4 relative  hover:text-gray-100">
              Register
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-between p-6 md:p-24">
        <section className="relative -top-7 text-center">
          <p className="relative -right-1 -top-3 text-xs md:text-base" data-aos="flip-right">
            Better Healthcare Access
          </p>
          <h1 className="text-2xl md:text-6xl relative font-serif" data-aos="zoom-in" data-aos-delay="200">
            Find, <span className="text-blue-700">Export</span> & <br /> <span className="text-blue-700">Share</span> Hospitals
          </h1>
        </section>

        {/* Banner */}
        <section
          id="banner"
          className="w-full text-center py-16 bg-gray-100"
          data-aos="fade-up"
        >
          <div className="content p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome to MedAccess</h1>
            <p className="text-sm mb-6 md:text-lg font-serif">
              Here, we shape the healthcare for millions worldwide.
              <br />
              <br />
              At MedAccess, we’re dedicated to making healthcare accessible to everyone. Our simple and easy-to-use tool allows you to find the best hospitals in your region, export their information, and share it with those in need. Join us in our mission to improve healthcare access for all.
            </p>
          </div>
        </section>

        {/* One */}
        <section id="one" className="wrapper py-16 font-serif" data-aos="fade-up">
          <div className="inner flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col space-y-8 mb-8 md:mb-0 md:mr-8" data-aos="fade-right">
              <div>
                <h3 className="text-xl font-bold">Find the nearest hospital to you and make an appointment.</h3>
                <p>
                  Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
                
                </p>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">Make a lasting impact on the future of your health</h3>
                <p>
                  Tristique yonve cursus jam nulla quam
                  <br />
                  loreipsu gravida adipiscing lorem
                </p>
              </div> */}
            </div>
            <div
              className="flex-item image fit round mb-8 md:mb-0 md:mx-8"
              data-aos="fade-left"
            >
              <Image
                src={pic2}
                alt="img"
                width={330}
                height={330}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col space-y-8 md:ml-8" data-aos="fade-right">
              <div>
                <h3 className="text-xl font-bold">Nationwide</h3>
                <p>
                  Hospitals from all over Nigeria.
               
                </p>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">Suscipit nibh dolore</h3>
                <p>
                  Pellentesque egestas sem. Suspendisse
                  <br />
                  modo ullamcorper feugiat lorem.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Two */}
        <section
          id="two"
          className="wrapper style1 special py-16 bg-gray-200 px-16"
          data-aos="fade-up"
        >
          <div className="inner text-center">
            <h2 className="text-2xl font-bold mb-8">Improving Healthcare Access</h2>
            <footer className="text-gray-600">
              <cite className="author font-bold">Empowering Patients & Caregivers</cite>,{" "}
            </footer>
            <br />
            <figure>
              <blockquote className="text-sm md:text-base italic mb-4">
                As a healthcare facility, we believe that everyone should have access to quality care. At MedAccess, we’re committed to empowering patients and caregivers by making healthcare information more accessible and understandable. Our goal is to improve healthcare outcomes for everyone, regardless of their background or circumstances.
              </blockquote>
            </figure>
          </div>
        </section>

        <section
  id="services"
  className=" py-16 px-6 md:px-24"
  data-aos="flip-right"
  data-aos-duration="1500"
>
  <div className="container mx-auto text-center">
    <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-blue-700">
      Our Services
    </h1>
    <ol className="list-disc list-inside space-y-4 text-left mx-auto max-w-2xl">
      <li className="text-base md:text-xl font-semibold font-mono">
        Search Hospitals
      </li>
      <li className="text-base md:text-xl font-semibold font-mono">
        Export Hospitals
      </li>
      <li className="text-base md:text-xl font-semibold font-mono">
        Share Hospitals
      </li>
      <li className="text-base md:text-xl font-semibold font-mono">
        Markdown Support
      </li>
    </ol>
  </div>
</section>


        {/* Three */}
        <section id="three" className="wrapper py-16" data-aos="fade-up">
          <div className="inner flex flex-col md:flex-row md:justify-between">
            <div className="flex-item box mb-8 md:mb-0 md:mr-8" data-aos="fade-right">
              <div className="image fit mb-4">
                <Image
                  src={pic1}
                  alt=""
                  width={418}
                  height={200}
                  className="rounded"
                />
              </div>
              <div className="content">
                <h3 className="text-lg md:text-xl font-bold font-mono">Healing starts here</h3>
                <p className="text-sm">
                We provide facilities, resources and care to empower patients on their pathway to full recovery.
                </p>
              </div>
            </div>
            <div className="flex-item box mb-8 md:mb-0 md:mx-8" data-aos="fade-left">
              <div className="image fit mb-4">
                <Image
                  src={pic3}
                  alt=""
                  width={317}
                  height={200}
                  className="rounded"
                />
              </div>
              <div className="content">
                <h3 className="text-lg md:text-xl font-bold font-mono">Free Consulation</h3>
                <p className="text-sm">
                Register with us to access services like video chats or phone calls with doctors or nurses. 
                </p>
              </div>
            </div>
            <div className="flex-item box md:ml-8" data-aos="fade-right">
              <div className="image fit mb-4">
                <Image
                  src={pic4}
                  alt=""
                  width={316}
                  height={200}
                  className="rounded"
                />
              </div>
              <div className="content">
                <h3 className="text-lg md:text-xl font-bold font-mono">Accessibility</h3>
                <p className="text-sm">
                 Our services are available to anyone and everyone who might need them.We are just a WebApp away.
                </p>
              </div>
            </div>
          </div>
        
        </section>
   
      </main>
      <div><Footer /></div>
    </div>
  );
}
