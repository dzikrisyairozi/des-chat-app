import * as React from 'react';
import Balancer from 'react-wrap-balancer';

import clsxm from '@/lib/clsxm';

const alertVariant = ['primary', 'danger', 'warning', 'success'] as const;
type AlertVariant = (typeof alertVariant)[number];

type AlertProps = {
  variant?: AlertVariant;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Alert({
  variant = 'primary',
  className,
  children,
  ...rest
}: AlertProps) {
  return (
    <div
      className={clsxm([
        'w-full rounded-xl p-3',
        'text-center',
        'text-lg font-semibold',
        [
          variant === 'primary' && ['bg-base-200 text-base-1000'],
          variant === 'warning' && ['bg-warning-200 text-warning-1000'],
          variant === 'danger' && ['bg-danger-200 text-danger-1000'],
          variant === 'success' && ['bg-success-200 text-success-1000'],
        ],
        className,
      ])}
      {...rest}
    >
      <Balancer>{children}</Balancer>
    </div>
  );
}
