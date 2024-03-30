import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
import About from "./About";
import EnrollmentForm from "./EnrollmentForm"; // Import the EnrollmentForm component

// Import images from the assets folder
import image1 from "../assets/aiimag.jpeg";
import image2 from "../assets/IOT.jpeg";
import image3 from "../assets/websiteI.jpg";

export const Home = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const openEnrollmentForm = () => {
    setShowEnrollmentForm(true);
  };

  const closeEnrollmentForm = () => {
    setShowEnrollmentForm(false);
  };

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
                  Software development is the process of creating, designing, programming, testing, and maintaining software applications, frameworks, or other software components. It encompasses a range of activities aimed at building reliable, scalable, and efficient software solutions to meet specific user needs or business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      
      {/* Button to open enrollment form */}
      <div className="text-center">
        <button onClick={openEnrollmentForm} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Enroll Now
        </button>
      </div>

      {/* Display EnrollmentForm component conditionally */}
      {showEnrollmentForm && <EnrollmentForm onClose={closeEnrollmentForm} />}
      <div><br></br></div>
      <footer className="mt-auto bg-gray-200 dark:bg-gray-900 py-4 text-center">
        {/* Footer content */}
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
