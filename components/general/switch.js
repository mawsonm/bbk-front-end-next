import { useState } from "react";

const Switch = (props) => {
  const [isName, setIsName] = useState(true);

  return (
    <div className="flex gap-4 items-center px-4 my-4">
      <span className={`text-neutral-700 ${!isName ? "font-semibold" : ""}`}>
        Ingredients
      </span>
      <div
        onClick={() => setIsName((prev) => !prev)}
        className="cursor-pointer rounded-xl border-2 border-red-200 relative w-[64px] h-[32px]"
      >
        <div
          className={`absolute ${
            isName ? "translate-x-[25px]" : "translate-x-[3px]"
          } top-1 bottom-1 w-[30px] rounded-full bg-red-200 transition-all`}
        ></div>
      </div>
      <span className={`text-neutral-700 ${isName ? "font-semibold" : ""}`}>
        Name
      </span>
    </div>
  );
};

export default Switch;
