import React from "react";

import send from "../assets/send.png"
const containerStyle = {
  width: "100%",
  height: "500px",
};

export const Contact = () => {
  return (
    <div className="relative">
      <div className="relative mb-35">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 blur-md"></div>
        <img src="./src/assets/students.jpg" className="h-[100vh] w-[210vh] ms-2" />
      </div>

      <div className="absolute inset-0 flex justify-center items-center mb-80">
        <div className=" absolute top-1/4 left-0 right-0 text-white text-8xl font-bold text-center ">
          Contact Us
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-20">
          <div className="bg-gray-200 shadow-lg w-72 h-40 font-bold text-3xl flex flex-col justify-center items-center">
            
            <p className="font-semibold text-3xl text-center">Address</p>{" "}
            <p className="font-semibold text-lg text-center">
              patna womens college, bailey road, Patna, 800001
            </p>{" "}
          </div>
          <div className="bg-gray-200 shadow-lg w-72 h-40 font-bold text-3xl flex flex-col justify-center items-center">
            {" "}
            
            <p className="font-semibold text-3xl text-center">Email Address</p>{" "}
            <p className="font-semibold text-lg text-center">
              patnawomenscollege@gmail.com
            </p>{" "}
          </div>
          <div className="bg-gray-200 shadow-lg w-72 h-40 font-bold text-3xl flex flex-col justify-center items-center">
            {" "}
            
            <p className="font-semibold text-3xl text-center">Phone No.</p>{" "}
            <p className="font-semibold text-lg text-center">
              +91 8376773634
            </p>{" "}
            {/* Adjust font size here */}
          </div>
        </div>
      </div>
      
      <div className="relative">
      <div className="flex justify-between mt-2 mb-20">


      <div className=' max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md'>
<h2 className='text-3xl text-center text-pink-600 font-bold mb-6'>Contact Us</h2>
<form action=''>
    <div className='mb-4'>
        <label className=' block text-white text-sm font-semibold mb-2' htmlFor=''>Your Name</label>
        <input type='text' placeholder='enter your name' className=' w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-white' required/>
    </div>
    <div className='mb-7'>
        <label   className=' block text-white text-sm font-semibold mb-2' htmlFor=''>Your Email</label>
        <input type='text' placeholder='enter your email' className=' w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 text-white' required/>
    </div>
    <div className='mb-4'>
        <label  className=' block text-white text-sm font-semibold mb-2' htmlFor=''>Message</label>
        <textarea rows='4' type='text' placeholder='Type Your message here....' className=' w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-white' required/>
    </div>
    <div className=' flex justify-center'>
        <button type='submit' className=' bg-pink-500 text-white font-semibold px-4  py-2 rounded-lg hover:bg-pink-600 focus:outline-white'>
          Send Message 
          <img className='w-5 h-5 ml-10' src={send} alt=''/>
        </button>
    </div>
    </form>
    </div>

   
      </div>
      </div>
    </div>
  );
};

export default Contact;
