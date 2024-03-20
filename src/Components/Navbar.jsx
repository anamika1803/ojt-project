import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBook, FaPhone, FaChartBar, FaUser,FaSignInAlt ,FaSignOutAlt  } from "react-icons/fa";
import mindset from "../assets/mindset.jpeg";

function Navbar({ username, userEmail }) {
  const location = useLocation();
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    // Redirect to the home page
    window.location.href = '/';
  };
  const isLoggedIn = localStorage.getItem('token');
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
              <Link
                to="/"
                className={
                  location.pathname === "/home"
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                }
              >
                <FaHome className="inline-block mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                }
              >
                <FaInfoCircle className="inline-block mr-1" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={
                  location.pathname === "/courses"
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                }
              >
                <FaBook className="inline-block mr-1" /> Courses
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                }
              >
                <FaPhone className="inline-block mr-1" /> Contact
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={
                  location.pathname === "/dashboard"
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                }
              >
                <FaChartBar className="inline-block mr-1" /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={
                  location.pathname === "/profile"
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-serif"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                }
              >
                <FaUser className="inline-block mr-1" /> Profile
              </Link>
            </li>
            {!isLoggedIn ? (
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                >
                  <FaSignInAlt className="inline-block mr-1" /> Login
                </Link>
              </li>
            ) : null}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-serif"
                >
                 <FaSignOutAlt className="inline-block mr-1" />  Logout
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
