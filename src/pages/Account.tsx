import UpdatePassword from '@/features/authentication/UpdatePassword';
import UpdateUserInfo from '@/features/authentication/UpdateUserInfo';
import { useTranslation } from 'react-i18next';

export default function Account() {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex-col gap-11 flex items-center pt-10 mb-[100px]">
      <div className="space-y-4 w-[80%] bgTablet:w-fit">
        {' '}
        <h2 className="font-bold text-2xl">{t('accountPageTitle')}</h2>
        <UpdateUserInfo></UpdateUserInfo>
      </div>

      <div className="space-y-4 w-[80%] bgTablet:w-fit">
        <UpdatePassword></UpdatePassword>
      </div>
    </div>
  );
}
