const Select = (props) => {
  return (
    <div className="relative py-8">
      <span className="absolute left-0 top-0 text-neutral-500">
        {props.title}
      </span>
      <select className="rounded focus:outline focus:bg-slate-100 focus:outline-2 p-2 bg-slate-200 outline-red-200">
        {props.options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
