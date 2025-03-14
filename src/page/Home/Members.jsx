import React from "react";

// react icons
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";
import { div } from "framer-motion/client";

const Members = () => {
  return (
    <div className="py-20">
        <span className="text-center flex items-center justify-center text-lg uppercase">OUR Team</span>
        <h2 className="text-center text-3xl font-bold uppercase md:text-4xl pb-10">our member, couch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="w-full sm:w-[80%] lg:w-full rounded-md relative group overflow-hidden">
          {/*  image  */}
          <img
            src="https://i.ibb.co.com/jZJVPMk9/team1.jpg"
            alt="animated_cards"
            className="w-full bg-cover h-[350px] object-fill"
          />

          {/*  texts  */}
          <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
            <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
            Chris pad
            </h3>
            <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            Co - Founder Zunzo
            </p>

            {/*  socials icons  */}
            <div className="flex items-center gap-[20px] mt-[15px]">
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <ImFacebook2 className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
                <FaXTwitter className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
                <FaDribbble className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
        {/* image 2 */}
        <div className="w-full sm:w-[80%] lg:w-full rounded-md relative group overflow-hidden">
          {/*  image  */}
          <img
            src="https://i.ibb.co.com/fG4qDctW/team2.jpg"
            alt="animated_cards"
            className="w-full bg-cover h-[350px] object-fill"
          />

          {/*  texts  */}
          <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
            <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
            maverick
            </h3>
            <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            Manager
            </p>

            {/*  socials icons  */}
            <div className="flex items-center gap-[20px] mt-[15px]">
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <ImFacebook2 className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
                <FaXTwitter className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
                <FaDribbble className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
        {/* image 3 */}
        <div className="w-full sm:w-[80%] lg:w-full rounded-md relative group overflow-hidden">
          {/*  image  */}
          <img
            src="https://i.ibb.co.com/PvsHrP9g/team3.jpg"
            alt="animated_cards"
            className="w-full bg-cover h-[350px] object-fill"
          />

          {/*  texts  */}
          <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
            <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
            Jessica nguyen
            </h3>
            <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            Coach
            </p>

            {/*  socials icons  */}
            <div className="flex items-center gap-[20px] mt-[15px]">
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <ImFacebook2 className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
                <FaXTwitter className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
              <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
                <FaDribbble className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
