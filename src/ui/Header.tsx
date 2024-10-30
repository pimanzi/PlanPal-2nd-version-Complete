import { useTranslation } from 'react-i18next';
import { AvatarUi } from './AvatarUi';
import DarkModeToogle from './DarkModeToggle';
import { formatLocalizedDate } from '@/utils/helpers';
import { LanguageSwitch } from './LanguageSwitch';
import useUser from '@/features/authentication/useUser';

export default function Header() {
  const { user } = useUser();
  const name = user?.user_metadata.fullName.split(' ')[0];
  const { t } = useTranslation();
  const todayDate = formatLocalizedDate(new Date());

  return (
    <div className=" py-3 pl-[30px] pr-[30px] xsPhone:py-5 xsTablet:pl-20 flex justify-between xsTablet:pr-10 bg-[var(--color-grey-0)] dark:bg-[var(--color-grey-0)]">
      {' '}
      <div>
        <div className="flex items-center gap-4">
          {' '}
          <div className=" lg:hidden hidden xsPhone:block">
            {' '}
            <AvatarUi></AvatarUi>
          </div>
          <div>
            {' '}
            <p className="font-bold  text-2xl lg:text-3xl ">
              {t('welcomeMessage')}{' '}
              <span className="hidden xsPhone:hidden xs:inline text-[var(--border-color-hover)] dark:text-[var(--border-color-hover)]">
                {name}
              </span>
            </p>
            <p className="text-xs xs:text-lg xsPhone:text-xs font-medium text-[var(--color-grey-500)] dark:text-[var(--color-grey-500)]">
              {todayDate}
            </p>
          </div>
        </div>
      </div>
      <div className="flex xs:gap-2 items-center gap-0 ">
        <DarkModeToogle></DarkModeToogle>
        <LanguageSwitch></LanguageSwitch>
        <div className="hidden lg:block">
          {' '}
          <AvatarUi></AvatarUi>
        </div>
      </div>
    </div>
  );
}
