import Input from "./input";
import Select from "./select";
const General = () => {
  return (
    <div className="px-16 py-8 flex flex-wrap gap-8">
      <Input title={"Recipe Name"} type={"text"} />
      <Input title={"Description"} type={"text"} />
      <Select
        title={"Category"}
        options={[
          "Select One",
          "Breakfast",
          "Lunch",
          "Pasta",
          "Seafood",
          "Poultry",
          "Beef",
          "Sides",
          "Party",
          "Desserts",
          "Coffee",
          "Drinks",
        ]}
      />
      <Input title={"Time to Cook"} type={"number"} suffix={"min"} />
      <Input title={"Upload an Image"} type={"file"} />
    </div>
  );
};

export default General;
