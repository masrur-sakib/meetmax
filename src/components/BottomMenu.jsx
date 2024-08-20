'use client';

import { useState } from 'react';
import { bottomMenuData } from '@/data/bottomMenuData';
import BottomMenuEl from './BottomMenuEl';
import { useSession } from 'next-auth/react';

export default function BottomMenu() {
  const { data: session } = useSession();

  const [selected, setSelected] = useState('Feed');
  return (
    <div
      className={`${
        session ? '' : 'hidden'
      } sm:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around z-50`}
    >
      {bottomMenuData.map((data) => (
        <BottomMenuEl key={data.id} data={data} selected={selected} />
      ))}
    </div>
  );
}
