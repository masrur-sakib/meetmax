'use client';

import Image from 'next/image';

export default function PublishPostCard() {
  return (
    <div className='px-4 py-6 bg-white'>
      <div className='h-10 flex justify-between items-center space-x-4'>
        <Image
          className='w-10 h-full rounded-full'
          src='/users/SalehAhmed.png'
          alt='SalehAhmed'
          width={0}
          height={0}
          unoptimized
        />
        <input
          id='PublishPostInput'
          className='p-4 w-full h-full bg-gray-50 outline-none placeholder:text-gray-400 text-sm rounded-md cursor-pointer sm:cursor-text'
          name='PublishPostInput'
          type='search'
          placeholder={`What's happenning?`}
          required
        />
      </div>
      <div className='mt-6 mx-2 text-xs flex justify-between items-center space-x-2 sm:space-x-4'>
        <div className='flex justify-center items-center space-x-4 sm:space-x-6'>
          <div className='flex justify-center items-center space-x-2 sm:space-x-3 cursor-pointer'>
            <Image
              className='w-4 h-4'
              src='/icons/VideoCamera.png'
              alt='VideoCamera'
              width={0}
              height={0}
              unoptimized
            />
            <p className='flex justify-center items-center space-x-1'>
              <span>Live</span> <span className='hidden sm:block'>Video</span>
            </p>
          </div>
          <div className='flex justify-center items-center space-x-2 sm:space-x-3 cursor-pointer'>
            <Image
              className='w-4 h-4'
              src='/icons/Picture.png'
              alt='Picture'
              width={0}
              height={0}
              unoptimized
            />
            <p className='flex justify-center items-center'>
              Photo<span className='hidden sm:block'>/Video</span>
            </p>
          </div>
          <div className='flex justify-center items-center space-x-2 sm:space-x-3 cursor-pointer'>
            <Image
              className='w-4 h-4'
              src='/icons/Smile.png'
              alt='Smile'
              width={0}
              height={0}
              unoptimized
            />
            <p>Feeling</p>
          </div>
        </div>
        <button
          type='button'
          className='px-4 py-1 sm:px-7 sm:py-2 text-sm text-gray-100 outline-none rounded-lg border border-gray-200 bg-blue-500 hover:bg-blue-600'
        >
          Post
        </button>
      </div>
    </div>
  );
}
