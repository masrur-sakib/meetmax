'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useUserStore } from '@/store/store';

export default function Header() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  return (
    <header
      className={
        user ? 'hidden sm:block sticky top-0 bg-white' : 'sticky top-0 bg-white'
      }
    >
      <nav className='mx-auto p-4 lg:px-8 flex items-center justify-between space-x-4'>
        {/* Site Logo */}
        <div className='flex-none w-1/5' onClick={() => setUser()}>
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
        <div className={user ? 'hidden' : 'right-0 flex items-center'}>
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
        <div className={user ? 'flex-1' : 'hidden'}>
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
              className='w-full h-full text-gray-500 outline-none placeholder:text-gray-400 text-sm'
              name='search'
              type='search'
              placeholder='Search for something here...'
              required
            />
          </div>
        </div>

        {/* User Name and Avatar - Only Feed Screen */}
        <div className={user ? 'w-2/5' : 'hidden'}>
          <div className='flex justify-end items-center space-x-4 font-normal text-gray-500 text-md'>
            <span>Saleh Ahmed</span>
            <Image
              src='/avatars/header-avatar.png'
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
