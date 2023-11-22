import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export type BannerProps = {
  link: string;
  horizontal_poster_url: string;
  title: string;
  main_genre: string;
  release_time: string;
  description: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Banner({ BannerData }: { BannerData: BannerProps }) {
  return (
    <>
      <UnstyledLink
        href={BannerData.link}
        className='relative flex w-full flex-col sm:flex-row sm:shadow-lg'
      >
        <div className='relative flex w-full shadow-lg sm:w-1/2 sm:shadow-none'>
          <div className='absolute h-full w-full from-base-900 via-transparent to-transparent sm:bg-gradient-to-l' />
          <NextImage
            src={BannerData.horizontal_poster_url}
            alt='Hero'
            width={1280}
            height={720}
            imgClassName='h-[12.5rem] sm:h-[20.6rem] md:h-[26.8rem] object-cover'
          />
          <div className='absolute bottom-0 flex w-full flex-col bg-gradient-to-t from-base-1000 via-base-1000/80 to-transparent pt-12 sm:hidden'>
            <div className='BannerDatas-end ml-2 flex justify-start gap-3'>
              <Typography variant='h4' color='primary'>
                {BannerData.title}
              </Typography>
              <div className='BannerDatas-center flex gap-1'>
                <Typography variant='h6'>{BannerData.main_genre}</Typography>
                <Typography as='span' variant='h5' color='primary'>
                  •
                </Typography>
                <Typography variant='h6'>{BannerData.release_time}</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='BannerDatas-start hidden w-full flex-col justify-center gap-1 bg-gradient-to-r from-base-900 via-base-900/30 to-transparent px-10 py-5 sm:flex'>
          <Typography variant='d2' color='primary'>
            {BannerData.title}
          </Typography>
          <div className='flex gap-1'>
            <Typography variant='h5'>{BannerData.main_genre}</Typography>
            <Typography as='span' variant='h5' color='primary'>
              •
            </Typography>
            <Typography variant='h5'>{BannerData.release_time}</Typography>
          </div>
          <Typography
            variant='s3'
            color='secondary'
            className='md:s2 mt-2 line-clamp-4 text-justify md:line-clamp-5'
          >
            {BannerData.description}
          </Typography>
        </div>
      </UnstyledLink>
      <div className='relative bottom-6 flex w-full flex-col bg-gradient-to-b from-transparent via-base-1000 to-base-1000 pt-12 sm:block' />
    </>
  );
}
