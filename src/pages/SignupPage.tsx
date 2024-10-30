import { useDarkMode } from '@/contexts/DarkModeProvider';
import SignupForm from '@/features/authentication/SignupForm';

export default function Signup() {
  const { isDark } = useDarkMode();
  return (
    <div className="flex flex-col justify-center items-center bg-[var(--color-bg-main)] h-screen">
      {isDark ? (
        <img className=" h-36 w-auto" src="/PalLogoDark.png" alt="logo"></img>
      ) : (
        <img className=" h-36 w-auto" src="/PalLogo.png" alt="logo"></img>
      )}
      <h2 className="text-2xl font-bold mb-5">
        Sign Up for{' '}
        <span className="text-[var(--border-color-hover)] uppercase">
          planPal
        </span>{' '}
      </h2>
      <SignupForm></SignupForm>
    </div>
  );
}
