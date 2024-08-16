'use client';

export default function Feed() {
  return (
    <div className='mx-auto p-4 lg:px-8 flex items-center justify-between space-x-4'>
      {/*Left  Sidebar */}
      <div className='w-1/5'>Sidebar</div>

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
          <div className='w-1/3'>Feed Sidebar</div>
        </div>
      </div>

      {/*Right  Sidebar */}
      <div className='w-1/5'>Right Sidebar</div>
    </div>
  );
}
