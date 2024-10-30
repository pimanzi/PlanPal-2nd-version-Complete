import { useDarkMode } from '@/contexts/DarkModeProvider';

function Logo() {
  const { isDark } = useDarkMode();
  return (
    <div className="flex w-full py-4">
      <img
        className=" mt-6 ml-[18%] w-[70px] h-[54px] smTablet:hidden bgTablet:hidden laptop:hidden"
        src="/smallLogo.png"
        alt="logo"
      ></img>

      {isDark ? (
        <img
          className=" xsTablet:hidden ml-[18%] h-36 w-auto smTablet:block bgTablet:block laptop:block"
          src="/PalLogoDark.png"
          alt="logo"
        ></img>
      ) : (
        <img
          className=" xsTablet:hidden ml-[18%] h-36 w-auto smTablet:block bgTablet:block laptop:block"
          src="/PalLogo.png"
          alt="logo"
        ></img>
      )}
    </div>
  );
}

export default Logo;
