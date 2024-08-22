import Footer from "@/components/navigation/Footer";
import NavigationBar from "@/components/navigation/NavigationBar";
import ContentSection from "@/components/others/ContentSection";
import Image from "next/image";

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
