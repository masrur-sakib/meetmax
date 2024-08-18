'use client';

import Image from 'next/image';

export default function UserCardProfile({ data }) {
  return (
    <div className='p-4'>
      <div className='flex justify-start items-start space-x-6'>
        <Image
          className='h-10 w-10'
          src={data.avatar}
          alt={data.name}
          width={0}
          height={0}
          unoptimized
        />
        <div>
          <p className='text-sm'>{data.name}</p>
          <p className='text-vs text-gray-400'>{data.about}</p>
          <div className='mt-3 flex justify-start items-center space-x-3'>
            <Image
              src='/icons/Explore.png'
              className='cursor-pointer'
              alt='Explore Icon'
              width={12}
              height={12}
            />
            <Image
              src='/icons/Facebook.png'
              className='cursor-pointer'
              alt='Facebook Icon'
              width={12}
              height={12}
            />
            <Image
              src='/icons/Twitter.png'
              className='cursor-pointer'
              alt='ActiveIcon'
              width={12}
              height={12}
            />
            <Image
              src='/icons/Instagram.png'
              className='cursor-pointer'
              alt='ActiveIcon'
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className='mt-4 flex justify-start items-center space-x-4 2xl:space-x-6'>
        <button
          type='button'
          className='px-7 py-1.5 text-xs outline-none rounded-lg border border-gray-200 hover:bg-gray-100'
        >
          Ignore
        </button>
        <button
          type='button'
          className='px-7 py-1.5 text-xs text-gray-100 outline-none rounded-lg border border-gray-200 bg-blue-500 hover:bg-blue-600'
        >
          Follow
        </button>
      </div>
    </div>
  );
}
