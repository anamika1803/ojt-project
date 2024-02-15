import React from "react";

export const About = () => {
  return (
    <div>
     
      <div className="container mx-auto px-4 py-8 flex justify-around absolute top-[30vh] left-0 right-0 z-10">
        <div>
          <img
            src="../src/assets/cap1.png"
            alt="Cap Image"
            className="h-[10vh] w-[10vh]"
          />
          <p className="text-white font-bold text-3xl">5000+</p>
          <p className="text-white">Total Students</p>
        </div>
        <div>
          <img
            src="../src/assets/teachers.png"
            alt="Teachers Image"
            className="h-[10vh] w-[10vh]"
          />
          <p className="text-white font-bold text-3xl">200+</p>
          <p className="text-white">Experienced Teachers</p>
        </div>
        <div>
          <img
            src="../src/assets/dept.png"
            alt="Department Image"
            className="h-[10vh] w-[10vh]"
          />
          <p className="text-white font-bold text-3xl">30+</p>
          <p className="text-white">Departments</p>
        </div>
        <div>
          <img
            src="../src/assets/book.png"
            alt="Book Image"
            className="h-[10vh] w-[10vh]"
          />
          <p className="text-white font-bold text-3xl">10000+</p>
          <p className="text-white">Library Books</p>
        </div>
      </div>



      {/* Image positioned above the first image */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#090518] bg-opacity-90"></div>
        <img
          src="../src/assets/lib2.jpg"
          alt="First Image"
          className="h-[60vh] w-[210vh]"
        />
      </div>

      <div className="text-center mt-8">
        <p className="text-[#FF6500]">Our Lecturers</p>
        <p className="text-5xl text-[#000033] font-bold">Our Experienced And <br/>Expert teachers</p>
        </div>



        <div className="grid grid-cols-3 gap-0 mt-8 ml-20 mr-20">
        {/* First Box */}
        <div className="text-center">
          <img
            src="../src/assets/teacher1.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
          <div className="bg-[#000033] w-[50vh] h-[10vh] mx-auto">
          <p className="text-[#FF6500] text-2xl font-bold" >Ragini Desai</p>
          <p className="text-white">Professor</p>
          </div>
        </div>
        {/* Second Box */}
        <div className="text-center">
          <img
            src="../src/assets/teacher2.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
          <div className="bg-[#000033] w-[50vh] h-[10vh] mx-auto">
          <p className="text-[#FF6500] text-2xl font-bold" >Amit Jaiswal</p>
          <p className="text-white">Assistant Professor</p>
          </div>
        </div>
        {/* Third Box */}
        <div className="text-center">
          <img
            src="../src/assets/teacher3.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
          <div className="bg-[#000033] w-[50vh] h-[10vh] mx-auto">
          <p className="text-[#FF6500] text-2xl font-bold" >R.S Sinha</p>
          <p className="text-white">Professor</p>
          </div>
        </div>
      </div>
      

      <div className="text-center mt-16">
        <p className="text-[#FF6500]">Testimonial</p>
        <p className="text-5xl text-[#000033] font-bold">Our Students <br/>Valuable Comments</p>
        </div>

      <div class="grid gap-10   rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-3 px-8  bg-white dark:bg-orange-800 mt-12">
      
      <figure class="flex shadow-lg rounded-md mt-4 ms-2 border-2 flex-col items-center justify-center p-8 text-center bg-white border-orange-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2x1 mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <img src=" ../src/assets/qoutes.jpg" className=" ms-28  "/>
          <p class="my-4 text-black">
          The campus environment fosters a strong sense of community and belonging. From dorm life to campus events, I've formed lifelong friendships and cherished memories that I'll always treasure."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Roberta Casas</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Mass Communication 
            </div>
          </div>
        </figcaption>
      </figure>
     
      <figure class="flex shadow-lg rounded-md mt-4 ms-2 border-2 flex-col items-center justify-center p-8 text-center bg-white  border-orange-200   md:rounded-ss-lg  dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <img src=" ../src/assets/qoutes.jpg"  className=" ms-28 mb-8 "/>
           <p class="my-4   text-black">
          "Great institute for proper education and research. Here all teachers are high experienced. Really great for career building."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Isha Gupta</div>
            <div class="text-sm text-gray-500 dark:text-gray-400 ">
              Computer Science
            </div>
          </div>
        </figcaption>
      </figure>

      <figure class="flex shadow-lg rounded-md mt-4 ms-2 border-2  flex-col items-center justify-center p-8 text-center bg-white border-orange-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <img src=" ../src/assets/qoutes.jpg" className=" ms-28 "/>
          <p class="my-4 text-black">
          "The faculty members at this college are truly exceptional. Their dedication to teaching and mentorship has had a profound impact on my academic success and personal development."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Joseph McFall</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              B.Com
            </div>
          </div>
        </figcaption>
      </figure>
    </div>


      <div className="text-center mt-8">
        <p className="text-[#FF6500]">Campus Life</p>
        <p className="text-5xl text-[#000033] font-bold">Great Moments Of <br/>Campus Life</p>
        </div>

        <div className="grid grid-cols-3 mt-8 ml-40 mr-40 ">
        
          <img
            src="../src/assets/gal1.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
        
        
          <img
            src="../src/assets/gal2.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
          
        
          <img
            src="../src/assets/gal3.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
        
      </div>
       
      <div className="grid grid-cols-3 mt-4 ml-40 mr-40 ">
        
          <img
            src="../src/assets/gal4.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
        
        
          <img
            src="../src/assets/gal5.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
          
        
          <img
            src="../src/assets/gal6.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
        
      </div>

      <div className="grid grid-cols-3 gap-0 mt-4 ml-40 mr-40">
        <div className="text-center">
          <img
            src="../src/assets/gal7.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
        </div>
        <div className="text-center">
          <img
            src="../src/assets/gal8.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
          </div>
        <div className="text-center">
          <img
            src="../src/assets/gal9.jpg"
            alt="Box Image"
            className="h-[50vh] w-[50vh] mx-auto"
          />
        </div>



      </div>

      {/* Rest of the content */}
      <div className="container ms-6  mt-6 px-4 py-8">
        <h1 className="text-6xl font-bold mb-4 text-[#000033]">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img
              src="../src/assets/PW.png"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
              style={{ maxWidth: "500px", maxHeight: "400px" }}
            />
            {/* Adjust the maxWidth and maxHeight values as needed */}
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-[#FF6500]">We Are The<br/>Best Institute<br/>Since 1948</h2>
            <p className="mb-4">
              Welcome to Campus Academy, where academic excellence meets a
              vibrant community of learners. Founded 1948, Campus Academy has
              been at the forefront of higher education, nurturing intellects,
              fostering innovation, and preparing students for success in a
              rapidly evolving world.
            </p>
            <p className="mb-4">
              At Campus Academy, we believe in the transformative power of
              education. Our dedicated faculty members are experts in their
              fields, committed to providing a rigorous yet supportive learning
              environment. Through personalized attention and hands-on
              experiences, we empower our students to think critically,
              communicate effectively, and embrace lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
