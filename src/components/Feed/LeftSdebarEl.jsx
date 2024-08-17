'use client';

import Image from 'next/image';

export default function LeftSidebarEl({ data, selected }) {
  return (
    <div
      className={`${
        selected === data.name
          ? 'bg-slate-500 text-white hover:bg-slate-500'
          : ''
      } mt-2 px-4 py-3 flex justify-content items-center space-x-4 text-lg rounded-lg cursor-pointer hover:bg-gray-100`}
      onClick={data.name === 'Logout' ? () => console.log('logout') : null}
    >
      <Image src={data.src} alt={data.name} width={16} height={16} />
      <p className='text-sm'>{data.name}</p>
      <p>
        {data.alertNumbers > 0 ? (
          <span className='px-1.5 py-0.5 rounded-xl bg-red-400 text-xs text-white'>
            {data.alertNumbers}
          </span>
        ) : null}
      </p>
    </div>
  );
}
