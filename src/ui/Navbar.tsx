import useLogout from '@/features/authentication/useLogoutUser';
import { useTranslation } from 'react-i18next';
import { BiLogOutCircle } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { HiHome, HiOutlineUser } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const { t } = useTranslation();
  const { logout, isLoggingOut } = useLogout();
  return (
    <div className="flex flex-col justify-between pb-[100px]">
      <ul className="  flex sm:flex-col gap-3">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? ' border-[var(--border-color-hover)] bg-[var(--color-navlink-hover)] mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium transition-all duration-300'
                : 'navLink hover:border-[var(--border-color-hover)] hover:bg-[var(--color-navlink-hover)] mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px] transition-all duration-300'
            }
          >
            {({ isActive }) => (
              <>
                <HiHome
                  className="xsTablet:text-[30px] smTablet:text-[20px]"
                  color={isActive ? '#483ebf' : ''}
                />
                <span className="xsTablet:hidden smTablet:inline ">
                  {t('navHome')}
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? ' border-[var(--border-color-hover)] bg-[var(--color-navlink-hover)] mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium transition-all duration-300'
                : 'navLink hover:border-[var(--border-color-hover)] hover:bg-[var(--color-navlink-hover)] mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px] transition-all duration-300'
            }
          >
            {({ isActive }) => (
              <>
                {' '}
                <FaClipboardList
                  className="xsTablet:text-[30px] smTablet:text-[20px]"
                  color={isActive ? '#483ebf' : ''}
                />
                <span className="xsTablet:hidden smTablet:inline">
                  {t('navTasks')}
                </span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/myProfile"
            className={({ isActive }) =>
              isActive
                ? ' border-[var(--border-color-hover)] bg-[var(--color-navlink-hover)] mx-8 flex items-center gap-3 border-l-[6px] px-[15%] py-[6px] text-lg font-medium transition-all duration-300'
                : 'navLink hover:border-[var(--border-color-hover)] hover:bg-[var(--color-navlink-hover)] mx-8 flex items-center gap-3 px-[15%] py-[6px] text-lg font-medium hover:border-l-[6px] transition-all duration-300'
            }
          >
            {({ isActive }) => (
              <>
                {' '}
                <HiOutlineUser
                  className="xsTablet:text-[30px] smTablet:text-[20px]"
                  color={isActive ? '#483ebf' : ''}
                />
                <span className="xsTablet:hidden smTablet:inline ">
                  {t('profile')}
                </span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="space-y-4">
        <button
          className="block w-full"
          disabled={isLoggingOut}
          onClick={() => logout()}
        >
          <li className="hover:cursor-pointer">
            <a className="flex w-full items-center gap-3 pl-[25%] text-lg font-semibold text-red-500 transition-all delay-150 ease-in-out hover:translate-y-[-2px] hover:text-red-600">
              <BiLogOutCircle
                className="xsTablet:text-[30px] smTablet:text-[20px]"
                color="rgb(239 68 68"
              ></BiLogOutCircle>
              <span className="xsTablet:hidden smTablet:inline ">
                {' '}
                {t('navSignout')}
              </span>
            </a>
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
