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
          {props.valid === true && (
            <FontAwesomeIcon icon={faCircleCheck} color={"#22c55e"} />
          )}
          {props.valid === false && (
            <FontAwesomeIcon icon={faCircleExclamation} color={"#ef4444"} />
          )}
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`mr-4 transition-transform ${open ? "" : "rotate-180"}`}
          />
        </div>
      </div>
      <div className={`${!open && "hidden"}`}>{props.children}</div>
    </>
  );
};

export default Accordion;
