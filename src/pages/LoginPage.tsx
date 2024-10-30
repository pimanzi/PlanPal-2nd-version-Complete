import { useDarkMode } from '@/contexts/DarkModeProvider';
import LoginForm from '@/features/authentication/LoginForm';

export default function Login() {
  const { isDark } = useDarkMode();
  return (
    <div className="flex flex-col justify-center items-center bg-[var(--color-bg-main)] h-screen">
      {isDark ? (
        <img className=" h-36 w-auto" src="/PalLogoDark.png" alt="logo"></img>
      ) : (
        <img className=" h-36 w-auto" src="/PalLogo.png" alt="logo"></img>
      )}
      <h2 className="text-2xl font-bold mb-5">
        Log in to your{' '}
        <span className="text-[var(--border-color-hover)]">account</span>{' '}
      </h2>
      <LoginForm></LoginForm>
    </div>
  );
}
