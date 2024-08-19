'use client';

import Image from 'next/image';

export default function Comment({ data }) {
  return (
    <div className='mt-4'>
      <div className='flex justify-between items-start space-x-2'>
        {/* Comment Avatar */}
        <Image
          className='w-8 h-8 rounded-full'
          src={data.avatar}
          alt='Avatar'
          width={0}
          height={0}
          unoptimized
        />

        <div className='flex-1'>
          {/* Comment Body */}
          <div className='p-2 bg-gray-100 rounded-xl'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col justify-center items-start'>
                <p className='text-sm cursor-pointer'>{data.postedBy}</p>
                <p className='text-vs text-gray-400'>
                  <span className='mr-2'>{data.postTime}</span>ago
                </p>
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
            <p className='mt-2 text-xs sm:text-sm text-gray-500'>
              {data.description}
            </p>
          </div>
          {/* Comment Reaction */}
          <div className='mt-1 ml-4 flex justify-start items-center space-x-4 text-xs 2xl:text-sm'>
            <p className='cursor-pointer'>Like</p>
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
