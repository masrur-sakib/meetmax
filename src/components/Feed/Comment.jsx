'use client';

import Image from 'next/image';
import Reply from './Reply';

export default function Comment({ comment }) {
  return (
    <div className='mt-4'>
      <div className='flex justify-between items-start space-x-2'>
        {/* Comment Avatar */}
        <Image
          className='w-8 h-8 rounded-full'
          src={comment.avatar}
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
                <p className='text-sm cursor-pointer'>{comment.postedBy}</p>
                <p className='text-vs text-gray-400'>
                  <span className='mr-2'>{comment.postTime}</span>ago
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
            <p className='mt-2 text-xs 2xl:text-sm font-normal text-gray-500'>
              {comment.description}
            </p>
          </div>
          {/* Comment Reaction */}
          <div className='mt-1 ml-4 flex justify-start items-center space-x-4 text-xs 2xl:text-sm'>
            <p className='cursor-pointer'>Like</p>
            <p className='cursor-pointer'>Reply</p>
          </div>
        </div>
      </div>

      {/* Comment Replies */}
      {comment.replies &&
        comment.replies.map((reply) => (
          <Reply key={reply.id} reply={reply} comment={comment} />
        ))}
    </div>
  );
}
