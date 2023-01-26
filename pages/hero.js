import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <Image
        className="transform -scale-x-100 -z-10 "
        src="/images/hero.jpg"
        alt="Chef plating Filet Mignon"
        fill={true}
        objectFit="cover"
        objectPosition="center"
      />
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 items-start justify-center sm:h-[calc(100vh-96px)] h-[100vh]">
        <h1 className="font-bold text-[72px] leading-[5rem]">
          Wondering what&apos;s
          <br /> for dinner tonight?
        </h1>
        <div>
          <h2 className="text-[36px] font-bold -my-5">Don&apos;t worry.</h2>
          <span className="font-semibold font-fancy text-red-300 text-[64px] -mt-8">
            Bri Bri&apos;s{"            "}
          </span>
          {"       "}
          <span className="text-[36px] font-normal "> got you covered.</span>
        </div>
        <div className="flex gap-8">
          <button className="bg-red-200 px-8 py-2 rounded relative">
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
