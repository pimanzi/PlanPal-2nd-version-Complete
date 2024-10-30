import { Input } from '@/components/ui/input';
import useUser from './useUser';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FaCamera } from 'react-icons/fa';
import { useUpdateUser } from './useUpdateUser';
import { useUpdateAvatar } from './useUpdateAvatar';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function UpdateUserInfo() {
  const { updatingUser, isUpdatingUser } = useUpdateUser();
  const { updatingAvatar, isUpdatingAvatar } = useUpdateAvatar();
  const { user } = useUser();
  const currentFullName = user?.user_metadata.fullName;
  const email = user?.email;
  const avatar = user?.user_metadata.avatar;
  const { t } = useTranslation();
  const [fullName, setFullName] = useState(currentFullName);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fullName) return;
    updatingUser({
      fullName: fullName,
    });
  }

  return (
    <form
      className="bg-[var(--color-grey-0)] space-y-7 bgTablet:py-7 bgTablet:px-10 bgTablet:w-[980px] rounded-2xl w-full py-7 px-7"
      onSubmit={onSubmit}
    >
      <h3 className="font-bold text-xl">{t('personalInfoTitle')}</h3>

      <Label
        htmlFor="avatar"
        className="relative font-bold text-sm w-[70px] h-[70px] block rounded-full overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-full z-10"></div>

        <img
          src={avatar ? avatar : 'default-user.jpg'}
          alt="avatar"
          className="w-full h-full object-cover rounded-full z-0 "
          style={{ opacity: 0.8 }}
        />

        {isUpdatingAvatar ? (
          <div className="smallSpinner inset-0 absolute z-20 m-auto"></div>
        ) : (
          <FaCamera
            size={20}
            color="white"
            className=" font-bold absolute inset-0 m-auto z-20"
          />
        )}

        <input
          type="file"
          accept="image/*"
          id="avatar"
          className="hidden"
          disabled={isUpdatingAvatar}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              updatingAvatar({ avatar: file });
            } else {
              toast.error('Please select a valid image file.');
            }
          }}
        />
      </Label>

      <div className="flex flex-col gap-1">
        <Label htmlFor="email" className="font-bold text-sm">
          {t('emailInput')}
        </Label>
        <Input value={email} disabled id="email" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="fullName" className="font-bold text-sm">
          {t('fullNameInput')}
        </Label>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </div>
      <div>
        <Button
          disabled={isUpdatingUser}
          type="submit"
          className="py-6 text-sm rounded-full w-full px-2 bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
        >
          {t('saveChangesButton')}
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserInfo;
