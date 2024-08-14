'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white'>
      <nav className='mx-auto flex items-center justify-between p-4 lg:px-8'>
        <div>
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
        <div className='inset-y-0 right-0 flex items-center'>
          <label htmlFor='language' className='sr-only'>
            Language
          </label>
          <select
            id='site-language'
            name='language'
            className='h-full shadow-sm rounded-md py-2 pl-4 pr-2 text-gray-400 outline-none sm:text-sm'
          >
            <option>English (UK)</option>
            <option>English (US)</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
