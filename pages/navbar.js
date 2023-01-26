import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-transparent w-full fixed z-10">
      <nav className="mx-auto py-4 px-8 sm:flex justify-between items-center hidden max-w-[1500px]">
        <Image
          src="images/logo.svg"
          alt="Bri Bri's Kitchen Logo"
          width="100"
          height="100"
        />
        <ul className="flex items-center text-black">
          <li>
            <a className="py-4 px-6 cursor-pointer hover:bg-slate-200 rounded">
              Home
            </a>
          </li>
          <li>
            <a className="py-4 px-6 cursor-pointer hover:bg-slate-200 rounded">
              Features
            </a>
          </li>
          <li>
            <a className="py-4 px-6 cursor-pointer hover:bg-slate-200 rounded">
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
