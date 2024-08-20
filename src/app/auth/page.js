'use client';
import ForgotPassword from '@/components/Auth/ForgotPassword';
import SignIn from '@/components/Auth/SignIn';
import SignUp from '@/components/Auth/SignUp';
import { useUserStore } from '@/store/store';

export default function Auth() {
  const haveAccount = useUserStore((state) => state.haveAccount);
  return (
    <>
      {haveAccount === true ? (
        <SignIn />
      ) : haveAccount === false ? (
        <SignUp />
      ) : (
        <ForgotPassword />
      )}
    </>
  );
}
