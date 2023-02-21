import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const RecipeCard = (props) => {
  console.log(props.recipe.category);
  return (
    <div className="rounded-lg h-[500px] w-[300px] cursor-pointer bg-slate-100 hover:-translate-y-6 hover:opacity-75 transition-all">
      <Image
        loader={() => props.recipe.imageUrl}
        src={props.recipe.imageUrl}
        alt={props.recipe.name}
        height={"300"}
        width={"300"}
      />
      <div className="flex justify-between p-6">
        <div>
          <h4 className="text-[18px] mb-8 font-bold">{props.recipe.name}</h4>
          <p className="text-neutral-800 text-ellipsis max-w-[75ch]">
            {props.recipe.description}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-semibold">{props.recipe.category}</span>
          <div>
            <FontAwesomeIcon icon={faClock} color={"#525252"} />{" "}
            <span>{props.recipe.timeToCook} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
