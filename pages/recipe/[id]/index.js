import { DEV_BACKEND_URL } from "@/env/env";
const Recipe = (props) => {
  console.log(props.recipe);
  return <div>RECIPE PAGE</div>;
};
export default Recipe;

export async function getStaticProps(context) {
  const recipeData = await fetch(
    `${DEV_BACKEND_URL}recipe/${context.params.id}`
  );
  const recipe = await recipeData.json();

  return {
    props: {
      recipe,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking",
  };
}
