import * as React from 'react';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import CollapsibleText from '@/components/CollapsibleText';
import NextImage from '@/components/NextImage';
import StarRating from '@/components/rating/StarRating';
import Typography from '@/components/typography/Typography';

type ReviewCardProps = {
  /** Reviewer's username */
  username: string;
  /** Reviewer's avatar */
  avatar?: string | IconType;
  /** Reviewer's Description */
  description: string;
  /** Reviewer's rating */
  rating: number;
  /** Date Created */
  date: Date;
} & React.ComponentPropsWithoutRef<'div'>;

export default function ReviewCard({
  username,
  avatar: Avatar = FiUser,
  description,
  rating,
  date,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={clsxm(
        'h-fit min-w-[340px] rounded-xl border-2 border-primary-600',
        'flex items-start gap-4 px-4 py-3 md:gap-4 md:px-5 md:py-4',
        'overflow-auto',
        className
      )}
    >
      <div
        className={clsxm(
          'flex h-8 w-8 items-center justify-center md:h-14 md:w-14',
          'relative flex-shrink-0 rounded-full outline-none',
          typeof Avatar === 'string' ? '' : 'bg-white'
        )}
      >
        {typeof Avatar === 'string' ? (
          <NextImage
            src={Avatar as string}
            alt={`${username} avatar`}
            imgClassName='rounded-full object-cover'
            layout='fill'
            className='rounded-full'
          />
        ) : (
          <Avatar className='rounded-full text-typo' size={36} />
        )}
      </div>
      <div>
        <Typography variant='h4' color='primary'>
          {username}
        </Typography>
        <StarRating rating={rating} withText date={date} className='mt-1' />
        <CollapsibleText className='mt-2' clampNumber={3}>
          {description}
        </CollapsibleText>
      </div>
    </div>
  );
}
