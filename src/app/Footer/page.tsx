export default function Footer () { 
    return (
        <div>
            {/* Footer */}
<footer
  id="footer"
  className="w-full text-white mt-auto bg-blue-950"
  data-aos="fade-up"
>
  <div className="container mx-auto py-8 px-4 md:px-0 text-white font-sans">
    <div className="flex flex-wrap justify-center md:justify-between">
      {/* Contact Info */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0 px-4">
        <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <i className="fas fa-phone-alt text-gray-400 mr-2"></i>
            <a href="tel:+2347042015200" className="hover:underline md:text-base text-sm ">
              (+234) 70-420-1520-0
            </a>
          </li>
          <li className="flex items-center">
            <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
            <span className="md:text-base text-sm">127 Glover Court, Ikoyi, Lagos, Nigeria</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope text-gray-400 mr-2"></i>
            <a
              href="mailto:medaccessorg06@gmail.com"
              className="hover:underline md:text-base text-sm"
            >
              medaccessorg06@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <div className="flex justify-center relative  md:-right-16 ">
          <h2 className="text-xl font-bold mb-4">Social</h2>
          <div className="social-icons flex space-x-4  relative right-24 -bottom-10">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram md:text-lg text-base"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook md:text-lg text-base"></i>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter md:text-lg text-base"></i>
            </a>
            <a
              href="mailto:medaccessorg06@gmail.com"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Email</span>
              <i className="fas fa-envelope md:text-lg text-base"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Account Links */}
      <div className="w-full md:w-1/4 mb-8 relative -right-8 md:mb-0 py-3 ">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <ul className="space-y-2">
          <li>
            <p className="hover:underline md:text-base text-sm">My Account</p>
          </li>
          <li>
            <p className="hover:underline md:text-base text-sm">Login/Register</p>
          </li>
        </ul>
      </div>

      {/* Resources Links */}
      <div className="w-full md:w-1/4 mb-8 relative -right-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Resources</h2>
        <ul className="space-y-2">
          <li>
            <p className="hover:underline md:text-base text-sm">Terms Of Service</p>
          </li>
          <li>
            <p className="hover:underline md:text-base text-sm">Give Feedback</p>
          </li>
          <li>
            <p className="hover:underline md:text-base text-sm">FAQs</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-6 relative top-2 border-gray-400" />

    {/* Copyright */}
    <div className="text-center -mb-6 md:text-left ">
      <p className="text-xs md:sm">&copy; 2024 MedAccess Cooperation. All rights Reserved</p>
    </div>
  </div>
</footer>

        </div>
    )
}