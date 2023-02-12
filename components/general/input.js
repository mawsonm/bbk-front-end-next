const Input = (props) => {
  const changeHandler = (e) => {
    if (props.type == "file") {
      props.setSelectedFile(e.target.files[0]);
    }
    props.validator.valueChangeHandler(e);
  };
  return (
    <div
      className={`relative py-8 ${
        props.title == "Instruction" && "w-[50%] min-w-[325px] h-[10rem]"
      } ${props.suffix && "w-[120px]"}`}
    >
      <label className="absolute top-0 left-0 text-neutral-500">
        {props.title}
      </label>
      <div
        className={`${props.suffix ? "relative" : ""} ${
          props.suffix ? "w-[120px]" : "w-full"
        }`}
      >
        {props.title != "Instruction" && (
          <input
            onChange={(e) => changeHandler(e)}
            onBlur={props.validator.inputBlurHandler}
            type={props.type}
            value={props.validator.value}
            accept={props.type === "file" ? "image/*" : ""}
            className={` ${
              props.validator.hasError &&
              props.type != "file" &&
              "border-red-600 border"
            } rounded mb-2 focus:outline ${
              props.type === "file"
                ? ""
                : "bg-slate-200 py-2 px-4 focus:bg-slate-100"
            } focus:outline-2 outline-red-200 ${props.suffix && "w-[120px]"} ${
              props.title === "Description*" && "w-[700px]"
            } ${
              props.title === "Recipe Name*" && "w-[350px]"
            } file:rounded file:bg-red-200 file:border-none file:py-2 file:px-4 file:mr-4`}
          />
        )}
        {props.title == "Instruction" && (
          <>
            <textarea
              maxLength={256}
              className={` ${
                props.validator.hasError && "border-red-600 border"
              } rounded resize-none min-w-[325px] w-full h-[8rem] mb-2 focus:outline bg-slate-200 py-2 px-4 focus:bg-slate-100 focus:outline-2 outline-red-200`}
              onChange={props.validator.valueChangeHandler}
              onBlur={props.validator.inputBlurHandler}
              type={props.type}
              value={props.validator.value}
            />
            <span className="absolute text-[11px] text-neutral-400 bottom-0 left-2">{`${
              256 - props.validator.value.length
            } characters remaining`}</span>
          </>
        )}
        {props.suffix && (
          <span className="absolute right-7 top-[8px] text-neutral-400">
            {props.suffix}
          </span>
        )}
      </div>
      <p className="text-[13px] absolute text-red-600 ml-1">
        {props.validator.message}
      </p>
    </div>
  );
};
export default Input;
