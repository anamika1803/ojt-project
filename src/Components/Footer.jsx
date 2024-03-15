import React from 'react';
import mindset from "../assets/mindset.jpeg";
import Date from "./Date";

export default function Footer() {
  return (
    <footer className="footer bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col justify-between">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com" className="hover:text-black hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 1 1-16.356 0A8.178 8.178 0 0 1 20 1.892ZM16.275 10c0 2.154-.654 4.21-1.884 5.928a10.77 10.77 0 0 1-1.292 1.46c-.273.27-.582.515-.916.731a13.498 13.498 0 0 1-1.077.623c-.285.148-.582.274-.89.373a13.178 13.178 0 0 1-2.497.717 14.35 14.35 0 0 1-1.8.078c-.597 0-1.184-.05-1.755-.145-.604-.1-1.184-.254-1.731-.458a13.25 13.25 0 0 1-1.508-.66c-.312-.158-.6-.334-.875-.537-.24-.176-.456-.366-.654-.574a11.297 11.297 0 0 1-.564-.587c-.175-.2-.324-.418-.443-.654-.173-.336-.26-.708-.26-1.117V7.506c-.366-.21-.681-.48-.946-.808a3.49 3.49 0 0 1-.405-.637 3.297 3.297 0 0 1-.226-.77c-.077-.482-.116-1.012-.116-1.592s.04-1.11.116-1.592c.025-.2.09-.39.195-.568.106-.179.238-.334.405-.465.265-.329.58-.6.946-.81v-.102c0-.418.086-.79.26-1.116.12-.237.268-.454.443-.653.202-.208.426-.394.673-.56.316-.202.653-.366 1.008-.49.37-.125.758-.187 1.154-.187.598 0 1.186.05 1.755.145.598.1 1.178.254 1.731.458.547.204 1.127.458 1.731.761.312.158.6.334.875.538.24.175.456.365.654.573.2.208.373.427.521.654.188.3.339.62.443.962.063.243.104.497.123.77.019.273.028.55.028.83ZM13.997 3.822c.597 0 1.184.05 1.755.145.604.1 1.184.254 1.731.458.547.204 1.127.458 1.731.761.312.158.6.334.875.538.24.175.456.365.654.573.2.208.373.427.521.654.188.3.339.62.443.962.063.243.104.497.123.77.019.273.028.55.028.83 0 2.154-.654 4.21-1.884 5.928a10.77 10.77 0 0 1-1.292 1.46c-.273.27-.582.515-.916.731a13.498 13.498 0 0 1-1.077.623c-.285.148-.582.274-.89.373a13.178 13.178 0 0 1-2.497.717 14.35 14.35 0 0 1-1.8.078c-.597 0-1.184-.05-1.755-.145-.604-.1-1.184-.254-1.731-.458a13.25 13.25 0 0 1-1.508-.66c-.312-.158-.6-.334-.875-.537-.24-.176-.456-.366-.654-.574a11.297 11.297 0 0 1-.564-.587c-.175-.2-.324-.418-.443-.654-.173-.336-.26-.708-.26-1.117V7.506c-.366-.21-.681-.48-.946-.808a3.49 3.49 0 0 1-.405-.637 3.297 3.297 0 0 1-.226-.77c-.077-.482-.116-1.012-.116-1.592s.04-1.11.116-1.592c.025-.2.09-.39.195-.568.106-.179.238-.334.405-.465.265-.329.58-.6.946-.81v-.102c0-.418.086-.79.26-1.116.12-.237.268-.454.443-.653.202-.208.426-.394.673-.56.316-.202.653-.366 1.008-.49.37-.125.758-.187 1.154-.187Z" fillRule="evenodd"/>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0ZM16.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.124 12.002 12.002 0 0 0 1.642 8.262Zm7.689 11.037a8.685 8.685 0 0 1-3.607-3.2 13.475 13.475 0 0 0 4.533-1.4 11.365 11.365 0 0 0 3.118-1.84A24.063 24.063 0 0 1 8.331 19.3ZM1.924 11.82a11.312 11.312 0 0 0-.451 3.166 10.926 10.926 0 0 0 1.136 4.487A9.407 9.407 0 0 1 1.924 11.82Zm13.692 6.687a9.34 9.34 0 0 1-3.618 1.28c-.177-.155-.354-.308-.537-.449a11.384 11.384 0 0 0 1.726-1.987 11.35 11.35 0 0 0 1.429-2.545 11.435 11.435 0 0 0 .63-3.2 12.592 12.592 0 0 0-.187-2.074 8.631 8.631 0 0 1 2.512 2.586 8.766 8.766 0 0 1-2.97 2.646 8.743 8.743 0 0 1-1.585.86 7.8 7.8 0 0 0 3.448-4.671 10.956 10.956 0 0 1-2.667 3.481A7.89 7.89 0 0 0 8.613 9.22a9.456 9.456 0 0 1-2.222-.307A8.433 8.433 0 0 0 8 9.126a8.751 8.751 0 0 1-1.858-.203A7.821 7.821 0 0 0 8 8.448a8.417 8.417 0 0 1-.93-.053A7.795 7.795 0 0 0 8 7.767a17.792 17.792 0 0 1-4.8-1.74c-.14-.095-.278-.192-.415-.29a8.625 8.625 0 0 1 1.6-.726 16.974 16.974 0 0 0 5.214-2.215c.233-.174.46-.357.68-.549a16.208 16.208 0 0 0 1.742-1.46 9.152 9.152 0 0 1-3.2 5.26Z" fillRule="evenodd"/>
                </svg>
                <span className="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
