export default function Footer() {
  return (
    <footer id="footer" className="w-full text-white mt-auto bg-blue-950" data-aos="fade-up">
      <div className="container mx-auto py-8 px-4 md:px-0 text-white font-sans">
        {/* Email Subscribe Section */}
        <div className="flex justify-center -mt-12 relative">
          <div className="w-4/5 md:w-1/2 lg:w-1/3 flex relative -top-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-3xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none placeholder:text-sm"
            />
            <button className="px-2 py-4 md:py-5 bg-blue-900 text-sm text-white rounded-r-3xl hover:bg-blue-700 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-8">
          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 px-4">
            <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-gray-400 mr-2"></i>
                <p className="hover:underline md:text-base text-sm">
                  (+234) 70-420-1520-0
                </p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                <span className="md:text-base text-sm">
                  127 Glover Court, Ikoyi, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-gray-400 mr-2"></i>
                <p className="hover:underline md:text-base text-sm">
                  medaccessorg06@gmail.com
                </p>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex justify-center relative md:-right-16">
              <h2 className="text-xl font-bold mb-4">Social</h2>
              <div className="social-icons flex space-x-4 relative right-24 -bottom-10">
                <p className="text-gray-400 hover:text-gray-300 text-xl">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram md:text-lg text-base"></i>
                </p>
                <p className="text-gray-400 hover:text-gray-300 text-xl">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook md:text-lg text-base"></i>
                </p>
                <p className="text-gray-400 hover:text-gray-300 text-xl">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter md:text-lg text-base"></i>
                </p>
                <p className="text-gray-400 hover:text-gray-300 text-xl">
                  <span className="sr-only">Email</span>
                  <i className="fas fa-envelope md:text-lg text-base"></i>
                </p>
              </div>
            </div>
          </div>

          {/* Account Links */}
          <div className="w-full md:w-1/4 mb-8 relative -right-8 md:mb-0 py-3">
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
        <hr className="my-6 relative top-2 border-gray-500" />

        {/* Copyright */}
        <div className="text-center -mb-6 md:text-left">
          <p className="text-xs md:sm">&copy; 2024 MedAccess Cooperation. All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
