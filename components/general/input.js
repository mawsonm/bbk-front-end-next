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
        props.title == "Instruction"
          ? "w-[50%] min-w-[225px] h-[24rem] sm:h-[8rem]"
          : ""
      } ${props.suffix && "w-[120px]"}`}
    >
      <label
        htmlFor={props.title}
        className="absolute top-0 left-0 text-neutral-500"
      >
        {props.title}
      </label>
      <div
        className={`${props.suffix ? "relative" : ""} ${
          props.suffix ? "w-[120px]" : "w-full"
        }`}
      >
        {props.title != "Instruction" && (
          <input
            id={props.title}
            onChange={(e) => changeHandler(e)}
            onBlur={props.validator.inputBlurHandler}
            type={props.type}
            value={props.validator.value}
            accept={props.type === "file" ? "image/*" : ""}
            className={` ${
              props.validator.hasError &&
              props.type != "file" &&
              props.secondaryValidator == null &&
              "border-red-600 border"
            } ${
              props.validator.hasError &&
              props.secondaryValidator != null &&
              props.secondaryValidator.value != "to taste" &&
              "border-red-600 border"
            } rounded mb-2 focus:outline ${
              props.type === "file"
                ? "cursor-pointer max-w-[250px] sm:max-w-none"
                : "bg-slate-200 py-2 px-4 focus:bg-slate-100"
            } focus:outline-2 outline-red-200 ${props.suffix && "w-[120px]"} ${
              props.title === "Description*" && "w-full md:w-[700px]"
            } ${
              props.title === "Recipe Name*" && " w-full md:w-[350px]"
            } file:rounded file:bg-red-200 file:border-none file:cursor-pointer file:py-2 file:px-4 file:mr-4`}
          />
        )}
        {props.title == "Instruction" && (
          <>
            <textarea
              maxLength={256}
              className={` ${
                props.validator.hasError && "border-red-600 border"
              } rounded resize-none min-w-[225px] w-full h-[22rem] sm:h-[8rem] sm:mb-2 focus:outline bg-slate-200 py-2 px-4 focus:bg-slate-100 focus:outline-2 outline-red-200`}
              onChange={props.validator.valueChangeHandler}
              onBlur={props.validator.inputBlurHandler}
              type={props.type}
              value={props.validator.value}
            />
            <span className="absolute text-[11px] text-neutral-400 sm:-bottom-7 bottom-0 left-2">{`${
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
      {(props.secondaryValidator == null ||
        (props.secondaryValidator != null &&
          props.secondaryValidator.value != "to taste")) && (
        <p className="text-[13px] absolute text-red-600 ml-1">
          {props.validator.message}
        </p>
      )}
    </div>
  );
};
export default Input;
