import React from 'react'
import mind from '../assets/mind.png'

const About = () => {
  return (
    <div className='container ms-6  mt-6 px-4 py-3'>
      <h1 className='text-4xl font-bold mb-4 italic mt-6'>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='md:col-span-1'>
          <img
            src={mind}
            alt='About Us'
            className='w-full rounded-lg shadow-lg'
            style={{ maxWidth: '500px', maxHeight: '400px' }}
          />
          {/* Adjust the maxWidth and maxHeight values as needed */}
        </div>
        <div className='md:col-span-1'>
          <h2 className='text-2xl font-bold mb-4'>
            <br />
          </h2>
          <p className='mb-4'>
            Leverage successful mindset practices in everyday life so you can
            achieve, do, and become even more. Just like personal care and
            health, taking charge of your mindset requires regular and
            consistent effort, and Mindset Academy is designed to support you on
            your journey to success. Here, you’ll get the knowledge of the core
            principles with strategic application and integration, so mindset
            mastery will become a part of your everyday life.
          </p>
          <br />
          <br />
          <br />
          <br />
          <div className=' flex flex-row  gap-7 h-[70vh] w-[100vh] ms-10 -translate-x-full items-center p-20 space-x-20  '>
            <a
              href='#'
              class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 '
            >
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white '>
                Spotting Exaggerated Claims for AI Superiority Over Experts
              </h5>
              <p class='font-normal text-gray-700 dark:text-gray-400'>
                Many artificial intelligence developers are prone to dismiss
                human expertise or misunderstand it.
              </p>
            </a>

            <a
              href='#'
              class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Agency Is the Highest Level of Personal Competence
              </h5>
              <p class='font-normal text-gray-700 dark:text-gray-400'>
                Human agency is a mindset plus a set of learnable actions that
                help us attain what we want in life.
              </p>
            </a>

            <a
              href='#'
              class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Growth Mindset vs. Fixed Mindset
              </h5>
              <p class='font-normal text-gray-700 dark:text-gray-400'>
                If we have a growth mindset, the whole universe can change.
              </p>
            </a>

            <a
              href='#'
              class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Opportunities Are More Than Luck
              </h5>
              <p class='font-normal text-gray-700 dark:text-gray-400'>
                Those with a growth mindset about opportunity make active plans
                and persist toward goals.
              </p>
            </a>
          </div>
          <br />
          <br />
          <br />
          <p className=' mb-4'> 
            A mindset is a belief that orients the way we handle situations—the
            way we sort out what is going on and what we should do. Our mindsets
            help us spot opportunities, but they can also trap us in
            self-defeating cycles. This essay isn’t about all the beliefs we
            might hold. It is about the beliefs that make a difference in our
            lives—the beliefs that distinguish people who are successful at what
            they do versus those who continually struggle.
          </p>

          <div className='w-[80vh] h-[40vh] bg-cover p-8 text-center items-center mr-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-5 -translate-x-full top-10'>
            <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
              Learn More about us
            </h5>
            <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
              Stay up to date and move work with Mindset on iOS & Android.
              Download the app today.
            </p>
            <div className='items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
              <a
                href='#'
                className='w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
              >
                <svg
                  className='me-3 w-7 h-7'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='apple'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                  ></path>
                </svg>
                <div className='text-left rtl:text-right'>
                  <div className='mb-1 text-xs'>Download on the</div>
                  <div className='-mt-1 font-sans text-sm font-semibold'>
                    Mac App Store
                  </div>
                </div>
              </a>
              <a
                href='#'
                className='w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
              >
                <svg
                  className='me-3 w-7 h-7'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='google-play'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'
                  ></path>
                </svg>
                <div className='text-left rtl:text-right'>
                  <div className='mb-1 text-xs'>Get in on</div>
                  <div className='-mt-1 font-sans text-sm font-semibold'>
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
