import { ContentSectProps } from "@/Libs/interfaces";
import { Lora } from "next/font/google";
import Image from "next/image";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ContentSection = ({
  tagline,
  title,
  info,
  number,
  image,
  objectPosition,
}: Readonly<ContentSectProps>) => {
  return (
    <section
      className={`bg-transparent max-w-[660px] mx-auto px-6 pb-52 pt-10 sm:px-14 lg:px-8  lg:max-w-screen-xl lg:flex  lg:gap-40 ${
        parseInt(number) % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } xl:gap-52`}
    >
      <div className="w-full aspect-content-image flex lg:grid">
        <Image
          className={`object-cover ${objectPosition} z-50 lg:w-full lg:h-[680px]`}
          src={image}
          alt={title}
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative bg-transparent z-20 max-w-[550px]">
        <div className="bg-transparent pt-16 inline-flex items-center lg:pt-24">
          <span className="bg-transparent border border-[#fbd784] w-12"></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="text-[#fbd784] bg-transparent text-xs font-bold uppercase tracking-widest lg:text-base">
            {tagline}
          </p>
        </div>
        <p
          style={lora.style}
          className="bg-transparent mt-4 text-white text-pretty text-4xl font-medium sm:text-[45px] lg:mt-10 lg:text-[64px] lg:leading-[72px]"
        >
          {title}
        </p>
        <p className="bg-transparent mt-4 text-white text-pretty text-sm leading-6 whitespace-pre-wrap lg:leading-8 lg:text-semibold lg:text-base">
          {info}
        </p>
        <div className="bg-transparent inline-flex gap-2 duration-100 items-center mt-7 hover:gap-4 cursor-pointer lg:mt-10">
          <p className="text-[#fbd784] font-semibold">Read More</p>
          <Image
            className="w-[20px]"
            src={"/img/arrowForward.svg"}
            alt="arrow forward"
            width={30}
            height={30}
          />
        </div>
        <p className="bg-transparent z-0 absolute text-white opacity-10 text-[9rem] font-extrabold left-[-55px] bottom-[270px] sm:bottom-[410px] lg:text-[10rem] lg:bottom-[450px] lg:left-[-120px]">
          {number}
        </p>
      </div>
    </section>
  );
};

export default ContentSection;
