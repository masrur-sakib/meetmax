'use client';

import Image from 'next/image';

export default function PostComment({ data }) {
  return (
    <div className='mt-4'>
      {/* Post Comment Section */}
      <div className='h-9 flex justify-between items-center space-x-2'>
        <Image
          className='w-8 h-8 rounded-full'
          src='/users/SalehAhmed.png'
          alt='SalehAhmed'
          width={0}
          height={0}
          unoptimized
        />
        <div className='flex-1 px-3 py-2 h-full bg-gray-50 round-lg'>
          <div className='h-full flex justify-between items-center space-x-2.5'>
            <input
              id='PublishPostInput'
              className='flex-1 h-full bg-gray-50 outline-none placeholder:text-gray-400 text-xs rounded-md cursor-text'
              name='PublishPostInput'
              type='search'
              placeholder={`Write a comment`}
              required
            />
            <Image
              className='w-3 h-3 cursor-pointer'
              src='/icons/Gif.png'
              alt='GifIcon'
              width={0}
              height={0}
              unoptimized
            />
            <Image
              className='w-3 h-3 cursor-pointer'
              src='/icons/Picture.png'
              alt='PictureIcon'
              width={0}
              height={0}
              unoptimized
            />
            <Image
              className='w-3 h-3 cursor-pointer'
              src='/icons/Smile.png'
              alt='SmileIcon'
              width={0}
              height={0}
              unoptimized
            />
          </div>
        </div>
        <div>
          <Image
            className='p-2 h-full w-8 h-full bg-blue-50 cursor-pointer'
            src='/icons/send.png'
            alt='send-icon'
            width={0}
            height={0}
            unoptimized
          />
        </div>
      </div>

      {/* Comments & Replies */}
    </div>
  );
}
