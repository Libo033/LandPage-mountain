import { Lora } from "next/font/google";
import Image from "next/image";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NavigationBar = () => {
  return (
    <div>
      <nav className="max-w-[1920px] mx-auto px-6 pt-10 flex justify-between md:px-20">
        <div>
          <span
            style={lora.style}
            className="text-3xl text-white font-semibold md:text-4xl"
          >
            MNTN
          </span>
        </div>
        <ul className="hidden md:w-2/3 md:flex md:items-center md:justify-center">
          <li className="text-sm text-white font-extrabold px-6 py-2 cursor-pointer duration-200 hover:text-[#fbd784] hover:translate-y-[-2px]">
            Equipment
          </li>
          <li className="text-sm text-white font-extrabold px-6 py-2 cursor-pointer duration-200 hover:text-[#fbd784] hover:translate-y-[-2px]">
            About us
          </li>
          <li className="text-sm text-white font-extrabold px-6 py-2 cursor-pointer duration-200 hover:text-[#fbd784] hover:translate-y-[-2px]">
            Blog
          </li>
        </ul>
        <div className="flex items-center gap-1 cursor-pointer">
          <Image
            className="w-[24px]"
            src={"/img/account.svg"}
            alt="account"
            width={30}
            height={30}
          />
          <p className="text-sm text-white font-extrabold">Account</p>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
