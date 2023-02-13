import Input from "../general/input";
import Select from "./select";

import IngredientList from "./ingredientList";
const Ingredients = (props) => {
  const submitHandler = () => {
    props.setIngredients((prev) => [
      ...prev,
      {
        name: props.name.value,
        quantity: props.amount.value,
        unit: props.units.value,
      },
    ]);
    props.name.reset();
    props.units.reset();
    props.amount.reset();
  };

  return (
    <>
      <form className="px-16 py-8 flex flex-wrap gap-8 items-center">
        <Input type={"text"} title={"Ingredient Name"} validator={props.name} />
        <Input
          type={"number"}
          title={"Amount"}
          validator={props.amount}
          secondaryValidator={props.units}
        />
        <Select
          title={"Unit"}
          validator={props.units}
          options={props.unitsArr}
        />
        <button
          className="bg-red-200 px-6 py-2 rounded disabled:opacity-50"
          onClick={submitHandler}
          disabled={
            !props.name.isValid ||
            (!props.amount.isValid && props.units.value !== "to taste") ||
            !props.units.isValid
          }
        >
          Submit
        </button>
      </form>
      <IngredientList
        ingredients={props.ingredients}
        setIngredients={props.setIngredients}
      />
    </>
  );
};

export default Ingredients;
