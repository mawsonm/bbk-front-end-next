import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchFilters = (props) => {
  const [open, isOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[150px] mb-8">
        <h3 className="text-[18px] font-semibold">{props.title}</h3>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faPlus}
          onClick={() => isOpen((prev) => !prev)}
        />
      </div>
      {open && props.children}
    </>
  );
};

export default SearchFilters;
