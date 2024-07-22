import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <Link to="/" className="font-bold text-3xl">
            <span className="bg-gradient-to-t bg-indigo-500 via-purple-500 from-pink-700 px-2 py-1 rounded-lg text-white">
              Mern
            </span>
            Blog
          </Link>
        </div>
        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <nav>
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="mt-2">© 2024 Aspire Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
