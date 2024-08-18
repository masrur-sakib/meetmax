'use client';

import { postsData } from '@/data/postsData';
import FeedSidebar from './FeedSidebar';
import LeftSidebar from './LeftSidebar';
import Post from './Post';
import PublishPostCard from './PublishPostCard';
import RightSidebar from './RightSidebar';

export default function Feed() {
  return (
    <div className='flex items-start justify-start'>
      {/*Left  Sidebar */}
      <LeftSidebar />

      {/* Feed with Sidebar */}
      <div className='flex-1 bg-zinc-50 rounded-xl'>
        <div className='p-6 flex justify-between items-start space-x-4 xl:space-x-8'>
          {/* Feed */}
          <div className='flex-1 text-gray-500'>
            <PublishPostCard />
            {postsData.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      {/* Feed Sidebar */}
      <FeedSidebar />

      {/*Right  Sidebar */}
      <RightSidebar />
    </div>
  );
}
