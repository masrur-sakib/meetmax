'use client';

import Image from 'next/image';

export default function UserCardBirthday({ data }) {
  return (
    <div className='p-4'>
      <div className='flex justify-start items-start space-x-4 2xl:space-x-6'>
        <Image
          className='w-1/5 h-10 w-10'
          src={data.avatar}
          alt={data.name}
          width={0}
          height={0}
          unoptimized
        />
        <div className='flex-1'>
          <p className='text-sm cursor-pointer'>{data.name}</p>
          <p className='text-vs text-gray-400'>Birthday Today</p>
        </div>
      </div>
      {/* Send Message */}
      <div className='mt-2 h-6 flex justify-between items-center space-x-2'>
        <input
          id='birthdayInput'
          className='p-2 w-full h-full bg-gray-50 outline-none placeholder:text-gray-400 text-xs rounded-md'
          name='birthdayInput'
          type='search'
          placeholder='Write on his inbox'
          required
        />
        <Image
          className='p-1 w-6 h-full bg-blue-50 cursor-pointer'
          src='/icons/send.png'
          alt='send-icon'
          width={0}
          height={0}
          unoptimized
        />
      </div>
      <div className='mt-4 p-2 bg-zinc-50 flex justify-start items-start space-x-4 2xl:space-x-6 cursor-pointer'>
        <Image
          className='h-8 w-8'
          src='/icons/birthday.png'
          alt={data.name}
          width={0}
          height={0}
          unoptimized
        />
        <div>
          <p className='pb-1 text-xs 2xl:text-sm'>Upcoming birthdays</p>
          <p className='text-vs text-gray-400'>
            See 12 others have upcoming birthdays
          </p>
        </div>
      </div>
    </div>
  );
}
