'use client';

import Image from 'next/image';

export default function UserCardHorizontal({ data }) {
  return (
    <div className='my-2 h-10 flex justify-between items-center space-x-2 xl:space-x-4 text-sm cursor-pointer'>
      {/* Image */}
      <div className='w-1/6'>
        <Image
          className='h-8 w-8 xl:h-10 xl:w-10'
          src={data.avatar}
          alt={data.name}
          width={0}
          height={0}
          unoptimized
        />
      </div>

      {/* Name */}
      <p className='flex-1 text-xs 2xl:text-sm'>{data.name}</p>

      {/* Active Info */}
      <div>
        {data.status === 'active' ? (
          <Image
            src='/icons/Active.png'
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
