import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ReviewCard from '@/components/shared/ReviewCard';
import Typography from '@/components/typography/Typography';

import { REVIEW_DATA } from '@/pages/sandbox/constant/review';

export default function ReviewCardPage() {
  return (
    <Layout>
      <Seo templateTitle='Review Card' />

      <section className=''>
        <div className='layout min-h-screen py-20'>
          <Typography variant='h2' className='mb-10'>
            Review Card
          </Typography>

          <Typography variant='h3' className='mb-2'>
            No Avatar
          </Typography>
          <ReviewCard
            username='Filin Movie'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            rating={4}
            date={new Date()}
          />

          <Typography variant='h3' className='mb-2 mt-10'>
            With Avatar
          </Typography>
          <ReviewCard
            username='Filin Movie'
            avatar='https://i.pravatar.cc/300'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            rating={3.5}
            date={new Date()}
          />

          <Typography variant='h3' className='mb-2 mt-10'>
            Multiple Review 3 Column
          </Typography>
          <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
            {REVIEW_DATA.map((item, index) => (
              <ReviewCard
                key={index}
                username={item.username}
                avatar={item.avatar}
                description={item.description}
                rating={item.rating}
                date={item.date}
              />
            ))}
          </div>
          <Typography variant='h3' className='mb-2 mt-10'>
            Multiple Review 2 Column
          </Typography>
          <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-2'>
            {REVIEW_DATA.map((item, index) => (
              <ReviewCard
                key={index}
                username={item.username}
                avatar={item.avatar}
                description={item.description}
                rating={item.rating}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
