import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Slider />

      <div className="text-center mt-12">
        <p className="text-[#FF6500]">We Offer</p>
        <p className="text-5xl text-[#000033] font-bold">Top Popular Courses</p>
        </div>

      <div className="mt-10 min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-10">
          <div className="relative">
            <img
              src="../src/assets/AI.jpg"
              className="rounded-lg shadow-lg w-80 h-80 transform transition duration-300 ease-in-out hover:scale-110"
              alt="Image 1"
            />
            <div className=" font-semibold text-3xl absolute bottom-10 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-center p-2  hover:text-orange-500">
              AI Course
            </div>
          </div>
          <div className="relative">
            <img
              src="../src/assets/computer.jpg"
              alt="Image 2"
              className="rounded-lg shadow-lg w-80 h-80 transform transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="font-semibold text-3xl absolute bottom-10 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-center p-2 hover:text-orange-500">
              Computer Science
            </div>
          </div>
          <div className="relative">
            <img
              src="../src/assets/CivilEngineers.jpg"
              alt="Image 3"
              className="rounded-lg shadow-lg w-80 h-80 transform transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="font-semibold text-3xl absolute bottom-10 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-center p-2 hover:text-orange-500">
              Civil Engineering
            </div>
          </div>
          <div className="relative">
            <img
              src="../src/assets/fashion.jpg"
              className="rounded-lg shadow-lg w-80 h-80 transform transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="font-semibold text-3xl absolute bottom-10 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-center p-2 hover:text-orange-500">
              Fashion Designing
            </div>
          </div>
          <div className="relative">
            <img
              src="../src/assets/amm.jpg"
              alt="Image 4"
              className="rounded-lg shadow-lg w-80 h-80 transform transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="font-semibold text-3xl absolute bottom-10 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-center p-2 hover:text-orange-500">
              Advertising & Marketing Management
            </div>
          </div>
          <div className="relative">
            <img
              src="../src/assets/cems.jpg"
              alt="Image 5"
              className="rounded-lg shadow-lg w-80 h-80 transform transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="font-semibold text-3xl absolute bottom-10 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-center p-2 hover:text-orange-500">
              Mass Communication
            </div>
          </div>
          <div className="flex justify-center items-center col-span-3">
          <button
              className="w-40 mb-4  text-[18px] mt-10 rounded-full bg-orange-500 text-white hover:bg-[#000033] hover:text-white py-2 transition-colors duration-300"
              type="submit"
            >
              <a href="Courses"> See More</a>
            </button>
            </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between mt-20 mb-20">
          <div className="relative mr-8">
            <img
              src="../src/assets/stud.jpg"
              className="shadow-xl mt-20 ms-40 h-78 w-80"
              style={{ transform: "rotate(-20deg)" }}
              alt="Rotated Image"
            />
            <img
              src="../src/assets/stud2.jpg"
              className=" border shadow-xl ms-14 h-78 w-80"
              style={{ transform: "rotate(-20deg)" }}
            />
            
          </div>
          <div className="flex-1">
            <p className="text-[#FF6500] ms-9">About Us</p>
            <p className="font-bold text-5xl text-[#000033] text-left mb-2 mt-50 ml-8">
              Best Institute For <br />
              Proper Education
            </p>
            <p
              className=" overflow-hidden ml-8 mr-16 mt-10 text-justify text-xl"
              style={{ maxHeight: "10rem" }}
            >
              At our college, education transcends the boundaries of textbooks
              and classrooms, venturing into realms of intellectual curiosity,
              personal growth, and societal engagement. Here, every corner
              resonates with the hum of intellectual discourse, the fervor of
              creativity, and the warmth of community spirit.
            </p>
            <p
              className=" overflow-hidden ml-8 mr-16 mt-4 text-justify text-xl"
              style={{ maxHeight: "10rem" }}
            >
              Our esteemed faculty, comprising scholars, mentors, and
              visionaries, are the guiding lights of our institution. With a
              passion for teaching matched only by their dedication to
              mentorship, they ignite the flames of curiosity within each
              student, nurturing critical thinking, creativity, and a thirst for
              knowledge that knows no bounds.
            </p>
            <button
              className="w-40 mb-4 ml-8 text-[18px] mt-10 rounded-full bg-orange-500 text-white hover:bg-[#000033] hover:text-white py-2 transition-colors duration-300"
              type="submit"
            >
              <a href="About"> About Us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
