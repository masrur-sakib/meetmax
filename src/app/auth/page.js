'use client';
import ForgotPassword from '@/components/Auth/ForgotPassword';
import SignIn from '@/components/Auth/SignIn';
import SignUp from '@/components/Auth/SignUp';
import { useUserStore } from '@/store/store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Auth() {
  const haveAccount = useUserStore((state) => state.haveAccount);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session || status !== 'unauthenticated') {
      router.push('/');
    } else {
      router.push('/auth');
    }
  }, [session, status, router]);
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
