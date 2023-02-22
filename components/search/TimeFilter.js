const TimeFilter = (props) => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[14px]">Minimum Time</label>
        <div className="relative w-[75%]">
          <span className="text-neutral-400 text-[12px] absolute right-10 top-3">
            min
          </span>
          <input
            type="number"
            className="rounded focus:outline-red-200 pl-4 py-2 pr-10 w-[75%] mr-4"
            step={5}
            defaultValue={0}
            min={0}
            max={720}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[14px]">Maximum Time</label>
        <div className="relative w-[75%]">
          <span className="text-neutral-400 text-[12px] absolute right-10 top-3">
            min
          </span>
          <input
            type="number"
            className="rounded focus:outline-red-200 pl-4 py-2 pr-10 w-[75%] mr-4"
            step={5}
            defaultValue={720}
            min={0}
            max={720}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeFilter;
