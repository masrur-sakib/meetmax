'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function NavbarSmallScreen() {
  const { data: session, status } = useSession();
  return (
    <header
      className={
        session ? 'block sm:hidden sticky top-0 bg-white z-50' : 'hidden'
      }
    >
      <nav className='px-4 h-16 flex items-center justify-between space-x-4'>
        {/* User Avatar  - Small Device */}
        <Image
          src='/users/SalehAhmed.png'
          alt='Search Icon'
          className='rounded-lg'
          width={36}
          height={36}
          priority
        />
        {/* Search box */}
        <div className='flex-1'>
          <div className='flex justify-start items-center space-x-2 w-full h-8 rounded-lg px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
            <Image
              src='/icons/Search.png'
              alt='Search Icon'
              width={15}
              height={15}
              priority
            />
            <input
              id='search'
              className='w-full h-full outline-none placeholder:text-gray-400 text-xs'
              name='search'
              type='search'
              placeholder='Search for something here...'
              required
            />
          </div>
        </div>

        <Image
          src='/icons/Message.png'
          className='w-6 h-6 cursor-pointer'
          alt='message=icon'
          width={0}
          height={0}
          priority
        />
      </nav>
    </header>
  );
}
