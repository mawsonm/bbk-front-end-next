import RecipeCard from "./recipeCard";
const RecipeGrid = (props) => {
  return (
    <div className="grid grid-rows-6 grid-cols-3 gap-8 mt-12">
      {props.recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeGrid;
