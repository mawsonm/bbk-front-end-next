const Input = (props) => {
  return (
    <div className={`relative py-8 ${props.suffix && "w-[100px]"}`}>
      <label className="absolute top-0 left-0 text-neutral-500">
        {props.title}
      </label>
      <div
        className={`${props.suffix ? "relative" : ""} ${
          props.suffix ? "w-[100px]" : "w-full"
        }`}
      >
        <input
          onChange={props.validator.valueChangeHandler}
          onBlur={props.validator.inputBlurHandler}
          type={props.type}
          className={` ${
            props.validator.hasError &&
            props.type != "file" &&
            "border-red-600 border"
          } rounded mb-2 focus:outline ${
            props.type === "file"
              ? ""
              : "bg-slate-200 py-2 px-4 focus:bg-slate-100"
          } focus:outline-2 outline-red-200 ${props.suffix && "w-[100px]"} ${
            props.title === "Description" && "w-[700px]"
          } ${
            props.title === "Recipe Name" && "w-[350px]"
          } file:rounded file:bg-red-200 file:border-none file:py-2 file:px-4 file:mr-4`}
        />
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
