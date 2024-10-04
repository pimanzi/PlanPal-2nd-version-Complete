import { BiLogOutCircle } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

import { HiCalendarDays, HiHome, HiOutlineCog6Tooth } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col justify-between pb-[100px]">
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "border-second-main-color bg-link-light-gray mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium"
                : "hover:border-second-main-color hover:bg-link-light-gray mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px]"
            }
          >
            {({ isActive }) => (
              <>
                <HiHome color={isActive ? "#483ebf" : ""} />
                <span>Home</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/myTasks"
            className={({ isActive }) =>
              isActive
                ? "border-second-main-color bg-link-light-gray mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium"
                : "hover:border-second-main-color hover:bg-link-light-gray mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px]"
            }
          >
            {({ isActive }) => (
              <>
                {" "}
                <FaClipboardList color={isActive ? "#483ebf" : ""} />
                <span>My Tasks</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive
                ? "border-second-main-color bg-link-light-gray mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium"
                : "hover:border-second-main-color hover:bg-link-light-gray mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px]"
            }
          >
            {({ isActive }) => (
              <>
                {" "}
                <HiCalendarDays color={isActive ? "#483ebf" : ""} />
                <span>Calendar</span>
              </>
            )}
          </NavLink>
        </li>
        {/* 
        <li>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              isActive
                ? "mx-8 flex items-center gap-3 border-l-[6px] border-second-main-color bg-link-light-gray px-[15%] py-[6px] text-lg font-medium"
                : "mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px] hover:border-second-main-color hover:bg-link-light-gray"
            }
          >
            {({ isActive }) => (
              <>
                {" "}
                <AiOutlineTeam color={isActive ? "#483ebf" : ""} />
                <span>My Teams</span>
              </>
            )}
          </NavLink>
        </li> */}

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "border-second-main-color bg-link-light-gray mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium"
                : "hover:border-second-main-color hover:bg-link-light-gray mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px]"
            }
          >
            {({ isActive }) => (
              <>
                {" "}
                <FaFolderOpen color={isActive ? "#483ebf" : ""} />
                <span>My Projects</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive
                ? "border-second-main-color bg-link-light-gray mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium"
                : "hover:border-second-main-color hover:bg-link-light-gray mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px]"
            }
          >
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>

        <li>
          <a className="flex w-full items-center gap-3 pl-[25%] text-lg font-semibold text-red-500 transition-all delay-150 ease-in-out hover:translate-y-[-2px] hover:text-red-600">
            <BiLogOutCircle color="rgb(239 68 68"></BiLogOutCircle>
            <span> Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
