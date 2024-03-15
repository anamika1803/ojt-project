import React from 'react';
import mind from '../assets/mind.png';

const About = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold italic mb-8'>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <img
            src={mind}
            alt='About Us'
            className='w-full rounded-lg shadow-lg'
          />
        </div>
        <div>
          <p className='mb-8'>
            Leverage successful mindset practices in everyday life so you can
            achieve, do, and become even more. Just like personal care and
            health, taking charge of your mindset requires regular and
            consistent effort, and Mindset Academy is designed to support you on
            your journey to success. Here, you’ll get the knowledge of the core
            principles with strategic application and integration, so mindset
            mastery will become a part of your everyday life.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h5 className='mb-2 text-xl font-bold text-gray-900'>
                Spotting Exaggerated Claims for AI Superiority Over Experts
              </h5>
              <p className='text-gray-700'>
                Many artificial intelligence developers are prone to dismiss
                human expertise or misunderstand it.
              </p>
            </div>
            {/* Add similar divs for other articles */}
          </div>
          <p className='mt-8 mb-8'>
            A mindset is a belief that orients the way we handle situations—the
            way we sort out what is going on and what we should do. Our mindsets
            help us spot opportunities, but they can also trap us in
            self-defeating cycles. This essay isn’t about all the beliefs we
            might hold. It is about the beliefs that make a difference in our
            lives—the beliefs that distinguish people who are successful at what
            they do versus those who continually struggle.
          </p>
          <div className='bg-white p-8 rounded-lg shadow mb-8'>
            <h5 className='mb-2 text-xl font-bold text-gray-900'>
              Learn More about us
            </h5>
            <p className='mb-5 text-gray-500'>
              Stay up to date and move work with Mindset on iOS & Android.
              Download the app today.
            </p>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <a
                href='#'
                className='w-full md:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 mb-3 md:mb-0'
              >
                <svg
                  className='w-7 h-7 mr-3'
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
                <span>Download on the Mac App Store</span>
              </a>
              <a
                href='#'
                className='w-full md:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5'
              >
                <svg
                  className='w-7 h-7 mr-3'
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
                <span>Get in on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center mt-8">
        {/* Footer content */}
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
