const InstructionList = (props) => {
  return (
    <div className="px-16 py-8 flex flex-col gap-4">
      {props.instructions.map((instruction, index) => {
        return (
          <p key={index}>
            <span className="font-semibold text-[24px]">{index + 1}. </span>{" "}
            {instruction}
          </p>
        );
      })}
    </div>
  );
};

export default InstructionList;
