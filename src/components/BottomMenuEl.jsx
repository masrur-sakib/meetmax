'use client';

import { useUserStore } from '@/store/store';
import Image from 'next/image';

export default function BottomMenuEl({ data, selected }) {
  const setUser = useUserStore((state) => state.setUser);
  return (
    <div
      className={`${
        selected === data.name
          ? 'border-b-4 border-gray-500'
          : 'border-b-4 border-white'
      } mx-2 mb-1 pb-2 pt-4 flex flex-col justify-center items-center space-y-2 text-xs cursor-pointer`}
    >
      <div className='relative'>
        <Image src={data.src} alt={data.name} width={20} height={20} />
        {data.alertNumbers > 0 && (
          <span className='absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-red-400 text-[10px] text-white min-w-[18px] h-[18px] flex items-center justify-center'>
            {data.alertNumbers}
          </span>
        )}
      </div>
      <p
        className='text-xs'
        onClick={() => (data.name === 'Settings' ? setUser() : null)}
      >
        {data.name}
      </p>
    </div>
  );
}
