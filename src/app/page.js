'use client';

import Auth from './auth/page';
import Feed from '@/components/Feed/Feed';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session || status !== 'unauthenticated') {
      router.push('/');
    } else {
      router.push('/auth');
    }
  }, [session, status, router]);
  return <>{session ? <Feed /> : <Auth />}</>;
}
