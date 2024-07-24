"use client";
import Link from "next/link";
import Footer from "../app/Footer/page"
// import { useRouter } from 'next/router';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pic1 from "../assets/imgs/pic1.jpg";
import pic2 from "../assets/imgs/pic2.webp";
import pic3 from "../assets/imgs/pic3.webp";
import pic4 from "../assets/imgs/pic4.jpg";
import logo from "../assets/imgs/logo.jpg";
import Image from "next/image";

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
      <header
        id="header"
        className="w-full flex justify-between items-center py-4 px-6 md:px-24 text-black"
        data-aos="fade-down"
      >
        <nav className="left flex relative -left-10">
          <Image
            className="rounded-2xl relative -right-4"
            src={logo}
            alt="logo"
            width={80}
            height={80}
          />
          <h1 className="text-lg font-bold relative top-4 font-mono ">
            MedAccess
          </h1>
        </nav>
        <div className="flex flex-col xs:flex-row items-center xs:items-end space-y-2 xs:space-y-0 xs:space-x-2">

          <Link href="/signin">
            {" "}
            <button className="text-xs md:text-sm   text-blue-900 py-2 px-4 ">
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
        {/* Banner */}
        <section
          id="banner"
          className="w-full text-center py-16 bg-gray-100"
          data-aos="fade-up"
        >
          <div className="content p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome to MedAccess
            </h1>
            <p className="text-sm mb-6 md:text-lg font-serif">
            Here, we shape the healthcare for millions worldwide.
              <br />
              <br />
             MedAccess is a platform where users can search for hosiptals in their areas, export hospital details for your records and enhance your healthcare experience by connecting with others and sharing valuable resources.
            </p>
          </div>
        </section>

        {/* One */}
        <section id="one" className="wrapper py-16 font-serif"  data-aos="fade-up">
          <div className="inner flex flex-col md:flex-row md:justify-between">
            <div
              className="flex flex-col space-y-8 mb-8 md:mb-0 md:mr-8"
              data-aos="fade-right"
            >
              <div>
                <h3 className="text-xl font-bold">Find the nearest hospital to you and make an appointment.</h3>
                <p>
                Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
                  <br />
                  euismod in, pharetra sed ultricies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Make a lasting impact on the future of your health</h3>
                <p>
                  Tristique yonve cursus jam nulla quam
                  <br />
                  loreipsu gravida adipiscing lorem
                </p>
              </div>
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
            <div
              className="flex flex-col space-y-8 md:ml-8"
              data-aos="fade-right"
            >
              <div>
                <h3 className="text-xl font-bold">Tempus nullam</h3>
                <p>
                  Sed adipiscing ornare risus. Morbi estes
                  <br />
                  blandit sit et amet, sagittis magna.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Suscipit nibh dolore</h3>
                <p>
                  Pellentesque egestas sem. Suspendisse
                  <br />
                  modo ullamcorper feugiat lorem.
                </p>
              </div>
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
            <h2 className="text-2xl font-bold mb-8">Who are we?</h2>
            <figure>
              <blockquote className="text-lg italic mb-4">
                &quot;Morbi in sem quis dui placerat ornare. Pellentesque odio
                nisi, euismod in, pharetra magna etiam lorem ultricies in diam.
                Sed arcu cras consequat.&quot;
              </blockquote>
              <footer className="text-gray-600">
                <cite className="author font-bold">Jane Anderson</cite>,{" "}
                <cite className="company">CEO, Untitled</cite>
              </footer>
            </figure>
          </div>
        </section>

        {/* Three */}
        <section id="three" className="wrapper py-16" data-aos="fade-up">
          <div className="inner flex flex-col md:flex-row md:justify-between">
            <div
              className="flex-item box mb-8 md:mb-0 md:mr-8"
              data-aos="fade-right"
            >
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
                <h3 className="text-xl font-bold">Consequat</h3>
                <p>
                  Placerat ornare. Pellentesque od sed euismod in, pharetra
                  ltricies edarcu cas consequat.
                </p>
              </div>
            </div>
            <div
              className="flex-item box mb-8 md:mb-0 md:mx-8"
              data-aos="fade-left"
            >
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
                <h3 className="text-xl font-bold">Adipiscing</h3>
                <p>
                  Morbi in sem quis dui placerat Pellentesque odio nisi, euismod
                  pharetra lorem ipsum.
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
                <h3 className="text-xl font-bold">Malesuada</h3>
                <p>
                  Nam dui mi, tincidunt quis, accu an porttitor, facilisis
                  luctus que metus vulputate sem magna.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div><Footer/></div>

    </div>
  );
}
