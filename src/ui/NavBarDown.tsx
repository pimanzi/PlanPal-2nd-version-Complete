import useLogout from '@/features/authentication/useLogoutUser';
import { BiLogOutCircle } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { HiHome, HiOutlineUser } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

function NavBarDown() {
  const { isLoggingOut, logout } = useLogout();
  return (
    <div className=" block xsTablet:hidden  bg-[var(--color-grey-0)] h-[60px] fixed bottom-0 left-0 right-0 pb-2">
      <ul className=" h-full flex gap-3 justify-around items-center ">
        <li>
          <NavLink to="/home" className="navLink">
            {({ isActive }) => (
              <>
                <HiHome
                  className="text-[30px] xsPhone:text-[35px]"
                  color={isActive ? '#483ebf' : ''}
                />
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/tasks" className="navLink">
            {({ isActive }) => (
              <>
                {' '}
                <FaClipboardList
                  className="text-[30px] xsPhone:text-[35px]"
                  color={isActive ? '#483ebf' : ''}
                />
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/myProfile" className="navLink">
            {({ isActive }) => (
              <>
                {' '}
                <HiOutlineUser
                  className="text-[30px] xsPhone:text-[35px]"
                  color={isActive ? '#483ebf' : ''}
                />
              </>
            )}
          </NavLink>
        </li>
        <button onClick={() => logout()} disabled={isLoggingOut}>
          {' '}
          <li>
            <a className="flex w-full items-center gap-3 pl-[25%] text-lg font-semibold text-red-500 transition-all delay-150 ease-in-out hover:translate-y-[-2px] hover:text-red-600">
              <BiLogOutCircle
                className="text-[30px] xsPhone:text-[35px]"
                color="rgb(239 68 68"
              ></BiLogOutCircle>
            </a>
          </li>
        </button>
      </ul>
    </div>
  );
}

export default NavBarDown;
