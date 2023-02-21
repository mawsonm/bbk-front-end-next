import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "../addRecipe/select";

const SearchInput = (props) => {
  return (
    <div className="relative">
      <FontAwesomeIcon
        className="absolute left-4 top-3"
        color={"#a9a9a9"}
        icon={faSearch}
      />
      <input
        className="rounded-xl border-1 border-neutral-300 focus:outline-red-200 w-[75%] px-10 py-2"
        placeholder="Search recipes by name"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
