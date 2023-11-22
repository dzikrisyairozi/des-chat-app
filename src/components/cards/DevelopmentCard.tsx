import * as React from 'react';

import clsxm from '@/lib/clsxm';

import SimpleCard from '@/components/cards/SimpleCard';
import Typography from '@/components/typography/Typography';

type DevelopmentCardProps = React.ComponentPropsWithoutRef<'div'>;

export default function DevelopmentCard({
  className,
  children,
  ...rest
}: DevelopmentCardProps) {
  const envFlag = process.env.NEXT_PUBLIC_SHOW_DEVELOPMENT_CARD === 'true';
  const shouldShow = envFlag || process.env.NODE_ENV !== 'production';

  return shouldShow ? (
    <SimpleCard
      className={clsxm([
        'bg-base-50 border-2 border-dashed border-base-500',
        'pt-2',
        className,
      ])}
      size='sm'
      {...rest}
    >
      <Typography className='mb-2 text-center text-base-700' variant='c1'>
        Development Only
      </Typography>
      {children}
    </SimpleCard>
  ) : null;
}
