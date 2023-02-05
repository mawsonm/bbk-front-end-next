import Navbar from "../navbar";
import Accordion from "./accordion";

const AddRecipe = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-100 min-h-[calc(100vh-115px)]">
        <div className="max-w-[1500px] mx-auto py-16">
          <h1 className="text-[48px] mx-8 font-semibold">Add Recipe</h1>
          <p className="text-[18px] mb-8 mx-8">
            Please fill out details for your recipe.
          </p>
          <Accordion
            index={1}
            title={"General Details"}
            open={true}
          ></Accordion>
          <Accordion index={2} title={"Ingredients"} open={false}></Accordion>
          <Accordion index={3} title={"Instructions"} open={false}></Accordion>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
