import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



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
                <img className=' max-h-[90vh]' src="../src/assets/4.jpg" />
            </div>
            <div className="relative">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 blur-md"></div>
                <img className=' max-h-[90vh]' src="../src/assets/PWC.png" />
            </div>
            <div className="relative">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 blur-md"></div>
                <img className=' max-h-[90vh]' src="../src/assets/5.jpg" />
            </div>
        </Carousel>

        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-20">
                <button class="btn"onClick={() => handleButtonClick("Left")}>STUDENT</button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-20 ">
                <button class="btn" onClick={() => handleButtonClick("Right")}>TEACHER</button>
            </div> */}

        </div>
    )
}
