'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function NavbarLargeScreen() {
  const { data: session, status } = useSession();
  return (
    <header
      className={
        session
          ? 'hidden sm:block sticky top-0 bg-white'
          : 'sticky top-0 bg-white'
      }
    >
      <nav className='z-10 mx-auto px-4 h-20 lg:px-8 flex items-center justify-between space-x-4'>
        {/* Site Logo */}
        <div className='w-1/5'>
          <Link className='flex items-center' href='/'>
            <Image
              src='/logo.png'
              alt='Site Logo'
              width={30}
              height={20}
              priority
            />
            <span className='ml-2'>Meetmax</span>
          </Link>
        </div>

        {/* Language Dropdown - Only Auth Screen */}
        <div className={session ? 'hidden' : 'right-0 flex items-center'}>
          <label htmlFor='language' className='sr-only'>
            Language
          </label>
          <select
            id='site-language'
            name='language'
            className='h-full shadow-sm rounded-md py-2 pl-4 pr-2 text-gray-400 outline-none text-sm'
          >
            <option>English (UK)</option>
            <option>English (US)</option>
          </select>
        </div>

        {/* Search box - Only Feed Screen */}
        <div className={session ? 'flex-1' : 'hidden'}>
          <div className='flex justify-start items-center space-x-2 w-full h-10 rounded-lg px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300'>
            <Image
              src='/icons/Search.png'
              alt='Search Icon'
              width={15}
              height={15}
              priority
            />
            <input
              id='search'
              className='w-full h-full outline-none placeholder:text-gray-400 placeholder:lg:text-sm text-sm'
              name='search'
              type='search'
              placeholder='Search for something here...'
              required
            />
          </div>
        </div>

        {/* User Name and Avatar - Only Feed Screen */}
        <div className={session ? 'w-1/3 lg:w-2/5' : 'hidden'}>
          <div className='flex justify-end items-center space-x-4 font-normal text-gray-500 text-md'>
            <span>Saleh Ahmed</span>
            <Image
              src='/users/SalehAhmed.png'
              alt='Search Icon'
              className='rounded-lg'
              width={40}
              height={30}
              priority
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
