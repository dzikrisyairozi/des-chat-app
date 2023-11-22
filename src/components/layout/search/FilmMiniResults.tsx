import * as React from 'react';
import { IoMdStar } from 'react-icons/io';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type FilmMiniResultsProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function FilmMiniResults({
  className,
  ...rest
}: FilmMiniResultsProps) {
  return (
    <UnstyledLink
      href='#'
      className={clsxm(
        'mx-auto flex overflow-hidden rounded-md bg-base-800 hover:bg-base-900',
        className
      )}
      {...rest}
    >
      <NextImage
        className='flex-shrink-0'
        alt='film poster'
        width={116}
        height={180}
        src='/images/vert-poster-1.jpg'
      />
      <div className='p-[6px] sm:p-2'>
        <Typography as='h2' variant='s2' className='line-clamp-2'>
          Janji Sirna asdas asdfvwe qwdqwf sdmk ksmdkama kasmdkamvkvm km
          kamsdkamskvcam kam kcmdskm
        </Typography>
        <div className='flex flex-wrap items-center gap-x-1'>
          <Typography
            variant='c1'
            color='secondary'
            className='inline-flex capitalize'
          >
            Drama, Romance
          </Typography>
          <span className='text-xs text-primary-500'>|</span>
          <div className='space-x-1 [&>*]:inline-flex [&>*]:items-center [&>*]:gap-x-[0.125rem]'>
            {/* <div>
              <HiEye className='h-3 w-3 text-secondary-300' />
              <Typography variant='b2' color='secondary'>
                200k
              </Typography>
            </div> */}
            <div>
              <IoMdStar className='h-3 w-3 text-primary-500' />
              <Typography variant='c1' color='primary'>
                9.5
              </Typography>
            </div>
            {/* <div>
              <AiFillClockCircle className='h-3 w-3 text-secondary-300' />
              <Typography variant='b2' color='secondary'>
                1 j 30 m
              </Typography>
            </div> */}
          </div>
        </div>
        <Typography
          variant='c1'
          color='secondary'
          className='line-clamp-3 text-[0.625rem] sm:text-[0.725rem]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia
          porro consequuntur a assumenda accusantium iure dicta inventore beatae
          dolore numquam sit, maiores quidem, eveniet officiis expedita cum quo
          ea quas quam. Deserunt libero quidem, enim commodi vel cupiditate odit
          dolorum accusantium dignissimos doloribus molestias quia, saepe qui,
          aliquid voluptatem.
        </Typography>
      </div>
    </UnstyledLink>
  );
}
