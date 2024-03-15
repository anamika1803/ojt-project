import React from "react";
import mindset from "../assets/mindset.jpeg";
import { Link } from "react-router-dom";

function Navbar({ username, userEmail }) {
  return (
    <nav className="bg-white border-[#3D3B3C] dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <header className="flex justify-between items-center py-0.2px-1">
          <img src={mindset} className="h-12" alt="Mindset Academy" />
          <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-0 font-serif">
            Mindset Academy
          </div>
        </header>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="About"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="Courses"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
              >
                Course
              </a>
            </li>
           
            <li>
              <a
                href="Contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="Dashboard"
                className="  block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
              >
                Dashboard
              </a>
            </li>
          </ul>
        
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
