'use client';

import Image from 'next/image';

export default function Reply({ reply, comment }) {
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between items-start space-x-2'>
        {/* Comment Avatar */}
        <Image
          className='w-8 h-8 rounded-full'
          src={reply.avatar}
          alt='Avatar'
          width={0}
          height={0}
          unoptimized
        />

        <div className='flex-1'>
          {/* Reply Body */}
          <div className='p-2 bg-gray-100 rounded-xl'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col justify-center items-start'>
                <p className='text-sm cursor-pointer'>{reply.postedBy}</p>
                <p className='text-vs text-gray-400'>
                  <span className='mr-2'>{reply.postTime}</span>ago
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

            {/* Parent Comment */}
            <div className='mt-2 p-3 bg-gray-200 rounded-lg'>
              <p className='text-xs text-gray-500'>
                Replying to {comment.postedBy}
              </p>
              <p className='mt-1 text-vs text-gray-400'>
                {comment.description}
              </p>
            </div>
            <p className='mt-2 text-xs sm:text-sm text-gray-400'>
              {reply.description}
            </p>
          </div>
          {/* Reply Reaction */}
          <div className='mt-1 ml-4 flex justify-start items-center space-x-4 text-xs 2xl:text-sm'>
            <p className='cursor-pointer'>Like</p>
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
