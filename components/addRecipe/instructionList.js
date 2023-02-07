import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const InstructionList = (props) => {
  const moveUpHandler = (index) => {
    props.setInstructions((prev) => moveArr(prev, index, index - 1));
  };

  const moveDownHandler = (index) => {
    props.setInstructions((prev) => moveArr(prev, index, index + 1));
  };

  const removeHandler = (removedIndex) => {
    props.setInstructions((prev) =>
      prev.filter((item, index) => removedIndex !== index)
    );
  };

  const moveArr = (arr, fromIndex, toIndex) => {
    const movedItem = arr.find((item, index) => index === fromIndex);
    const remainingItems = arr.filter((item, index) => index !== fromIndex);
    const reorderedItems = [
      ...remainingItems.slice(0, toIndex),
      movedItem,
      ...remainingItems.slice(toIndex),
    ];
    return reorderedItems;
  };

  return (
    <div className="px-16 py-8 flex flex-col gap-8 w-full">
      {props.instructions.map((instruction, index) => {
        return (
          <div className="flex justify-between items-center w-full" key={index}>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {index != 0 && (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="cursor-pointer"
                    onClick={() => moveUpHandler(index)}
                  />
                )}
                {index != props.instructions.length - 1 && (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="cursor-pointer"
                    onClick={() => moveDownHandler(index)}
                  />
                )}
              </div>
              <p>
                <span className="font-semibold text-[24px]">{index + 1}. </span>{" "}
                {instruction}
              </p>
            </div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="cursor-pointer"
              onClick={() => removeHandler(index)}
              color={"#f87171"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InstructionList;
