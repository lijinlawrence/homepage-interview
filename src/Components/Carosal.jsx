import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Carosal = () => {
  return (
    <div>
      <div className="carousel carousel-center md:max-w-3xl max-w-sm  p-4 space-x-4  rounded-box ">
        <div className="carousel-item">
          <div className="card card-compact w-72  bg-base-100 shadow-xl">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <span className=" text-2xl text-green-700 font-semibold">
                Lower
              </span>
              <span className=" text-2xl text-green-700 font-semibold">
                Intrest Rates
              </span>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={img3} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <span className=" text-2xl text-green-700 font-semibold">
                Intrest
              </span>
              <span className=" text-2xl text-green-700 font-semibold">
                Free Payments
              </span>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={img1} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <span className=" text-2xl text-green-700 font-semibold">
                Discount On
              </span>
              <span className=" text-2xl text-green-700 font-semibold">
                Materials
              </span>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <span className=" text-2xl text-green-700 font-semibold">
                Lower
              </span>
              <span className=" text-2xl text-green-700 font-semibold">
                Intrest Rates
              </span>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={img3} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <span className=" text-2xl text-green-700 font-semibold">
                Intrest
              </span>
              <span className=" text-2xl text-green-700 font-semibold">
                Free Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosal;
