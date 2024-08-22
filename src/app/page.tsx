import Footer from "@/components/navigation/Footer";
import NavigationBar from "@/components/navigation/NavigationBar";
import ContentSection from "@/components/others/ContentSection";
import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div className="relative">
        <Image
          className="w-screen h-[115vh] -z-10 object-cover object-center"
          src={"/img/main.jpg"}
          alt="mountain"
          width={2560}
          height={1080}
        />
        <span className="absolute w-full h-80 bg-transparent bottom-0 bg-gradient-to-t from-[#0b1d26] to-transparent bottom-gradient"></span>
        <div className="absolute flex flex-col items-center bg-transparent z-20 w-full bottom-[50%]">
          <div className="w-full px-12 inline-flex justify-start items-center bg-transparent md:px-16 lg:px-32 lg:w-9/12">
            <span className="bg-transparent border border-[#fbd784] w-12"></span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="text-[#fbd784] bg-transparent text-xs font-bold uppercase tracking-[0.3rem] lg:text-base">
              a hiking guide
            </p>
          </div>
          <div className="bg-transparent">
            <p
              style={lora.style}
              className="bg-transparent text-white text-[2.4rem] font-medium px-12 md:text-[3rem] md:px-16 lg:px-40 lg:text-[3.7rem] lg:w-9/12 xl:text-[4rem]"
            >
              Be prepared for the Mountains and beyond!
            </p>
          </div>
        </div>
      </div>
      <ContentSection
        tagline={"get started"}
        title={"What level of hiker are you?"}
        info={
          "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        }
        number={"01"}
        image={"/img/01.png"}
        objectPosition={"object-bottom"}
      />
      <ContentSection
        tagline={"hiking essentials"}
        title={"Picking the right Hiking Gear!"}
        info={
          "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.\nLet’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        }
        number={"02"}
        image={"/img/02.png"}
        objectPosition={"object-center"}
      />
      <ContentSection
        tagline={"where you go is the key"}
        title={"Understand Your Map & Timing"}
        info={
          "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction."
        }
        number={"03"}
        image={"/img/03.png"}
        objectPosition={"object-center"}
      />
      <Footer />
    </main>
  );
}
