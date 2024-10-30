import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useUpdateUser } from './useUpdateUser';
import { useTranslation } from 'react-i18next';

interface PasswordUpdate {
  password: string;
  confirmPassword: string;
}
function UpdatePassword() {
  const { t } = useTranslation();
  const { updatingUser, isUpdatingUser } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordUpdate>();

  function onSubmit(data: PasswordUpdate) {
    updatingUser({
      password: data.password,
    });
  }

  const passwordField = watch('password');
  return (
    <form
      className="bg-[var(--color-grey-0)] space-y-7 bgTablet:py-7 bgTablet:px-10 bgTablet:w-[980px] rounded-2xl w-full py-7 px-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="font-bold text-xl">{t('passwordTitleForm')}</h3>

      <div className="flex flex-col gap-1">
        <Label htmlFor="password" className="font-bold text-sm">
          {t('newPasswordInput')}
        </Label>
        <Input
          id="password"
          type="password"
          {...register('password', {
            required: t('newPasswordInputAlert'),
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="confirnPassword" className="font-bold text-sm">
          {t('confirmPasswordInput')}
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            validate: (value) => value === passwordField || t('passwordMatch'),
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div>
        <Button
          disabled={isUpdatingUser}
          className="py-6 text-sm rounded-full w-full px-2 bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
        >
          {t('saveChangesButton')}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
