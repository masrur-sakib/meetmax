'use client';

import { useState } from 'react';
import { bottomMenuData } from '@/data/bottomMenuData';
import BottomMenuEl from './BottomMenuEl';
import { useUserStore } from '@/store/store';

export default function BottomMenu() {
  const user = useUserStore((state) => state.user);
  const [selected, setSelected] = useState('Feed');
  return (
    <div
      className={`${
        user ? '' : 'hidden'
      } sm:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around z-50`}
    >
      {bottomMenuData.map((data) => (
        <BottomMenuEl key={data.id} data={data} selected={selected} />
      ))}
    </div>
  );
}
