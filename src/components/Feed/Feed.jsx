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

      {/* Feed */}
      <div className='sm:pl-6 sm:pr-6 xl:pr-0 sm:pt-6 sm:pb-10 flex-1 bg-zinc-50 rounded-xl text-gray-500'>
        {/* Story Section - Only Small Screen */}
        <StoryCard position='topFeed' />

        {/* Post Publish Card */}
        <PublishPostCard />

        {/* Posts */}
        {postsData.map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </div>

      {/* Feed Sidebar */}
      <FeedSidebar />

      {/*Right  Sidebar */}
      <RightSidebar />
    </div>
  );
}
