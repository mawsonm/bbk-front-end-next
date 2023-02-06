import Input from "../general/input";
import Select from "./select";
const General = (props) => {
  return (
    <div className="px-16 py-8 flex flex-wrap gap-8">
      <Input title={"Recipe Name"} type={"text"} validator={props.name} />
      <Input
        title={"Description"}
        type={"text"}
        validator={props.description}
      />
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
        validator={props.category}
      />
      <Input
        title={"Time to Cook"}
        type={"number"}
        suffix={"min"}
        validator={props.time}
      />
      <Input title={"Upload an Image"} type={"file"} validator={props.upload} />
    </div>
  );
};

export default General;
