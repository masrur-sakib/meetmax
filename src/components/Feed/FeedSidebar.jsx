'use client';

import dynamic from 'next/dynamic';
import { usersData } from '@/data/usersData';
import { eventsData } from '@/data/eventsData';
import EventCard from '../EventCard';
import Image from 'next/image';
// To solve hydration issue, using dynamic import for this component only
const UserCardProfile = dynamic(() => import('../UserCardProfile'), {
  ssr: false,
});

export default function FeedSidebar() {
  const notFriendUsers = usersData.filter((user) => !user.isFriend);
  const profileSuggestion =
    notFriendUsers[Math.floor(Math.random() * notFriendUsers.length)];

  return (
    <div className='hidden xl:block w-60 2xl:w-64 text-gray-500'>
      {/* Profile Suggestion Section */}
      <div className='bg-white rounded-lg'>
        <div className='p-2 flex justify-between items-center border-b border-gray-200'>
          <p className='font-semibold text-sm'>You Might Like</p>
          <p className='text-blue-500 text-xs cursor-pointer'>See All</p>
        </div>
        <UserCardProfile data={profileSuggestion} />
      </div>

      {/* Event Section */}
      <div className='mt-6 bg-white rounded-lg'>
        <div className='p-2 flex justify-between items-center border-b border-gray-200'>
          <p className='font-semibold text-sm'>Recent Event</p>
          <Image
            src='/icons/ThreeDots.png'
            className='cursor-pointer'
            alt='ThreeDotsIcon'
            width={16}
            height={8}
            unoptimized
          />
        </div>
        <div className='py-4'>
          {eventsData.map((data) => (
            <EventCard key={data.name} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
