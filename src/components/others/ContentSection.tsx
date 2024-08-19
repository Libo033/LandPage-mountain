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
    <section className="bg-[#0b1d26] relative px-6 pb-52 pt-10">
      <div className="w-full h-80 flex">
        <Image
          className={`object-cover ${objectPosition} z-20`}
          src={image}
          alt={title}
          width={1920}
          height={1080}
        />
      </div>
      <div className="z-20">
        <div className="pt-16 inline-flex items-center">
          <span className="border border-[#fbd784] w-12"></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="text-[#fbd784] text-xs font-bold uppercase tracking-widest">
            {tagline}
          </p>
        </div>
        <p
          style={lora.style}
          className="mt-4 text-white text-pretty text-4xl font-medium"
        >
          {title}
        </p>
        <p className="mt-4 text-white text-pretty text-sm leading-6 whitespace-pre-wrap">
          {info}
        </p>
      </div>
      <div className="inline-flex gap-2 duration-100 items-center mt-7 hover:gap-4 cursor-pointer">
        <p className="text-[#fbd784] font-semibold">Read More</p>
        <Image
          className="w-[20px]"
          src={"/img/arrowForward.svg"}
          alt="arrow forward"
          width={30}
          height={30}
        />
      </div>
      <p className="absolute text-white opacity-10 text-[9rem] font-extrabold left-[-30px] bottom-[450px] z-10">
        {number}
      </p>
    </section>
  );
};

export default ContentSection;
