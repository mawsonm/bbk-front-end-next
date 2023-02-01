import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="bg-slate-100 py-16">
      <div className="flex sm:flex-row flex-col justify-around sm:items-start items-center max-w-[1500px] mx-auto">
        <div className="sm:w-[450px] w-[350px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="38.66 41.04 134.47 126.88"
          >
            {" "}
            <mask id="mask" mask-type="alpha">
              <path
                fill="#FBA5A5"
                d="M61.3,-31.7C74.7,-12.2,77.5,17.1,65.6,37.2C53.6,57.4,26.8,68.4,0.8,67.9C-25.3,67.5,-50.5,55.6,-58.4,37.8C-66.4,20,-56.9,-3.7,-44.3,-22.8C-31.6,-41.8,-15.8,-56.3,4.1,-58.6C24,-61,47.9,-51.3,61.3,-31.7Z"
                transform="translate(100 100)"
              />
            </mask>
            <g mask="url(#mask)">
              <path
                fill="#FBA5A5"
                d="M61.3,-31.7C74.7,-12.2,77.5,17.1,65.6,37.2C53.6,57.4,26.8,68.4,0.8,67.9C-25.3,67.5,-50.5,55.6,-58.4,37.8C-66.4,20,-56.9,-3.7,-44.3,-22.8C-31.6,-41.8,-15.8,-56.3,4.1,-58.6C24,-61,47.9,-51.3,61.3,-31.7Z"
                transform="translate(100 100)"
              />
              <image
                x="225"
                y="0"
                xlinkHref="/images/donuts.png"
                className="scale-[0.3] rotate-6 "
              />
            </g>
          </svg>
        </div>
        <div className="relative sm:m-0 mx-4">
          <h2 className="text-[44px] sm:text-[48px] font-bold">
            Meet your Chef!
          </h2>
          <Image
            width={75}
            height={75}
            src={"/images/underline.svg"}
            className="absolute right-[7%] sm:right-[46%] sm:top-[15%]"
          />
          <p className="sm:w-[60ch] sm:text-left w-[30ch] text-[18px] mt-8">
            <span className="font-fancy text-[36px] text-red-200 mr-4 leading-4">
              Bri Bri
            </span>
            , otherwise known as <span className="italic">Brianna Trust</span>,
            is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
            lectus, sollicitudin ac molestie in, lacinia a felis. Donec
            accumsan, nibh et tincidunt auctor, magna justo luctus ex, venenatis
            tincidunt tellus nunc id dolor. Mauris a tempus nunc. Phasellus a
            ipsum id nibh condimentum scelerisque. Sed dapibus scelerisque
            ligula ac fermentum. Duis suscipit, ipsum a rutrum laoreet, sapien
            felis maximus massa, non consequat tellus leo eu mi. Donec porta
            tristique lorem vel facilisis. Nam aliquet sed purus dignissim
            suscipit. Praesent fringilla arcu ac justo rhoncus semper.
            Suspendisse non sapien in erat porttitor rutrum. Nunc porta, ante a
            faucibus ultrices, odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
