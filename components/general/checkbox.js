const Checkbox = (props) => {
  return (
    <div className={`relative py-8 w-[90px]`}>
      <label className="absolute top-0 left-0 text-neutral-500">
        {props.title}
      </label>
      <input
        type="checkbox"
        className={` w-[24px] h-[24px] mt-2 rounded py-2 px-4 before:bg-slate-200 border-slate-200 accent-red-200 [&:not(:checked)]:opacity-50
            `}
      />
    </div>
  );
};

export default Checkbox;
