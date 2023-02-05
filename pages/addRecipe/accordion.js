import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Accordion = (props) => {
  const [open, setOpen] = useState(props.open);

  return (
    <>
      <div
        className={`flex justify-between mx-8 border-b-2 border-slate-200 text-[30px] items-center cursor-pointer ${
          props.index == 1 ? "border-t-2" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2 className="p-4 font-semibold">
          {props.index}. {props.title}
        </h2>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`mr-4 transition-transform ${open ? "" : "rotate-180"}`}
        />
      </div>
      {open && props.children}
    </>
  );
};

export default Accordion;
