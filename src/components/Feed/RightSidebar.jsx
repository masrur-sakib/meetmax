'use client';

import { users } from '@/data/users';
import Image from 'next/image';
import UserCardVertical from '../UserCardVertical';

export default function RightSidebar() {
  return (
    <div className='hidden lg:block w-1/5 '>
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

      {/* Users Section */}
      <div className='flex justify-between items-center'>
        {users.slice(0, 4).map((data) => (
          <UserCardVertical key={users.name} data={data} />
        ))}
      </div>

      {/* Friends Section */}
      <p>Friends</p>
    </div>
  );
}
