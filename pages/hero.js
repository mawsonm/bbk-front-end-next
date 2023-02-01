import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div id="home" className="min-h-[100vh] w-full relative">
      <Image
        className="transform -scale-x-100 sm:translate-x-0 object-cover sm:object-center object-right  -z-10 "
        src="/images/hero.jpg"
        alt="Chef plating Filet Mignon"
        fill={true}
      />
      <Navbar />
      <div className="2xl:max-w-[1600px] w-full md:w-[50%] 2xl:w-full mx-auto md:ml-8 2xl:mx-auto flex flex-col gap-12 sm:items-start items-center justify-center sm:h-[calc(100vh-96px)] min-h-[100vh]">
        <h1 className="font-bold sm:text-[72px] text-[48px] sm:leading-[5rem] leading-[3rem] sm:text-left text-center">
          Wondering what&apos;s
          <br /> for dinner tonight?
        </h1>
        <div className="text-center sm:text-left">
          <h2 className="text-[36px] font-semibold -my-5 sm:mb-0 mb-8">
            Don&apos;t worry.
          </h2>
          <span className="font-semibold font-fancy text-red-300 sm:text-[64px] text-[48px] -mt-8">
            Bri Bri&apos;s{"            "}
          </span>
          {"       "}
          <span className="text-[36px] font-normal sm:text-left text-center">
            {" "}
            got you covered.
          </span>
        </div>
        <div className="flex gap-8">
          <button className="bg-red-200 hover:bg-slate-300 transition-colors px-8 py-2 mb-12 rounded relative">
            Get Started
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-4 animate-bounce"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
