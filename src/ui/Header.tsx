import { FaUser } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import { formatDate } from "../utils/helpers";

function Header() {
  const date = new Date();
  const [dark, setDark] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-around pb-2 pr-5 pt-6">
      <p className="flex flex-col space-y-1">
        <span className="block font-merriweather text-2xl font-bold">
          <span className="-tracking-tighter text-second-main-color">
            {" "}
            Hello,
          </span>
          Placide!
        </span>

        <span className="font-inter text-base font-normal">
          {formatDate(date)}
        </span>
      </p>
      <input
        type="text"
        className="w-72 rounded-full bg-bg-header px-3 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:w-96 focus:outline-none focus:ring focus:ring-second-main-color focus:ring-opacity-50"
        placeholder="Search tasks"
      />
      <div className="flex items-center gap-6">
        <button
          onClick={() => setDark(!dark)}
          className="rounded-full bg-bg-header px-1 py-1"
        >
          {dark === false ? <FiMoon /> : <FiSun />}
        </button>
        <div className="flex items-center gap-3">
          <FaUser color="#483ebf" />
          <p className="font-inter text-lg font-medium">Imanzi Placide</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
