import Navbar from "../../components/general/navbar";
import Accordion from "../../components/addRecipe/accordion";
import General from "../../components/addRecipe/general";
import useInput from "@/hooks/use-input";

const AddRecipe = () => {
  const nameValidator = (val) => {
    const value = val.trim();
    return value.length > 0 && value.length <= 64;
  };
  const descriptionValidator = (val) => {
    const value = val.trim();
    return value.length > 0 && value.length <= 128;
  };

  const categoryValidator = (val) => {
    return val !== "Select One" && val !== "";
  };

  const timeValidator = (val) => {
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
  const categoryInput = useInput(
    categoryValidator,
    "Please select a category."
  );
  const timeInput = useInput(
    timeValidator,
    "Please input a number greater than 0 that is 3 digits or less."
  );
  const uploadInput = useInput(
    uploadValidator,
    "Please select an image to upload."
  );
  let isValid =
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
    isValid = null;
  }
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
            valid={isValid}
          >
            <General
              name={nameInput}
              description={descriptionInput}
              category={categoryInput}
              time={timeInput}
              upload={uploadInput}
            />
          </Accordion>
          <Accordion index={2} title={"Ingredients"} open={false}></Accordion>
          <Accordion index={3} title={"Instructions"} open={false}></Accordion>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
