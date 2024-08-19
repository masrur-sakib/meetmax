'use client';

import Image from 'next/image';

export default function PostImage({ images }) {
  return (
    // Parent Section
    <div className='mt-4 max-h-96'>
      {images.length > 1 ? (
        <div className='h-full flex justify-center items-stretch space-x-3'>
          {/* Section 1 */}
          <div className='w-1/2'>
            <Image
              className='w-full h-full object-cover'
              src={images[0]}
              alt='post-image'
              width={0}
              height={0}
              unoptimized
            />
          </div>

          {/* Section 2 */}
          <div className='w-1/2 flex flex-col justify-between space-y-3'>
            <div className='h-[calc(50%-0.25rem)]'>
              <Image
                className='w-full h-full object-cover'
                src={images[1]}
                alt='post-image'
                width={0}
                height={0}
                unoptimized
              />
            </div>
            <div className='h-[calc(50%-0.25rem)]'>
              <Image
                className='w-full h-full object-cover'
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
            className='w-auto max-h-96 object-contain'
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
