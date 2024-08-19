'use client';

import Image from 'next/image';

export default function PostImage({ images }) {
  return (
    <div className='mt-4 max-h-fit'>
      {images.length > 1 ? (
        <div className='h-full flex justify-center items-stretch space-x-2 xl:space-x-3'>
          <div className='w-1/2 max-h-fit'>
            <Image
              className='w-full h-full object-contain'
              src={images[0]}
              alt='post-image'
              width={0}
              height={0}
              unoptimized
            />
          </div>

          <div className='w-1/2 max-h-fit flex flex-col justify-between space-y-2'>
            <div className='h-[calc(50%-0.25rem)]'>
              <Image
                className='w-full h-full object-contain'
                src={images[1]}
                alt='post-image'
                width={0}
                height={0}
                unoptimized
              />
            </div>
            <div className='h-[calc(50%-0.25rem)]'>
              <Image
                className='w-full h-full object-contain'
                src={images[2]}
                alt='post-image'
                width={0}
                height={0}
                unoptimized
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <Image
            className='w-auto max-h-fit object-contain'
            src={images[0]}
            alt='post-image'
            width={0}
            height={0}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
