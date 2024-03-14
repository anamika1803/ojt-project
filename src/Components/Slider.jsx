import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import education from "../assets/education.jpeg"
import role from "../assets/role.jpeg"
import complete from "../assets/complete.webp"


export default function Slider() {

    // const handleButtonClick = (button) => {
    //     // Handle button click events here
    //     console.log(`Button ${button} clicked`);
    // };
    return (
        <div className="relative">
        <Carousel autoPlay showArrows={false} showStatus={false} infiniteLoop stopOnHover={false} showThumbs={false} width={"100%"}>
            <div className="relative">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 blur-md"></div>
                <img className=' max-h-[90vh]' src={education} />
            </div>
            <div className="relative">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 blur-md"></div>
                <img className=' max-h-[90vh]' src={role} />
            </div>
            <div className="relative">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 blur-md"></div>
                <img className=' max-h-[90vh]' src={complete} />
            </div>
        </Carousel>
        <div className="h-50vh flex items-center  bg-gray-300 shadow-lg w-full justify-center mt-4 text-3xl font-display">
          <h1 className="text-center font-serif">
            “Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’.”
          </h1>
        </div>

        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-20">
                <button class="btn"onClick={() => handleButtonClick("Left")}>STUDENT</button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-20 ">
                <button class="btn" onClick={() => handleButtonClick("Right")}>TEACHER</button>
            </div> */}

        </div>
    )
}
