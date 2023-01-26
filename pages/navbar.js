import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-transparent w-full fixed z-10">
      <nav className="mx-auto py-4 px-8 sm:flex justify-between items-center hidden max-w-[1700px]">
        <Image
          src="images/logo.svg"
          alt="Bri Bri's Kitchen Logo"
          width="125"
          height="125"
        />
        <ul className="flex items-center text-black">
          <li>
            <a className="py-4 px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded">
              Home
            </a>
          </li>
          <li>
            <a className="py-4 px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded">
              Features
            </a>
          </li>
          <li>
            <a className="py-4 px-6 cursor-pointer hover:bg-slate-300 transition-colors rounded">
              About
            </a>
          </li>
        </ul>
        <button className="bg-red-200 px-6 py-2 rounded">Login</button>
      </nav>
      <nav className="flex justify-end items-center"></nav>
    </header>
  );
};

export default Navbar;
