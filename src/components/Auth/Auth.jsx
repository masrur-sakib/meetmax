'use client';
import { useUserStore } from '@/store/store';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';

export default function Auth() {
  const haveAccount = useUserStore((state) => state.haveAccount);
  console.log(haveAccount);
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
