import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const IngredientList = (props) => {
  const removeHandler = (removedIndex) => {
    props.addIngredient((prev) => {
      console.log(removedIndex);
      return prev.filter((item, index) => index != removedIndex);
    });
  };
  return (
    <div className="px-16 mb-8 flex flex-wrap gap-8">
      {props.ingredients.map((ingredient, index) => {
        return (
          <div
            key={index}
            className="bg-slate-200 rounded-lg px-4 py-2 flex gap-2 items-center drop-shadow-md"
          >
            <span>{`${ingredient.quantity} ${
              ingredient.unit != "N/A" ? `${ingredient.unit} of` : ""
            }${ingredient.quantity > 1 ? "s" : ""} ${ingredient.name}`}</span>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="cursor-pointer"
              onClick={() => removeHandler(index)}
              color={"#fca5a5"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default IngredientList;
