import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

import DefaultAvatar from '~/svg/DefaultAvatar.svg';

type CreatorMiniResultsProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function CreatorMiniResults({
  className,
  ...rest
}: CreatorMiniResultsProps) {
  return (
    <UnstyledLink
      href='/profile/12'
      className={clsxm(
        'block flex items-center gap-x-2 space-x-2 rounded-md bg-base-800 p-3 hover:bg-base-900',
        className
      )}
      {...rest}
    >
      <div className='flex-shrink-0'>
        <DefaultAvatar className='h-[3.125rem] w-[3.125rem]' />
      </div>
      <div>
        <Typography variant='b2' className='capitalize'>
          Lorem ipsum dolor.
        </Typography>
        <Typography variant='b3' color='secondary'>
          @loremIpsum_3
        </Typography>
      </div>
    </UnstyledLink>
  );
}
