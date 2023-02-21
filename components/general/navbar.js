import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <header
      className={`${
        router.pathname == "/addRecipe"
          ? "bg-slate-500"
          : router.pathname == "/search"
          ? "bg-slate-200"
          : "bg-transparent"
      } w-full z-10`}
    >
      <nav className="mx-auto py-4 px-8 sm:flex justify-between items-center hidden max-w-[1700px]">
        <Image
          src="images/logo.svg"
          alt="Bri Bri's Kitchen Logo"
          width="125"
          height="125"
        />
        <ul className="flex items-center text-black">
          <li onClick={() => window.location.replace("/#home")}>
            <a
              className={`${
                router.pathname == "/addRecipe" ? "text-white" : ""
              } py-4  px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded`}
            >
              Home
            </a>
          </li>
          <li onClick={() => window.location.replace("/#features")}>
            <a
              className={`${
                router.pathname == "/addRecipe" ? "text-white" : ""
              } py-4  px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded`}
            >
              Features
            </a>
          </li>
          <li onClick={() => window.location.replace("/#about")}>
            <a
              className={`${
                router.pathname == "/addRecipe" ? "text-white" : ""
              } py-4  px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded`}
            >
              About
            </a>
          </li>
          <li onClick={() => window.location.replace("/#recipes")}>
            <a
              className={`${
                router.pathname == "/addRecipe" ? "text-white" : ""
              } py-4  px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded`}
            >
              Recipes
            </a>
          </li>
          <li onClick={() => window.location.replace("/#search")}>
            <a
              className={`${
                router.pathname == "/addRecipe" ? "text-white" : ""
              } py-4  px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded`}
            >
              Search
            </a>
          </li>
        </ul>
        <button className="bg-red-200 px-6 py-2 rounded">Login</button>
      </nav>
      <nav className={`flex sm:hidden justify-between py-4 px-4 items-center`}>
        <Image
          src="images/logo.svg"
          alt="Bri Bri's Kitchen Logo"
          width="75"
          height="75"
        />
        <FontAwesomeIcon icon={faBars} size="2x" />
      </nav>
    </header>
  );
};

export default Navbar;
