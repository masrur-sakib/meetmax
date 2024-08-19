'use client';

import { postsData } from '@/data/postsData';
import FeedSidebar from './FeedSidebar';
import LeftSidebar from './LeftSidebar';
import Post from './Post';
import PublishPostCard from './PublishPostCard';
import RightSidebar from './RightSidebar';
import StoryCard from '../StoryCard';

export default function Feed() {
  return (
    <div className='flex items-start justify-start'>
      {/*Left  Sidebar */}
      <LeftSidebar />

      {/* Feed with Sidebar */}
      <div className='flex-1 bg-zinc-50 rounded-xl'>
        <div className='sm:px-6 sm:pt-6 sm:pb-10 flex justify-between items-start space-x-4 xl:space-x-8'>
          {/* Feed */}
          <div className='flex-1 text-gray-500'>
            {/* Story Section - Only Small Screen */}
            <StoryCard position='topFeed' />

            <PublishPostCard />

            {postsData.map((data) => (
              <Post key={data.id} data={data} />
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
