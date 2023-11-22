import clsx from 'clsx';
import * as React from 'react';

import Typography from '@/components/typography/Typography';

type StarRatingProps = {
  /** Rating Value */
  rating: number;
  maxRating?: number;
  withText?: boolean;

  /** Date Created */
  date?: Date;
} & React.ComponentPropsWithoutRef<'div'>;

export default function StarRating({
  rating,
  maxRating = 10,
  withText = false,
  date,
  className,
}: StarRatingProps) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col flex-wrap gap-1 md:flex-row md:items-center md:gap-2'
      )}
    >
      <div className='star-rating'>
        <span style={{ width: rating * maxRating }}></span>
      </div>
      <div className='flex items-center gap-1'>
        {withText && (
          <Typography variant='b3' color='tertiary'>
            {rating} / {maxRating}
          </Typography>
        )}
        {date && (
          <>
            <Typography variant='b3' color='tertiary'>
              |
            </Typography>
            <Typography variant='b3' color='tertiary'>
              {date.toISOString().split('T')[0]}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
}
