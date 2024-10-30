import { LoginData } from '@/features/authentication/LoginForm';
import supabase, { supabaseUrl } from './supabase';
import { SignupData } from '@/features/authentication/SignupForm';

export async function signUp({ email, password, fullName }: SignupData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
}

export async function loginUser({ email, password }: LoginData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

interface UserUpdate {
  fullName?: string;
  password?: string;
}

export async function updateUser({ fullName, password }: UserUpdate) {
  let updatedObject;

  if (fullName) updatedObject = { data: { fullName } };
  if (password) updatedObject = { password };
  const { data: updatedUser, error } = await supabase.auth.updateUser(
    updatedObject as UserUpdate
  );
  if (error) {
    throw new Error(error.message);
  }

  return updatedUser;
}

export async function UpdateProfileImage({ avatar }: { avatar: File }) {
  const fileName = `avatar-${avatar.name}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar);

  if (storageError) {
    throw new Error(storageError.message);
  }

  const { data: updatedUserAvatar, error: error2 } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (error2) {
    throw new Error(error2.message);
  }

  return updatedUserAvatar;
}
