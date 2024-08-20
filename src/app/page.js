'use client';

import Auth from '@/components/Auth/Auth';
import Feed from '@/components/Feed/Feed';
// import { useUserStore } from '@/store/store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  // const user = useUserStore((state) => state.user);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
      // console.log('Not Authenticated.');
    }
  }, [status, router]);

  // if (status === 'loading') {
  //   return (
  //     <div className='flex justify-center iterm-center'>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }
  console.log(session, status);

  if (!session) {
    return null;
  }
  return <>{status === 'unauthenticated' ? <Auth /> : <Feed />}</>;
}
