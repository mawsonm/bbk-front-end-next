import Input from "../general/input";
import Select from "./select";
import Checkbox from "../general/checkbox";
const General = (props) => {
  return (
    <div className="px-16 py-8 flex flex-wrap gap-8">
      <Input title={"Recipe Name*"} type={"text"} validator={props.name} />
      <Input
        title={"Description*"}
        type={"text"}
        validator={props.description}
      />
      <Select
        title={"Category*"}
        options={props.categories}
        validator={props.categoriesValidator}
      />
      <Checkbox title={"Matt's Fav?"} validator={props.fav} />
      <Input
        title={"Time to Cook*"}
        type={"number"}
        suffix={"min"}
        validator={props.time}
      />
      <Input
        title={"Upload an Image*"}
        type={"file"}
        validator={props.upload}
        selectedFile={props.fileSelected}
        setSelectedFile={props.setFileSelected}
      />
    </div>
  );
};

export default General;
