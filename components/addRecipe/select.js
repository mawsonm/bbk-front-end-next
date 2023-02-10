const Select = (props) => {
  return (
    <div className="relative py-8 min-w-[100px]">
      <span className="absolute left-0 top-0 text-neutral-500">
        {props.title}
      </span>
      <select
        className={` ${
          props.validator.hasError && "border-red-600 border"
        } rounded focus:outline-2 focus:bg-slate-100 focus:outline-2 p-2 bg-slate-200 outline-red-200 mb-1`}
        onChange={props.validator.valueChangeHandler}
        onBlur={props.validator.inputBlurHandler}
        value={props.validator.value}
      >
        {props.options?.map((option, index) => {
          return (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
      <p className="text-[13px] absolute mt-2 text-red-600 ml-1">
        {props.validator.message}
      </p>
    </div>
  );
};

export default Select;
