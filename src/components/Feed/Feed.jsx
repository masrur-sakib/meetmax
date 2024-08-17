'use client';

import LeftSidebar from './LeftSidebar';

export default function Feed() {
  return (
    <div className='mx-auto p-4 lg:px-8 flex items-start justify-between space-x-6'>
      {/*Left  Sidebar */}
      <LeftSidebar />

      {/* Feed with Sidebar */}
      <div className='flex-1 bg-gray-50 rounded-lg'>
        <div className='p-6 flex justify-between items-center'>
          {/* Feed */}
          <div className='flex-1'>
            <div className='px-6 bg-white'>Post Card</div>
            <div className='mt-8 px-6 bg-white'>Post Card</div>
            <div className='mt-8 px-6 bg-white'>Post Card</div>
          </div>

          {/* Feed Sidebar */}
          <div className='hidden lg:block w-1/3'>Feed Sidebar</div>
        </div>
      </div>

      {/*Right  Sidebar */}
      <div className='hidden lg:block w-1/5'>Right Sidebar</div>
    </div>
  );
}
