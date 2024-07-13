"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pic1 from "../assets/imgs/pic1.jpg";
import pic2 from "../assets/imgs/pic2.webp";
import pic3 from "../assets/imgs/pic3.webp";
import pic4 from "../assets/imgs/pic4.jpg";
import logo from "../assets/imgs/capstone logo.jpg";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      easing: "ease-in-out", // easing function for the animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header
        id="header"
        className="w-full flex justify-between items-center py-4 px-6 md:px-24 text-black"
        data-aos="fade-down"
      >
        <nav className="left flex">
          <Image
            className="rounded-2xl"
            src={logo}
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className="text-lg font-bold relative top-4 font-mono ">
            MedAccess
          </h1>
        </nav>
        <nav className="flex flex-col xs:flex-row items-center xs:items-end space-y-2 xs:space-y-0 xs:space-x-2">
  <button className="text-xs md:text-sm btn-animated bg-gray-100 text-blue-900 py-2 px-4 relative right-3 hover:text-gray-100">
    Register
  </button>

  <button className="text-xs md:text-sm btn-animated bg-gray-100 text-blue-900 py-2 px-4 hover:text-gray-100">
    Log In
  </button>
</nav>

      </header>

      <main className="flex-grow flex flex-col items-center justify-between p-6 md:p-24">
        {/* Banner */}
        <section
          id="banner"
          className="w-full text-center py-16 bg-gray-100"
          data-aos="fade-up"
        >
          <div className="content">
            <h1 className="text-4xl font-bold mb-4">Ipsum sed lorem</h1>
            <p className="text-lg mb-6">
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod
              <br />
              sed arcu cras consequat lorem ipsum dolor sit amet.
            </p>
          </div>
        </section>

        {/* One */}
        <section id="one" className="wrapper py-16" data-aos="fade-up">
          <div className="inner flex flex-col md:flex-row md:justify-between">
            <div
              className="flex flex-col space-y-8 mb-8 md:mb-0 md:mr-8"
              data-aos="fade-right"
            >
              <div>
                <h3 className="text-xl font-bold">Magna ultricies</h3>
                <p>
                  Morbi in sem quis dui plalorem ipsum
                  <br />
                  euismod in, pharetra sed ultricies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ipsum adipiscing lorem</h3>
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
          className="wrapper style1 special py-16 bg-gray-200"
          data-aos="fade-up"
        >
          <div className="inner text-center">
            <h2 className="text-2xl font-bold mb-8">Feugiat lorem</h2>
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

      {/* Footer */}
      <footer
        id="footer"
        className="w-full text-white mt-auto"
        data-aos="fade-up"
      >
        <div className="bg-zinc-950 w-full py-2">
          <div className="inner flex flex-col items-center text-center md:block md:py-16 px-2 md:px-0">
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
            <ul className="actions space-y-4">
              <li>
                <a href="tel:+2347042015200" className="hover:underline">
                  (+234) 70-420-1520-0
                </a>
              </li>
              <li>
                <a
                  href="mailto:davidugochukwu080@gmail.com"
                  className="hover:underline"
                >
                  davidugochukwu080@gmail.com
                </a>
              </li>
              <li>Rukuba, behind graffiti guest inn.</li>
            </ul>
            <div className="social-icons flex space-x-4 mt-4 pl-10  justify-center">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-xl">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://x.com/DavidOkeze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 text-xl"
              >
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="mailto:davidugochukwu080@gmail.com"
                className="text-gray-400 hover:text-gray-300 text-xl"
              >
                <span className="sr-only">Email</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <hr className="w-11/12 mx-auto my-4 border-0 bg-gray-700 h-px" />
          <div className="footer-part w-full text-center md:text-left py-6 text-sm text-white md:px-28 flex flex-col md:flex-row items-center md:justify-between">
            <p>2024 MedAccess Cooperation. All rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
