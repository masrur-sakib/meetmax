'use client';

import Image from 'next/image';
import UserCardVertical from '../UserCardVertical';
import { usersData } from '@/data/usersData';
import UserCardHorizontal from '../UserCardHorizontal';

export default function RightSidebar() {
  const storyData = usersData
    .filter((user) => {
      return user.storyShared === true;
    })
    .slice(0, 4);

  const friendsData = usersData.filter((user) => {
    return user.isFriend === true;
  });

  return (
    <div className='rightSidebar sticky top-20 h-[calc(100vh-theme(spacing.20))] overflow-y-auto hidden lg:block w-1/5 '>
      {/* Search */}
      <div className='flex justify-start items-center space-x-2 w-full h-10 rounded-lg px-4 py-2 ring-1 ring-inset ring-gray-300'>
        <Image
          src='/icons/Search.png'
          alt='Search Icon'
          width={13}
          height={13}
          priority
        />
        <input
          id='search'
          className='w-full h-full outline-none placeholder:text-gray-400 text-sm'
          name='search'
          type='search'
          placeholder='Search friends'
          required
        />
      </div>

      {/* Story Section */}
      <div className='flex justify-between items-center'>
        {storyData.map((data) => (
          <UserCardVertical key={data.name} data={data} />
        ))}
      </div>

      {/* Friends Section */}
      <div className='mt-6 flex justify-between items-center text-sm text-gray-600 font-bold'>
        <p>Friends</p>
        <Image
          src='/icons/ThreeDots.png'
          className='cursor-pointer'
          alt='ThreeDotsIcon'
          width={16}
          height={8}
          unoptimized
        />
      </div>
      {friendsData.map((data) => (
        <UserCardHorizontal key={data.name} data={data} />
      ))}
    </div>
  );
}
