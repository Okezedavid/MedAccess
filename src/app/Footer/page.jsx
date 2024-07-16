export default function Footer () { 
    return (
        <div>
            {/* Footer */}
<footer
  id="footer"
  className="w-full text-white mt-auto bg-zinc-950"
  data-aos="fade-up"
>
  <div className="container mx-auto py-8 px-4 md:px-0">
    <div className="flex flex-wrap justify-center md:justify-between">
      {/* Contact Info */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <i className="fas fa-phone-alt text-gray-400 mr-2"></i>
            <a href="tel:+2347042015200" className="hover:underline">
              (+234) 70-420-1520-0
            </a>
          </li>
          <li className="flex items-center">
            <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
            <span>127 Glover Court, Ikoyi, Lagos, Nigeria</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope text-gray-400 mr-2"></i>
            <a
              href="mailto:medaccessorg06@gmail.com"
              className="hover:underline"
            >
              medaccessorg06@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <div className="flex justify-center md:justify-start p-6">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="social-icons flex space-x-4  relative right-24 -bottom-10">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="mailto:medaccessorg06@gmail.com"
              className="text-gray-400 hover:text-gray-300 text-xl"
            >
              <span className="sr-only">Email</span>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Account Links */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:underline">My Account</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Login/Register</a>
          </li>
        </ul>
      </div>

      {/* Resources Links */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Resources</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:underline">Terms Of Service</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Give Feedback</a>
          </li>
          <li>
            <a href="#" className="hover:underline">FAQs</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-6 relative top-2 border-gray-700" />

    {/* Copyright */}
    <div className="text-center -mb-6 md:text-left text-sm">
      <p>&copy; 2024 MedAccess Cooperation. All rights Reserved</p>
    </div>
  </div>
</footer>

        </div>
    )
}