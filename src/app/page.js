'use client';

import Auth from '@/components/Auth/Auth';
import Feed from '@/components/Feed/Feed';
import { useUserStore } from '@/store/store';
export default function Home() {
  const user = useUserStore((state) => state.user);
  return <>{user ? <Feed /> : <Auth />}</>;
}
