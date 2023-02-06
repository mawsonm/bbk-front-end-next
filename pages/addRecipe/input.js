const Input = (props) => {
  return (
    <div className="relative py-8">
      <label className="absolute top-0 left-0 text-neutral-500">
        {props.title}
      </label>
      <div
        className={`${props.suffix ? "relative" : ""} ${
          props.suffix ? "w-[100px]" : "w-full"
        }`}
      >
        <input
          type={props.type}
          className={`rounded mb-2 focus:outline ${
            props.type === "file"
              ? ""
              : "bg-slate-200 py-2 px-4 focus:bg-slate-100"
          } focus:outline-2 outline-red-200 ${
            props.suffix ? "w-[100px]" : ""
          } ${
            props.title === "Description" ? "w-[700px]" : "w-[350px]"
          } file:rounded file:bg-red-200 file:border-none file:py-2 file:px-4 file:mr-4`}
        />
        {props.suffix && (
          <span className="absolute right-7 top-[8px] text-neutral-400">
            {props.suffix}
          </span>
        )}
      </div>
      <p className="text-[13px] asbolute bottom-0 text-red-600 ml-1">
        Oh no... Not valid!
      </p>
    </div>
  );
};
export default Input;
