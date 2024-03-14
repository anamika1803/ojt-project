import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "../Components/Slider";

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
                <img className="card-img-top h-[60vh]  w-[60vh] p-5" src='https://picsum.photos/200/302' alt="Card image cap"  />
                <div className="card-body">
                  <p className="card-text space-x-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="col-sm">
              <div className="card space-x-4">
                <img className="card-img-top h-[50vh] w-[50vh]" src="https://picsum.photos/201/300" alt="Card image cap"  />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="col-sm">
              <div className="card space-x-4">
                <img className="card-img-top h-[50vh]  w-[50vh] translate-x-4" src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
