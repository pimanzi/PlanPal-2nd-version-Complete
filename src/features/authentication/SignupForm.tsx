import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useSignup from './useSignup';

export interface SignupData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function SignupForm() {
  const { signingUp, isSigningUp } = useSignup();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupData>();
  function onSubmit(data: SignupData) {
    signingUp(data, {
      onSettled: () => reset(),
    });
  }

  const passwordField = watch('password');
  return (
    <div className=" w-[90%] border px-5 py-8 rounded-md bg-[var(--color-grey-0)] space-y-3 sm:px-11 sm:py-10 sm:w-[500px] shadow-lg shadow-[var(--color-grey-0)]">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          {' '}
          <Label htmlFor="fullNames" className="font-medium">
            Full name
          </Label>
          <Input
            {...register('fullName', {
              required: 'Full name is required',
            })}
            id="fullNames"
            type="text"
            className="bg-[var(--color-bg-main)] focus:bg-[var(--color-grey-0)]"
            placeholder="Your Full name"
          ></Input>
          {errors.fullName && (
            <span className="text-red-500 text-xs">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {' '}
          <Label htmlFor="email" className="font-medium">
            Email
          </Label>
          <Input
            {...register('email', {
              required: 'email is required',
            })}
            id="email"
            type="email"
            className="bg-[var(--color-bg-main)] focus:bg-[var(--color-grey-0)]"
            placeholder="Your Email"
          ></Input>
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {' '}
          <Label htmlFor="password" className="font-medium">
            Password
          </Label>
          <Input
            {...register('password', {
              required: 'password is required',
            })}
            id="password"
            className="bg-[var(--color-bg-main)] focus:bg-[var(--color-grey-0)]"
            type="password"
            placeholder="Password"
          ></Input>
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {' '}
          <Label htmlFor="confirmPassword" className="font-medium">
            Password
          </Label>
          <Input
            {...register('confirmPassword', {
              validate: (value) =>
                value === passwordField || 'Passwords should match',
            })}
            id="confirmPassword"
            className="bg-[var(--color-bg-main)] focus:bg-[var(--color-grey-0)]"
            type="password"
            placeholder="Confirm password"
          ></Input>
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <Button
          disabled={isSigningUp}
          className="w-full px-2 bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
        >
          Sign up
        </Button>

        <div>
          {' '}
          <p className=" text-center text-[var(--color-grey-500)] text-sm">
            Already have an account?{' '}
            <Link
              className="text-[var(--border-color-hover)] hover:underline font-bold"
              to="/login"
            >
              log in for planPal
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
