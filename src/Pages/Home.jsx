import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
import About from "./About";

// Import images from the assets folder
import image1 from "../assets/aiimag.jpeg";
import image2 from "../assets/IOT.jpeg";
import image3 from "../assets/websiteI.jpg";

export const Home = () => {
  return (
    <div>
      <Slider />
      <br/><br/>
      <h1 className="font-bold font-serif mt-5 mb-5 text-center text-3xl">OVERVIEW</h1><br/><br/>
      <div className="container ">
        <div className="row flex flex-row">
          <div className="col-sm">
            <div className="card space-x-4">
              <img className="card-img-top h-[50vh]  w-[50vh] translate-x-20 p-7" src={image1} alt="Card image cap"  />
              <div className="card-body">
                <p className="card-text  translate-x-10 space-x-0 ">AI, or Artificial Intelligence, refers to the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning (the acquisition of information and rules for using that information), reasoning (using rules to reach approximate or definite conclusions), and self-correction. Particular applications of AI include expert systems, speech recognition, and machine vision.</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="col-sm">
            <div className="card space-x-4">
              <img className="card-img-top h-[50vh] w-[50vh] translate-x-20 p-7" src={image2} alt="Card image cap"  />
              <div className="card-body">
                <p className="card-text translate-x-10 space-x-0 ">IoT, or the Internet of Things, refers to the interconnected network of devices, objects, and systems that communicate and exchange data with each other over the internet. These devices, often embedded with sensors, actuators, and software, can collect and transmit data, enabling them to perform various tasks and interact with their environment autonomously or 
                with minimal human intervention.</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="col-sm">
            <div className="card space-x-4">
              <img className="card-img-top h-[50vh]  w-[50vh] translate-x-20 p-7" src={image3} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text translate-x-10 space-x-0">
Software development is the process of creating, designing, programming, testing, and maintaining software applications, frameworks, or other software components. It encompasses a range of activities aimed at building reliable, scalable, and efficient software 
solutions to meet specific user needs or business requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      {/* <div className="ml-7">
        <Link to='/About' className=" relative px-5 py-2 font-medium text-white group ml-[80vh]">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12 "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">About Us</span>
        </Link>
      </div> */}
      <div></div>
      <footer className="mt-auto bg-gray-200 dark:bg-gray-900 py-4 text-center">
        {/* Footer content */}
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
