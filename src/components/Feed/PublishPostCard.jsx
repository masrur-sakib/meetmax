'use client';

import Image from 'next/image';

export default function PublishPostCard() {
  return (
    <div className='mt-4 sm:mt-0 px-4 py-6 bg-white'>
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
          className='p-4 w-full h-full bg-gray-50 outline-none placeholder:text-gray-400 text-sm rounded-md cursor-text'
          name='PublishPostInput'
          type='search'
          placeholder={`What's happenning?`}
          required
        />
      </div>
      <div className='mt-6 mx-2 flex justify-between items-center space-x-2 sm:space-x-4'>
        <div className='flex justify-center items-center  space-x-6 xl:space-x-4 2xl:space-x-6 text-sm lg:text-xs 2xl:text-sm'>
          <div className='flex justify-center items-center space-x-2 2xl:space-x-3 cursor-pointer'>
            <Image
              className='w-4 h-4'
              src='/icons/VideoCamera.png'
              alt='VideoCamera'
              width={0}
              height={0}
              unoptimized
            />
            <p className='flex justify-center items-center space-x-1'>
              Live <span className='hidden sm:block'>Video</span>
            </p>
          </div>
          <div className='flex justify-center items-center space-x-2 2xl:space-x-3 cursor-pointer'>
            <Image
              className='w-4 h-4'
              src='/icons/Picture.png'
              alt='Picture'
              width={0}
              height={0}
              unoptimized
            />
            <p className='flex justify-center items-center t'>
              Photo<span className='hidden sm:block'>/Video</span>
            </p>
          </div>
          <div className='flex justify-center items-center space-x-2 2xl:space-x-3 cursor-pointer'>
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
