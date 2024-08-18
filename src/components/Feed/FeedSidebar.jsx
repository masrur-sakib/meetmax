'use client';

import dynamic from 'next/dynamic';
import { usersData } from '@/data/usersData';
// To solve hydration issue, using dynamic import for this component only
const UserCardProfile = dynamic(() => import('../UserCardProfile'), {
  ssr: false,
});

export default function FeedSidebar() {
  const notFriendUsers = usersData.filter((user) => !user.isFriend);
  const profileSuggestion =
    notFriendUsers[Math.floor(Math.random() * notFriendUsers.length)];

  return (
    <div className='hidden xl:block w--60 2xl:w-64 text-gray-500'>
      {/* You Might Like Section */}
      <div className='bg-white rounded-lg'>
        <div className='p-2 flex justify-between items-center border-b border-gray-200'>
          <p className='font-semibold text-sm'>You Might Like</p>
          <p className='text-blue-500 text-xs cursor-pointer'>See All</p>
        </div>
        <UserCardProfile data={profileSuggestion} />
      </div>
    </div>
  );
}
