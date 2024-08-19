'use client';

import Image from 'next/image';

export default function Post({ data }) {
  return (
    <div className='mt-4 p-4 bg-white rounded-lg'>
      {/* Top Section */}
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center space-x-4'>
          <Image
            className='w-10 h-full rounded-full'
            src={data.avatar}
            alt='SalehAhmed'
            width={0}
            height={0}
            unoptimized
          />
          <div className='flex flex-col justify-center items-start'>
            <p className='text-sm cursor-pointer'>{data.postBy}</p>
            <p className='text-vs text-gray-400'>
              <span className='mr-2'>{data.postTime}</span>{' '}
              <span>{data.postPrivacy}</span>
            </p>
          </div>
        </div>
        <Image
          src='/icons/ThreeDots.png'
          className='cursor-pointer'
          alt='ThreeDotsIcon'
          width={16}
          height={8}
          unoptimized
        />
      </div>

      {/* Content Secton */}
      {data.description && (
        <p className='mt-4 text-gray-400 text-xs sm:text-sm'>
          {data.description}
        </p>
      )}
    </div>
  );
}
