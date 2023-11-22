import * as React from 'react';

import PosterCard from '@/components/cards/PromotionPosterCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const PROMOTION_POSTER_CARD_SRC = [
  {
    src: '/images/promotion-poster-card.png',
    alt: 'Promotion Poster Card 1',
  },
  {
    src: '/images/promotion-poster-card.png',
    alt: 'Promotion Poster Card 1',
  },
];

export default function PosterCardPage() {
  return (
    <Layout>
      <Seo templateTitle='Poster Card' />

      <main>
        <section className=''>
          <div className='layout min-h-main py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Poster Card
            </Typography>
            <div className='mt-8'>
              <div className='flex flex-wrap gap-8'>
                {PROMOTION_POSTER_CARD_SRC.map(({ src, alt }) => (
                  <PosterCard key={src} src={src} alt={alt} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
