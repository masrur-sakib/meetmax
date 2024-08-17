'use client';

import { leftSidebarData } from '@/data/leftSidebarData';
import LeftSidebarEl from './LeftSdebarEl';
import { useState } from 'react';

export default function LeftSidebar() {
  const [selected, setSelected] = useState('Feed');
  return (
    <div className='hidden md:block w-1/3 lg:w-1/5'>
      {leftSidebarData.map((data) => (
        <LeftSidebarEl key={data.name} data={data} selected={selected} />
      ))}
    </div>
  );
}
