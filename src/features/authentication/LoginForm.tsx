import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useLoginUser from './useLoginUser';

export interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { isLogin, login } = useLoginUser();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    login(data, { onSettled: () => reset() });
  }

  return (
    <div className="w-[90%] border px-5 py-8 rounded-md bg-[var(--color-grey-0)] space-y-3 sm:px-11 sm:py-10 sm:w-[500px] shadow-lg shadow-[var(--color-grey-0)]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="font-medium">
            Email
          </Label>
          <Input
            {...register('email', {
              required: 'Email is required',
            })}
            id="email"
            disabled={isLogin}
            type="email"
            className="bg-[var(--color-bg-main)] focus:bg-[var(--color-grey-0)]"
            placeholder="Your Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password" className="font-medium">
            Password
          </Label>
          <Input
            {...register('password', { required: 'Password is required' })}
            id="password"
            className="bg-[var(--color-bg-main)] focus:bg-[var(--color-grey-0)]"
            type="password"
            disabled={isLogin}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <Button
          disabled={isLogin}
          className="w-full px-2 bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
        >
          Log in
        </Button>

        <div>
          <p className=" text-center text-[var(--color-grey-500)] text-sm">
            Not have an account?{' '}
            <Link
              className="text-[var(--border-color-hover)] hover:underline font-bold"
              to="/signup"
            >
              Sign up for planPal
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
