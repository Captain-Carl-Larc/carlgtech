import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="flex items-center space-x-2 rtl:space-x-reverse mb-4"
            >
              {/* Using a simple text logo for now, replace with actual brand logo if available */}
              <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
                carlgtech
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your partner for innovative web and software solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#featured-projects"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <a
                  href="mailto:info@carlgtech.com"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  info@carlgtech.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  +254 (790) 070-100
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  Thika Road, Kahawa Sukari, 00100 Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/carlgtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com/carlgtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Twitter className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/company/carlgtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} carlgtech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
