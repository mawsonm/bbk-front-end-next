import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./feature_card";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features" className="w-full bg-slate-10">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 pb-24 pt-12">
        <div className="flex mx-8 sm:flex-row flex-col justify-between items-end">
          <h2 className="text-[36px] font-bold my-0 sm:w-[36ch] text-center sm:text-left sm:mb-0 mb-8">
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
        <div className="container flex sm:flex-row flex-col items-center bg-slate-100 rounded-xl p-12">
          <FeatureCard
            key={1}
            number={1}
            icon={faHouseChimney}
            title={"Stay Home"}
            caption={
              "Save a trip to the store by searching recipes with the ingredients you have in your kitchen."
            }
          />
          <FeatureCard
            key={2}
            number={2}
            icon={faMartiniGlassCitrus}
            title={"Drink Pairing"}
            caption={
              "A meal isn’t complete without a drink. We offer drink recommendations for select recipes."
            }
          />
          <FeatureCard
            key={3}
            number={3}
            icon={faUsers}
            title={"Social Network"}
            caption={
              "Users can do everything they could on popular social networks including post, save, follow, and more."
            }
          />
          <FeatureCard
            key={4}
            number={4}
            icon={faListOl}
            title={"Detailed Instructions"}
            caption={
              "Each recipe comes with step-by-step instructions so that you can pick up right where you left off."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
