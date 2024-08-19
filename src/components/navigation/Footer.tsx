import { Lora } from "next/font/google";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <div className="w-full bg-[#0b1d26]">
      <footer className="max-w-screen-2xl mx-auto pb-24 px-8 flex flex-col md:flex-row md:gap-6 lg:px-20 lg:pb-56">
        <div className="md:w-1/2 md:min-h-full md:flex md:flex-col md:justify-between lg:w-6/12">
          <div>
            <p
              style={lora.style}
              className="text-3xl text-white font-semibold pb-6"
            >
              MNTN
            </p>
            <p className="w-[290px] pb-8 text-white text-pretty font-medium md:w-[240px] lg:w-[290px]">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold text-sm pb-2">
              Copyright 2024 MNTN, Inc. Terms & Privacy
            </p>
            <p className="text-gray-400 font-semibold text-sm pb-2">
              A concept by Kryston Schwarze
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-0 md:w-1/2 lg:w-3/12">
          <p className="text-[#fbd784] text-2xl font-bold pb-2">
            More on The Blog
          </p>
          <p className="text-white mt-6 cursor-pointer">About MNTN</p>
          <p className="text-white mt-6 cursor-pointer">
            Contributors & Writers
          </p>
          <p className="text-white mt-6 cursor-pointer">Write For Us</p>
          <p className="text-white mt-6 cursor-pointer">Contact Us</p>
          <p className="text-white mt-6 cursor-pointer">Privacy Policy</p>
        </div>
        <div className="hidden lg:w-3/12 lg:flex lg:flex-col">
          <p className="text-[#fbd784] text-2xl font-bold pb-2">More on MNTN</p>
          <p className="text-white mt-6 cursor-pointer">The Team</p>
          <p className="text-white mt-6 cursor-pointer">Jobs</p>
          <p className="text-white mt-6 cursor-pointer">Press</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
