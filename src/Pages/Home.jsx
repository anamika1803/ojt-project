import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
import About from "./About";


export const Home = () => {
  return (
    <div>
      <Slider />
<br/><br/>
      <h1 className=" font-bold font-serif mt-5 mb-5 text-center text-3xl ">OVERVIEW</h1><br/><br/>
        <div className="container ">
          <div className="row flex flex-row">
            <div className="col-sm">
              <div className="card space-x-4">
                <img className="card-img-top h-[50vh]  w-[50vh] translate-x-20 p-7" src='https://picsum.photos/200/302' alt="Card image cap"  />
                <div className="card-body">
                  <p className="card-text  translate-x-10 space-x-0 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="col-sm">
              <div className="card space-x-4">
                <img className="card-img-top h-[50vh] w-[50vh] translate-x-20 p-7" src="https://picsum.photos/201/300" alt="Card image cap"  />
                <div className="card-body">
                  <p className="card-text translate-x-10 space-x-0 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="col-sm">
              <div className="card space-x-4">
                <img className="card-img-top h-[50vh]  w-[50vh] translate-x-20 p-7" src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text translate-x-10 space-x-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
       <br/>
       <br/>
       <br/>
        <div className=" ml-7">
        <Link to='/About' className=" relative px-5 py-2 font-medium text-white group ml-[80vh]">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12 "></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
<span className="relative">About Us</span>
</Link>
        </div>
      </div>
  );
};

export default Home;
