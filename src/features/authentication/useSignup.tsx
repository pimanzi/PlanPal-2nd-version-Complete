import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useSignup() {
  const { mutate: signingUp, isPending: isSigningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success(
        'User successfully created, please verify your email for email confirmation'
      );
    },
    onError: (err) => {
      console.error(err);
      throw new Error(err.message);
    },
  });
  return { signingUp, isSigningUp };
}

export default useSignup;
