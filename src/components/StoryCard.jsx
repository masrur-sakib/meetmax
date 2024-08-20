'use client';

import { usersData } from '@/data/usersData';
import { useUserStore } from '@/store/store';
import UserCardVertical from './UserCardVertical';
import { useSession } from 'next-auth/react';

export default function StoryCard({ position }) {
  const user = useUserStore((state) => state.user);
  const { data: session, status } = useSession();
  const storyData = usersData.filter((user) => {
    return user.storyShared === true;
  });

  return (
    <div
      className={`${
        session ? 'block' : 'hidden'
      } flex-1 mt-4 bg-white xs:hidden flex justify-between items-center`}
    >
      {position === 'topFeed'
        ? storyData.map((data) => (
            <UserCardVertical key={data.id} data={data} />
          ))
        : storyData
            .slice(0, 4)
            .map((data) => <UserCardVertical key={data.id} data={data} />)}
    </div>
  );
}
