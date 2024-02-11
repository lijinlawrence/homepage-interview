import React from "react";
import community from "../assets/membership.jpg";
import Carosal from "./Carosal";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[100vh] md:p-10 flex flex-wrap items-center">
        <div className=" md:w-[30%] flex flex-col justify-center items-center ">
          <div className="">
            <p className=" text-3xl font-robo">New Arrival</p>
            <p className=" mt-5 font-robo"> JOIN TODAY</p>
            <p className=" border-b-2  border-black w-10"></p>
          </div>
          <div>
            <img src={community} alt="community" className="w-80 mt-5" />
          </div>
          <button className="btn md:w-80 w-64  rounded-3xl my-5 font-semibold text-2xl text-blue-400">
            {" "}
            Join Now
          </button>
        </div>

        <div className=" w-[70%] mx-auto flex flex-col justify-center items-center mt-5 0 ">
          <div className=" text-center">
            <p className=" md:text-4xl text-xl text-blue-400 font-bold">
              Unlock Premium Features Now
            </p>
            <div className="divider ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
          </div>

          <div>
            <Carosal />
          </div>
          <div className=" flex flex-col justify-center items-center mb-5">
            <button className="btn md:w-80  w-64 rounded-3xl mt-5 font-semibold text-xl bg-green-500 text-white">
              UNLOCK NOW
            </button>
            <button className="btn md:w-64 w-56 rounded-3xl mt-5 font-semibold text-xl bg-green-500 text-white">
              DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
