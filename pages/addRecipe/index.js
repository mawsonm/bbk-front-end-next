import Navbar from "../../components/general/navbar";
import Accordion from "../../components/addRecipe/accordion";
import General from "../../components/addRecipe/general";
import useInput from "@/hooks/use-input";
import Ingredients from "@/components/addRecipe/ingredients";
import Instructions from "@/components/addRecipe/instructions";
import Autocomplete from "@/components/general/autocomplete";
import { useState, useRef, useContext } from "react";
import SnackbarContext from "@/store/snackbar-context";
import { randomBytes } from "crypto";
import {
  DEV_BACKEND_URL,
  S3_ACCESS_KEY,
  S3_SECRET_KEY,
  S3_BUCKET,
  REGION,
  S3_BASE_URL,
} from "@/env/env";
import AWS from "aws-sdk";

const AddRecipe = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [selectedFile, setSelectedFile] = useState();

  const ref = useRef();

  const snackbarCtx = useContext(SnackbarContext);

  AWS.config.update({
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const uploadImage = (file) => {
    const arr = file.split("\\");
    const name = arr[arr.length - 1];
    const rawbytes = randomBytes(16);
    const imageName = rawbytes.toString("hex");
    const key = imageName + name;
    console.log(file);
    const params = {
      Body: selectedFile,
      Bucket: S3_BUCKET,
      Key: key,
    };
    myBucket.putObject(params).send((err) => {
      if (err) console.log(err);
    });

    return S3_BASE_URL + key;
  };

  const nameValidator = (val) => {
    const value = val.trim();
    return value.length > 0 && value.length <= 64;
  };
  const descriptionValidator = (val) => {
    const value = val.trim();
    return value.length > 0 && value.length <= 128;
  };

  const instructionsValidator = (val) => {
    return val.trim().length > 0 && val.trim().length <= 256;
  };
  const selectValidator = (val) => {
    return val !== "Select One" && val !== "";
  };

  const numberValidator = (val) => {
    return val > 0 && val.trim().length <= 10;
  };
  const checkValidator = (val) => {
    return true;
  };

  const uploadValidator = (val) => {
    return val != "";
  };

  const nameInput = useInput(
    nameValidator,
    "Recipe Name must be less than 64 characters.",
    false
  );
  const descriptionInput = useInput(
    descriptionValidator,
    "Description must be less than 128 characters.",
    false
  );
  const categoryInput = useInput(
    selectValidator,
    "Please select a category.",
    true
  );
  const timeInput = useInput(
    numberValidator,
    "Time to cook is required.",
    false
  );
  const uploadInput = useInput(
    uploadValidator,
    "Please select an image to upload.",
    false
  );

  const instructionsInput = useInput(
    instructionsValidator,
    "Individual instructions must be no more than 256 characters."
  );

  const ingredientNameInput = useInput(
    nameValidator,
    "Please input an ingredient name that is less than 64 characters.",
    false
  );
  const ingredientAmountInput = useInput(
    numberValidator,
    "Please input an ingredient amount that is greater than 0.",
    false
  );
  const ingredientUnitInput = useInput(
    selectValidator,
    "Please select a unit.",
    true
  );
  const checkInput = useInput(checkValidator, "");

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

  let isIngredientValid = ingredients.length > 0;
  if (
    !ingredientNameInput.isTouched &&
    !ingredientAmountInput.isTouched &&
    !ingredientUnitInput.isTouched &&
    !isIngredientValid
  ) {
    isIngredientValid = null;
  }

  let isInstructionValid = instructions.length > 0;
  if (!instructionsInput.isTouched && !isInstructionValid) {
    isInstructionValid = null;
  }

  const createRequest = (imageUrl) => {
    console.log(checkInput.value);
    return {
      name: nameInput.value,
      description: descriptionInput.value,
      favoriteInd: checkInput.value == "on",
      imageUrl: imageUrl,
      timeToCook: timeInput.value,
      category: props.categories.filter((cat) => {
        return categoryInput.value == cat.name;
      })[0],
      steps: instructions.map((step, index) => {
        return { number: index + 1, description: step };
      }),
      ingredients: ingredients.map((ingredient) => {
        return {
          ...ingredient,
          unit: props.units.filter((unit) => unit.name == ingredient.unit)[0],
        };
      }),
      drinkPairing:
        Object.values(selectedRecipe).length == 0 ? null : selectedRecipe,
    };
  };

  const submitHandler = async () => {
    let imgUrl;
    try {
      imgUrl = uploadImage(uploadInput.value);
    } catch (e) {
      console.log(e);
      snackbarCtx.displayMsg(
        "There wasan error uploading the image. Please try again.",
        null,
        false
      );
    }
    try {
      const body = createRequest(imgUrl);
      const response = await fetch(`${DEV_BACKEND_URL}recipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const res = await response.json();
      console.log(res);
      nameInput.reset();
      descriptionInput.reset();
      categoryInput.reset();
      checkInput.reset();
      ref.current.checked = false;
      timeInput.reset();
      uploadInput.reset();
      instructionsInput.reset();
      ingredientNameInput.reset();
      ingredientAmountInput.reset();
      ingredientUnitInput.reset();
      setIngredients([]);
      setInstructions([]);
      setSelectedRecipe({});
      setSelectedFile({});
      snackbarCtx.displayMsg(
        "Recipe was successfully submitted! It can be found",
        res.id,
        true
      );
    } catch (e) {
      console.log(e);
      snackbarCtx.displayMsg(
        "There was an error saving the recipe. Please try again later.",
        null,
        false
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-300 pr-8 sm:pr-0 min-h-[calc(100vh-65px)] sm:min-h-[calc(100vh-115px)]">
        <div className="max-w-[1500px] mx-auto py-8 sm:py-16">
          <div className="grid grid-rows-2 grid-cols-4 gap-x-6">
            <h1 className="text-[48px] mx-8 mb-4 font-semibold row-span-1 col-span-4 text-center sm:text-left sm:row-span-2 sm:col-start-1 sm:col-end-3">
              Add Recipe
            </h1>
            <p className="text-[18px] ml-8 mb-4 sm:mb-8 sm:mx-8 self-end sm:justify-self-auto col-start-1 justify-self-center mr-16 col-end-4 row-span-1 sm:row-span-2">
              Please fill out details for your recipe.
            </p>

            <button
              className="bg-red-200 px-6 sm:mr-6 mb-4 mr-20 py-2 w-fit h-fit rounded sm:justify-self-end self-end justify-self-center sm:row-span-2 disabled:opacity-50"
              onClick={submitHandler}
              disabled={
                !isGeneralValid || !isIngredientValid || !isInstructionValid
              }
            >
              Submit
            </button>
          </div>
          <Accordion
            index={1}
            title={"General Details"}
            open={true}
            valid={isGeneralValid}
            optional={false}
          >
            <General
              name={nameInput}
              description={descriptionInput}
              category={categoryInput}
              time={timeInput}
              upload={uploadInput}
              fav={checkInput}
              categoriesValidator={categoryInput}
              categories={props.categories}
              fileSelected={selectedFile}
              setFileSelected={setSelectedFile}
              checkboxRef={ref}
            />
          </Accordion>
          <Accordion
            index={2}
            title={"Ingredients"}
            open={false}
            valid={isIngredientValid}
            optional={false}
          >
            <Ingredients
              name={ingredientNameInput}
              amount={ingredientAmountInput}
              units={ingredientUnitInput}
              ingredients={ingredients}
              setIngredients={setIngredients}
              unitsArr={props.units}
            />
          </Accordion>
          <Accordion
            index={3}
            valid={isInstructionValid}
            title={"Instructions"}
            open={false}
            optional={false}
          >
            <Instructions
              validator={instructionsInput}
              instructions={instructions}
              setInstructions={setInstructions}
            />
          </Accordion>
          <Accordion
            index={4}
            title={"Drink Pairing"}
            open={false}
            optional={true}
          >
            <Autocomplete
              title={"Drink Pairing"}
              setSelected={setSelectedRecipe}
              selected={selectedRecipe}
            />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const unitsData = await fetch(`${DEV_BACKEND_URL}api/unit`);
  const unitsInfo = await unitsData.json();
  unitsInfo._embedded.unit.unshift({ name: "Select One", id: null });
  const units = unitsInfo._embedded.unit.map((item) => {
    return { name: item.name, id: item.id };
  });

  const categoryData = await fetch(`${DEV_BACKEND_URL}api/category`);
  const categoryInfo = await categoryData.json();
  categoryInfo._embedded.category.unshift({ name: "Select One", id: null });
  const categories = categoryInfo._embedded.category.map((item) => {
    return { name: item.name, id: item.id };
  });

  return {
    props: {
      categories,
      units,
    },
  };
}

export default AddRecipe;
