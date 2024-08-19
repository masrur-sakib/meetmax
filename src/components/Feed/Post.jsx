'use client';

import Image from 'next/image';
import PostImage from './PostImage';
import PostComment from './PostComment';
import Comment from './Comment';

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
            <p className='text-sm cursor-pointer'>{data.postedBy}</p>
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
      <div className='mt-2 px-1 py-2 text-xs sm:text-sm border-y border-gray-200 flex justify-between items-center'>
        {/* Like */}
        <div className='flex justify-start items-center space-x-2 cursor-pointer'>
          <Image
            className='h-4 w-4'
            src={`${
              data.likesCount > 0 ? '/icons/Heart-2.png' : '/icons/Heart.png'
            }`}
            alt='LikeIcon'
            width={0}
            height={0}
            unoptimized
          />
          <span>Like</span>
        </div>
        {/* Comment */}
        <div className='flex justify-start items-center space-x-2 cursor-pointer'>
          <Image
            className='h-4 w-4'
            src='/icons/Comment.png'
            alt='LikeIcon'
            width={0}
            height={0}
            unoptimized
          />
          <span>Comments</span>
        </div>
        {/* Share */}
        <div className='flex justify-start items-center space-x-2 cursor-pointer'>
          <Image
            className='h-4 w-4'
            src='/icons/Share.png'
            alt='LikeIcon'
            width={0}
            height={0}
            unoptimized
          />
          <span>Share</span>
        </div>
      </div>

      {/* Post Comment Section */}
      <PostComment data={data.comments} />

      {/* Comments & Replies */}
      {data.comments &&
        data.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

      {/* Show More Comments */}
      {data.comments.length > 0 ? (
        <p className='mt-4 ml-2 text-sm text-gray-400 cursor-pointer'>
          See 1 more comment
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
