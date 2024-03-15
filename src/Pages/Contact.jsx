import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../assets/contactimg.jpg"; // Import the image

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pmxisk1",
        "template_iaeoeka",
        form.current,
        "Jf7IR0yDL7wAz9VXt"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify(); // Display success message
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Message sent successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen px-8 py-12"> {/* Adjusted padding */}
      <div className="flex-grow">
        <div className="mt-16 md:mt-0 md:flex md:flex-row">
          {/* Left Side - Text */}
          <div
            className="md:w-1/2 bg-cover bg-center p-6 relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Talk with Us</h2>
                <p className="text-lg">
                  We are here to answer any questions you may have about our services.
                  Reach out to us and we'll respond as soon as we can.
                </p>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="user_name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center mt-8"> {/* Added margin top */}
        {/* Footer content */}
        © 2024 Your Company. All rights reserved.
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Contact;
