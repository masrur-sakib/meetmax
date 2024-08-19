'use client';

import Image from 'next/image';

export default function PostImage({ images }) {
  console.log(images[0]);
  return (
    <div className='mt-4 max-h-96'>
      {images.length > 1 ? (
        <div>Multiple Images</div>
      ) : (
        <div className='flex justify-center item-center'>
          <Image
            className='w-auto h-full max-h-96'
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
