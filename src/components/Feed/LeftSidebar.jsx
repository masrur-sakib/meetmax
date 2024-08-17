'use client';

import { leftSidebarData } from '@/data/leftSidebarData';
import LeftSidebarEl from './LeftSdebarEl';
import { useState } from 'react';

export default function LeftSidebar() {
  const [selected, setSelected] = useState('Feed');
  return (
    <div className='sticky top-20 h-[calc(100vh-spacing.20)] overflow-y-auto hidden md:block w-1/3 lg:w-1/5'>
      {leftSidebarData.map((data) => (
        <LeftSidebarEl key={data.name} data={data} selected={selected} />
      ))}
    </div>
  );
}
