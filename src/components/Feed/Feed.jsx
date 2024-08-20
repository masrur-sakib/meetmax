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
import UserCardBirthday from '../UserCardBirthday';
import { usersData } from '@/data/usersData';

export default function Feed() {
  const eventSectionInsertPosition = 1;
  const birthdaySectionInsertPosition = 2;

  // Let's Assume, Today date = 2024-08-20
  const currentDate = new Date('2024-08-20');
  const birthdayUser = usersData.find((user) => {
    if (user.birthdayDate !== '') {
      const dbDate = new Date(user.birthdayDate);
      return dbDate.getTime() === currentDate.getTime();
    }
  });
  return (
    <div className='flex items-start justify-start'>
      {/*Left  Sidebar */}
      <LeftSidebar />

      {/* Feed */}
      <div className='sm:pl-6 sm:pr-6 xl:pr-0 sm:pt-6 pb-6 flex-1 bg-zinc-50 rounded-xl text-gray-500'>
        {/* Story Section - Only Small Screen */}
        <StoryCard position='topFeed' />

        {/* Post Publish Card */}
        <PublishPostCard />

        {/* Posts */}
        {postsData.map((data, index) => (
          <>
            <Post key={data.id} data={data} />

            {/* Event Card between Posts - Small Screen */}
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

            {/* Birthday Card between Posts - Small Screen */}
            {index === birthdaySectionInsertPosition - 1 && (
              <div className='mt-6 xs:hidden bg-white rounded-lg'>
                <div className='p-2 flex justify-between items-center border-b border-gray-200'>
                  <p className='font-semibold text-sm'>Birthdays</p>
                  <p className='text-blue-500 text-xs cursor-pointer'>
                    See All
                  </p>
                </div>
                <UserCardBirthday data={birthdayUser} />
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
