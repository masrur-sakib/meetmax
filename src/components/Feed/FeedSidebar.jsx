'use client';

import dynamic from 'next/dynamic';
import { usersData } from '@/data/usersData';
import { eventsData } from '@/data/eventsData';
import EventCard from '../EventCard';
import Image from 'next/image';
import UserCardBirthday from '../UserCardBirthday';
// To solve hydration issue, using dynamic import for this component only
const UserCardProfile = dynamic(() => import('../UserCardProfile'), {
  ssr: false,
});

export default function FeedSidebar() {
  const notFriendUsers = usersData.filter((user) => !user.isFriend);
  const profileSuggestion =
    notFriendUsers[Math.floor(Math.random() * notFriendUsers.length)];

  // Let's Assume, Today date = 2024-08-20
  const currentDate = new Date('2024-08-20');
  const birthdayUser = usersData.find((user) => {
    if (user.birthdayDate !== '') {
      const dbDate = new Date(user.birthdayDate);
      return dbDate.getTime() === currentDate.getTime();
    }
  });
  return (
    <div className='feedSidebar py-6 px-6 sticky top-20 h-[calc(100vh-theme(spacing.20))] overflow-y-auto hidden xl:block w-72 2xl:w-1/5 bg-zinc-50 text-gray-500'>
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

        {/* Event Card */}
        {eventsData.map((data) => (
          <EventCard key={data.id} data={data} />
        ))}
      </div>

      {/* Birthdays Section */}
      <div className='mt-6 bg-white rounded-lg'>
        <div className='p-2 flex justify-between items-center border-b border-gray-200'>
          <p className='font-semibold text-sm'>Birthdays</p>
          <p className='text-blue-500 text-xs cursor-pointer'>See All</p>
        </div>
        <UserCardBirthday data={birthdayUser} />
      </div>
    </div>
  );
}
