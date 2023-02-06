import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Accordion = (props) => {
  const [open, setOpen] = useState(props.open);

  return (
    <>
      <div
        className={`flex justify-between mx-8 border-t-2 border-slate-200 text-[30px] items-center cursor-pointer ${
          props.index == 3 ? "border-b-2" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2 className="p-4 font-semibold">
          {props.index}. {props.title}
        </h2>
        <div className="flex gap-8">
          <FontAwesomeIcon icon={faCircleExclamation} color={"#ef4444"} />
          <FontAwesomeIcon icon={faCircleCheck} color={"#22c55e"} />
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`mr-4 transition-transform ${open ? "" : "rotate-180"}`}
          />
        </div>
      </div>
      {open && props.children}
    </>
  );
};

export default Accordion;
