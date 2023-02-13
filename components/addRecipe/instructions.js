import Input from "../general/input";
import InstructionList from "./instructionList";
const Instructions = (props) => {
  const submitHandler = (val) => {
    props.setInstructions((prev) => {
      return [...prev, val];
    });
    console.log("in submit");
    props.validator.reset();
  };

  return (
    <>
      <div className="px-16 py-8 flex flex-wrap gap-8 items-end">
        <Input
          type={"text"}
          title={"Instruction"}
          validator={props.validator}
        />
        <button
          className="bg-red-200 mt-8 px-6 py-2 rounded disabled:opacity-50"
          disabled={!props.validator.isValid}
          onClick={() => submitHandler(props.validator.value)}
        >
          Submit
        </button>
      </div>
      <InstructionList
        instructions={props.instructions}
        setInstructions={props.setInstructions}
      />
    </>
  );
};

export default Instructions;
