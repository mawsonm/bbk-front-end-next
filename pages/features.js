import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full bg-slate-10">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 pb-24 pt-12">
        <div className="flex mx-8 justify-between items-end">
          <h2 className="text-[36px] font-bold my-0 w-[36ch]">
            Bri Bri’s Kitchen sets you up with all of the tools you need to
            fulfill your cooking dreams.
          </h2>
          <Image
            className="-mb-12"
            width={"200"}
            height={"200"}
            src="images/cooking_help.svg"
            alt="Bri Bri teaches you how to cook"
          />
        </div>
        <div className="container flex bg-slate-100 rounded-xl p-12">
          <div className="bg-slate-200 flex rounded-l-lg hover:-translate-y-6 hover:bg-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col gap-4 items-center p-8">
              <div className="p-2 rounded">
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  color={"rgb(252 165 165)"}
                  size={"2x"}
                ></FontAwesomeIcon>
              </div>
              <h3 className="text-[24px] font-semibold text-center">
                Stay Home
              </h3>
              <p className="text-center text-neutral-800">
                Save a trip to the store by searching recipes with the
                ingredients you have in your kitchen.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 flex hover:-translate-y-6 hover:bg-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col gap-4 items-center px-4 py-8">
              <div className="p-2 rounded">
                <FontAwesomeIcon
                  icon={faMartiniGlassCitrus}
                  color={"rgb(252 165 165)"}
                  size={"2x"}
                ></FontAwesomeIcon>
              </div>
              <h3 className="text-[24px] font-semibold text-center">
                Drink Pairing
              </h3>
              <p className="text-center text-neutral-800">
                A meal isn’t complete without a drink. We offer a drink
                recommendation for select recipes.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 flex hover:-translate-y-6 hover:bg-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col gap-4 items-center px-4 py-8">
              <div className="p-2 rounded">
                <FontAwesomeIcon
                  icon={faUsers}
                  color={"rgb(252 165 165)"}
                  size={"2x"}
                ></FontAwesomeIcon>
              </div>
              <h3 className="text-[24px] font-semibold text-center">
                Social Network
              </h3>
              <p className="text-center text-neutral-800">
                Users can do everything they could on popular social networks
                including post, save, follow, and more.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 flex rounded-r-lg hover:-translate-y-6 hover:bg-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col gap-4 items-center px-4 py-8">
              <div className="p-2 rounded">
                <FontAwesomeIcon
                  icon={faListOl}
                  color={"rgb(252 165 165)"}
                  size={"2x"}
                ></FontAwesomeIcon>
              </div>
              <h3 className="text-[24px] font-semibold text-center">
                Detailed Instructions
              </h3>
              <p className="text-center text-neutral-800">
                Each recipe comes with step-by-step instructions so that you can
                pick up right where you left off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
