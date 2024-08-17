'use client';

import Image from 'next/image';

export default function LeftSidebarEl({ data, selected }) {
  return (
    <div
      className={`${
        selected === data.name
          ? 'bg-slate-500 text-white hover:bg-slate-500'
          : ''
      } mt-2 p-4 flex justify-content items-center space-x-4 text-lg rounded-lg cursor-pointer hover:bg-gray-100`}
    >
      <Image src={data.src} alt={data.name} width={20} height={20} />
      <p>{data.name}</p>
      <p>
        {data.alertNumbers > 0 ? (
          <span className='px-2 py-1 rounded-xl bg-red-500 text-sm text-white'>
            {data.alertNumbers}
          </span>
        ) : null}
      </p>
    </div>
  );
}
