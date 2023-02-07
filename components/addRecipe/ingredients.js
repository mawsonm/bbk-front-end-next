import Input from "../general/input";
import Select from "./select";

import IngredientList from "./ingredientList";
const Ingredients = (props) => {
  const submitHandler = () => {
    props.addIngredient((prev) => [
      ...prev,
      {
        name: props.name.value,
        quantity: props.amount.value,
        unit: props.unit.value,
      },
    ]);
    props.name.reset();
    props.unit.reset();
    props.amount.reset();
  };

  return (
    <>
      <div className="px-16 py-8 flex flex-wrap gap-8 items-center">
        <Input type={"text"} title={"Ingredient Name"} validator={props.name} />
        <Input type={"number"} title={"Amount"} validator={props.amount} />
        <Select
          title={"Unit"}
          validator={props.unit}
          options={["Select One", "cup", "tsp"]}
        />
        <button
          className="bg-red-200 px-6 py-2 rounded disabled:opacity-50"
          onClick={submitHandler}
          disabled={
            !props.name.isValid || !props.amount.isValid || !props.unit.isValid
          }
        >
          Submit
        </button>
      </div>
      <IngredientList
        ingredients={props.ingredients}
        addIngredient={props.addIngredient}
      />
    </>
  );
};

export default Ingredients;
