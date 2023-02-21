import SearchInput from "@/components/search/searchInput";
import SearchFilters from "@/components/search/searchFilters";
import RecipeGrid from "@/components/search/recipeGrid";
import Navbar from "@/components/general/navbar";
import SearchHero from "@/components/search/searchHero";
import { DEV_BACKEND_URL } from "@/env/env";

const Search = (props) => {
  return (
    <div className="bg-slate-100 min-h-[100vh]">
      <Navbar />
      <div className="px-32">
        <SearchHero />
        <aside className="w-fit float-left">
          <h3 className="text-[24px] font-bold mb-8">Filters</h3>
          <SearchFilters title={"Categories"} options={props.categories} />
        </aside>
        <div className="ml-56">
          <SearchInput />
          <RecipeGrid recipes={props.recipes} />
        </div>
      </div>
    </div>
  );
};

export default Search;

export async function getStaticProps() {
  const unitsData = await fetch(`${DEV_BACKEND_URL}api/unit`);
  const unitsInfo = await unitsData.json();
  unitsInfo._embedded.unit.unshift({ name: "Select One", id: null });
  const units = unitsInfo._embedded.unit.map((item) => {
    return { name: item.name, id: item.id };
  });

  const categoryData = await fetch(`${DEV_BACKEND_URL}api/category`);
  const categoryInfo = await categoryData.json();
  const categories = categoryInfo._embedded.category.map((item) => {
    return { name: item.name, id: item.id };
  });

  const recipeData = await fetch(`${DEV_BACKEND_URL}api/recipe`);
  const recipeInfo = await recipeData.json();
  const recipes = recipeInfo._embedded.recipe.map((item) => {
    return item;
  });

  console.log(recipes);

  return {
    props: {
      categories,
      units,
      recipes,
    },
  };
}