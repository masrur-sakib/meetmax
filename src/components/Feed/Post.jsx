'use client';

import Image from 'next/image';
import PostImage from './PostImage';

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

      {/* Description Secton */}
      {data.description && (
        <p className='mt-4 text-gray-500 text-vs sm:text-sm 2xl:text-base'>
          {data.description}
        </p>
      )}

      {/* Image Section */}
      {data.images && <PostImage images={data.images} />}

      {/* Post Info Section */}
      <div className='mt-4 flex justify-between items-center'>
        <Image
          className='h-4 w-14'
          src='/images/seenBy12.png'
          alt='PastSeen'
          width={0}
          height={0}
          unoptimized
        />
        <div className='text-xs text-gray-400 flex justify-end items-center space-x-4'>
          <p>
            <span>{data.commentsCount}</span> Comments
          </p>
          <p>
            <span>{data.shareCount}</span> Share
          </p>
        </div>
      </div>

      {/* Post Reaction Section */}
    </div>
  );
}
