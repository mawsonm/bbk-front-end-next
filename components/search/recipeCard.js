import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
const RecipeCard = (props) => {
  console.log(props.recipe.category);
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/recipe/${props.recipe.id}`)}
      className="rounded-lg h-[400px] w-[300px] cursor-pointer hover:scale-105 transition-transform bg-slate-200"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        {props.recipe.favoriteInd && (
          <Image
            className="absolute z-10 right-2 top-2"
            src="/images/mattsfav.svg"
            alt="Matt's Favorite!"
            height="40"
            width="40"
          />
        )}
        <Image
          className="rounded-t-lg brightness-90"
          loader={() => props.recipe.imageUrl}
          src={props.recipe.imageUrl}
          alt={props.recipe.name}
          height={"300"}
          width={"300"}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <span className="font-semibold text-neutral-500 uppercase ">
            {props.recipe.category.name}
          </span>
          <div>
            <FontAwesomeIcon icon={faClock} color={"#737373"} />{" "}
            <span className="text-neutral-500">
              {props.recipe.timeToCook} min
            </span>
          </div>
        </div>
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-[18px] mb-2 font-bold w-fit">
            {props.recipe.name}
          </h4>
        </div>
        <p className="text-neutral-800 text-ellipsis">
          {props.recipe.description}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
