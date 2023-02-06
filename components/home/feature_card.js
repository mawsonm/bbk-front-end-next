import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = (props) => {
  return (
    <div
      className={`bg-slate-200 flex ${
        props.number == 1 ? "rounded-l-lg" : ""
      } ${
        props.number == 4 ? "rounded-r-lg" : ""
      } hover:-translate-y-6 hover:bg-slate-300 transition-all cursor-pointer`}
    >
      <div className="flex flex-col gap-4 items-center p-8">
        <div className="p-2 rounded">
          <FontAwesomeIcon
            icon={props.icon}
            color={"rgb(252 165 165)"}
            size={"2x"}
          ></FontAwesomeIcon>
        </div>
        <h3 className="text-[24px] font-semibold text-center">{props.title}</h3>
        <p className="text-center text-neutral-800">{props.caption}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
