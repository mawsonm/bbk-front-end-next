import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchFilters = (props) => {
  const [open, isOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[150px]">
        <h3 className="text-[18px] font-semibold">{props.title}</h3>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faPlus}
          onClick={() => isOpen((prev) => !prev)}
        />
      </div>
      {open && (
        <div className="flex flex-col gap-4 mt-8 w-[150px]">
          {props.options.map((option) => {
            return (
              <div key={option.id} className="flex justify-between">
                <label>{option.name}</label>
                <input type="checkbox" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchFilters;
