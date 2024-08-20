'use client';

import Image from 'next/image';

export default function UserCardVertical({ data }) {
  return (
    <div className='mt-4 mx-2 lg:mx-0 w-1/6 max-w-24 lg:w-1/4 py-2 px-1 lg:p-2 2xl:p-3 flex flex-col justify-center items-center [&:nth-child(n+2)]:space-y-4 cursor-pointer'>
      <Image
        className='h-full w-full'
        src={data.avatar}
        alt={data.name}
        width={0}
        height={0}
        unoptimized
      />
      {/* Add Icon */}
      <Image
        className={`${
          data.name === 'Saleh Ahmed' ? 'block' : 'hidden'
        } p-1 bg-white rounded-xl relative bottom-2 h-4 w-4 2xl:h-5 2xl:w-5 z-10`}
        src='/icons/Add.png'
        alt='add'
        width={0}
        height={0}
      />
      <p className='text-xs 2xl:text-sm'>{data.name.split(' ')[0]}</p>
    </div>
  );
}
