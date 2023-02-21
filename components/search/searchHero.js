import Image from "next/image";
import Switch from "../general/switch";
const SearchHero = (props) => {
  return (
    <div className="rounded-xl mx-auto bg-red-300 flex justify-between p-8 mb-16">
      <div className="flex flex-col">
        <h1 className="text-[48px] font-bold p-4">Search Recipes</h1>
        <h2 className="text-[18px] p-4 text-neutral-800 font-semibold">
          Search by recipe name, or even the ingredients in your kitchen, and
          get started preparing a dish that your family will love.
        </h2>
        <Switch />
      </div>
      <Image
        src={"/images/chef.svg"}
        width={"400"}
        height={"250"}
        alt="Master Chef"
      />
    </div>
  );
};

export default SearchHero;
