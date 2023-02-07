import Navbar from "../../components/general/navbar";
import Accordion from "../../components/addRecipe/accordion";
import General from "../../components/addRecipe/general";
import useInput from "@/hooks/use-input";
import Ingredients from "@/components/addRecipe/ingredients";
import Instructions from "@/components/addRecipe/instructions";
import { useState } from "react";

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const nameValidator = (val) => {
    const value = val.trim();
    return value.length > 0 && value.length <= 64;
  };
  const descriptionValidator = (val) => {
    const value = val.trim();
    return value.length > 0 && value.length <= 128;
  };

  const selectValidator = (val) => {
    return val !== "Select One" && val !== "";
  };

  const numberValidator = (val) => {
    return val > 0 && val.trim().length <= 3;
  };

  const uploadValidator = (val) => {
    return val != "";
  };

  const nameInput = useInput(
    nameValidator,
    "Recipe Name must be less than 64 characters."
  );
  const descriptionInput = useInput(
    descriptionValidator,
    "Description must be less than 128 characters."
  );
  const categoryInput = useInput(selectValidator, "Please select a category.");
  const timeInput = useInput(
    numberValidator,
    "Please input a number greater than 0 that is 3 digits or less."
  );
  const uploadInput = useInput(
    uploadValidator,
    "Please select an image to upload."
  );
  let isGeneralValid =
    nameInput.isValid &&
    descriptionInput.isValid &&
    categoryInput.isValid &&
    timeInput.isValid &&
    uploadInput.isValid;
  if (
    !nameInput.isTouched &&
    !descriptionInput.isTouched &&
    !categoryInput.isTouched &&
    !timeInput.isTouched &&
    !uploadInput.isTouched
  ) {
    isGeneralValid = null;
  }

  const ingredientName = useInput(
    nameValidator,
    "Please input an ingredient name that is less than 64 characters."
  );
  const ingredientAmount = useInput(
    numberValidator,
    "Please input an ingredient amount that is greater than 0."
  );
  const ingredientUnit = useInput(selectValidator, "Please select a unit.");

  let isIngredientValid = ingredients.length > 0;
  if (
    !ingredientName.isTouched &&
    !ingredientAmount.isTouched &&
    !ingredientUnit.isTouched
  ) {
    isIngredientValid = null;
  }

  const instructionsValidator = (val) => {
    return val.trim().length > 0 && val.trim().length <= 256;
  };

  const instructionsInput = useInput(
    instructionsValidator,
    "Individual instructions must be no more than 256 characters."
  );

  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-300 min-h-[calc(100vh-115px)]">
        <div className="max-w-[1500px] mx-auto py-16">
          <h1 className="text-[48px] mx-8 font-semibold">Add Recipe</h1>
          <p className="text-[18px] mb-8 mx-8">
            Please fill out details for your recipe.
          </p>
          <Accordion
            index={1}
            title={"General Details"}
            open={true}
            valid={isGeneralValid}
          >
            <General
              name={nameInput}
              description={descriptionInput}
              category={categoryInput}
              time={timeInput}
              upload={uploadInput}
            />
          </Accordion>
          <Accordion
            index={2}
            title={"Ingredients"}
            open={false}
            valid={isIngredientValid}
          >
            <Ingredients
              name={ingredientName}
              amount={ingredientAmount}
              unit={ingredientUnit}
              ingredients={ingredients}
              addIngredient={setIngredients}
            />
          </Accordion>
          <Accordion index={3} title={"Instructions"} open={false}>
            <Instructions
              validator={instructionsInput}
              instructions={instructions}
              setInstructions={setInstructions}
            />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
