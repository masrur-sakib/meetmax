'use client';

import Image from 'next/image';

export default function EventCard({ data }) {
  return (
    <div className='mx-2 [&:not(:last-child)]:mb-4 p-2 2xl:px-4 max-w-60 bg-zinc-50 rounded-lg cursor-pointer'>
      <div className='pb-2 flex justify-center items-start space-x-4 2xl:space-x-6 border-b border-gray-200'>
        <Image
          className='h-8 w-8'
          src={data.icon}
          alt={data.name}
          width={0}
          height={0}
          unoptimized
        />
        <div>
          <p className='pb-1 text-xs 2xl:text-sm'>{data.name}</p>
          <p className='text-vs text-gray-400'>{data.description}</p>
        </div>
      </div>
      <div className='py-2 flex justify-between items-center'>
        <p className='text-vs text-gray-500 font-semibold'>
          {data.seenCount} seen
        </p>
        <Image
          className='h-4 w-14'
          src={data.seenBy}
          alt='EventSeen'
          width={0}
          height={0}
          unoptimized
        />
      </div>
    </div>
  );
}
