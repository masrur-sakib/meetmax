'use client';

import { postsData } from '@/data/postsData';
import FeedSidebar from './FeedSidebar';
import LeftSidebar from './LeftSidebar';
import Post from './Post';
import PublishPostCard from './PublishPostCard';
import RightSidebar from './RightSidebar';
import StoryCard from '../StoryCard';
import EventCard from '../EventCard';
import Image from 'next/image';
import { eventsData } from '@/data/eventsData';

export default function Feed() {
  const eventSectionInsertPosition = 1;

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
        {postsData.map((data, index) => (
          <>
            <Post key={data.id} data={data} />

            {index === eventSectionInsertPosition - 1 && (
              <div className='mt-6 xs:hidden bg-white rounded-lg'>
                <div className='p-2 flex justify-between items-center border-b border-gray-200'>
                  <p className='font-semibold text-sm'>Recent Event</p>
                  <Image
                    src='/icons/ThreeDots.png'
                    className='cursor-pointer'
                    alt='ThreeDotsIcon'
                    width={16}
                    height={8}
                    unoptimized
                  />
                </div>

                {/* Event Card */}
                {eventsData.map((data) => (
                  <EventCard key={data.id} data={data} />
                ))}
              </div>
            )}
          </>
        ))}
      </div>

      {/* Feed Sidebar */}
      <FeedSidebar />

      {/*Right  Sidebar */}
      <RightSidebar />
    </div>
  );
}
