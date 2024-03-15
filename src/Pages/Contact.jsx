import React from "react";

import send from "../assets/send.png"
const containerStyle = {
  width: "100%",
  height: "500px",
};

export const Contact = () => {
  return (
   <div>
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
    <div>
    <address className=' h-[20vh] w-[20vh] mb-10 mt-[50vh] mr-[50vh]'>Patna Womens College</address>
        <div className=' overflow h-0 py-20 relative'>
          <iframe className=' border  left-0 top-0 absolute col-span-5 '
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.788658876585!2d85.12358927419201!3d25.61193807744627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7ef4cbe1e381%3A0x775ba2c14e2ee345!2sPatna%20Women%E2%80%99s%20College!5e0!3m2!1sen!2sin!4v1710494133082!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            width='600'
            height='450'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

   </div>
      </div>
     
  );
};

export default Contact;
