'use client';

import Image from 'next/image';

export default function UserCardHorizontal({ data }) {
  return (
    <div className='my-2 h-10 flex justify-between items-center space-x-4 text-sm cursor-pointer'>
      {/* Image */}
      <div className='w-1/6'>
        <Image
          className='sm:h-6 sm:w-8 md:h-10 md:w-10'
          src={data.avatar}
          alt={data.name}
          width={0}
          height={0}
          unoptimized
        />
      </div>

      {/* Name */}
      <p className='flex-1 text-xs xl:text-sm'>{data.name}</p>

      {/* Active Info */}
      <div>
        {data.status === 'active' ? (
          <Image
            src='/icons/feed/rightSidebar/Active.png'
            alt='ActiveIcon'
            width={8}
            height={8}
            unoptimized
          />
        ) : (
          <span className='text-gray-400 text-xs'>{data.lastActive}</span>
        )}
      </div>
    </div>
  );
}
