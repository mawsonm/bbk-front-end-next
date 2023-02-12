import { useState, useEffect } from "react";
import Image from "next/image";

const Autocomplete = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);

  const findByNameContaining = async (input) => {
    setInputValue(input);
    const recipeData = await fetch(`http://localhost:8080/drink?name=${input}`);
    const recipeJson = await recipeData.json();
    console.log(recipeJson);
    //TODO: refactor to use api call that filters server side
    setRecipes(
      recipeJson.filter((recipe) => {
        return recipe.category.name == "Drinks";
      })
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (focused) {
        findByNameContaining(inputValue);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleSelection = (recipe) => {
    console.log(recipe);
    setInputValue(recipe.name);
    props.setSelected(recipe);
  };

  return (
    <div className="px-16 py-8 flex gap-16 items-start">
      <div className={`relative pt-8 h-[200px]`}>
        <label className="absolute top-0 left-0 text-neutral-500">
          {props.title}
        </label>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={(e) => setFocused(true)}
          onBlur={(e) => setFocused(false)}
          value={inputValue}
          className={`w-[50%] min-w-[325px] rounded bg-slate-200 py-2 px-4 focus:bg-slate-100 focus:outline-2 outline-red-200`}
        />
        {
          <ul
            className={`${
              !focused ? "hidden" : ""
            } max-h-[150px] w-[50%] min-w-[325px] overflow-y-scroll flex flex-col bg-slate-100 border-2 border-red-200`}
          >
            {recipes
              .filter((recipe) =>
                recipe.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-slate-200"
                    onMouseDown={() => handleSelection(item)}
                  >
                    {item.name}
                  </li>
                );
              })}
          </ul>
        }
      </div>
      {Object.values(props.selected).length != 0 && (
        <>
          <div>
            <label className="text-neutral-500 text-[32px]">
              Selected Drink
            </label>
            <div className="flex gap-4 mt-4">
              <div className="w-[200px] h-[200px]">
                <Image
                  className="object-cover"
                  loader={() => props.selected.imageUrl}
                  width={"200"}
                  height={"200"}
                  src={props.selected.imageUrl}
                  alt={props.selected.name}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-neutral-500">Name: </label>
                  <span className="text-neutral-800 ">
                    {props.selected.name}
                  </span>
                </div>
                <div>
                  <label className="text-neutral-500">Description: </label>
                  <span className="text-neutral-800 ">
                    {props.selected.description}
                  </span>
                </div>
                <div>
                  <label className="text-neutral-500">Time to Make: </label>
                  <span className="text-neutral-800 ">
                    {props.selected.timeToCook} minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Autocomplete;
