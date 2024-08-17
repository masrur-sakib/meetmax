'use client';

import Image from 'next/image';

export default function UserCardVertical({ data }) {
  return (
    <div className='w-1/4 mt-4 py-2 px-1 lg:p-2 2xl:p-3 flex flex-col justify-center items-center [&:nth-child(n+2)]:space-y-4 cursor-pointer'>
      <Image
        className='h-full w-full'
        src={data.avatar}
        alt={data.name}
        width={0}
        height={0}
        unoptimized
      />
      <Image
        className={`${
          data.name === 'Saleh Ahmed' ? 'block' : 'hidden'
        } p-1 bg-white rounded-xl relative bottom-2`}
        src='/icons/feed/rightSidebar/Add.png'
        alt='add'
        width={18}
        height={16}
      />
      <p className='text-xs xl:text-sm'>{data.name.split(' ')[0]}</p>
    </div>
  );
}
