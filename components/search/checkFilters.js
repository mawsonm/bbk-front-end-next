const CheckFilters = (props) => {
  return (
    <div className="flex flex-col gap-4 mt-8 w-[150px] mb-8">
      {props.options.map((option) => {
        return (
          <div key={option.id} className="flex justify-between">
            <label>{option.name}</label>
            <input type="checkbox" />
          </div>
        );
      })}
    </div>
  );
};

export default CheckFilters;
