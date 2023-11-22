import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

const alertVariant = ['primary', 'danger', 'warning', 'success'] as const;
type AlertVariant = (typeof alertVariant)[number];

type TypographyAlertProps = {
  variant?: AlertVariant;
  leftIcon?: IconType;
  leftIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TypographyAlert({
  variant = 'primary',
  className,
  children,
  leftIcon: LeftIcon,
  leftIconClassName,
  ...rest
}: TypographyAlertProps) {
  return (
    <div
      className={clsxm(
        'prose prose-sm max-w-none',
        'rounded-lg px-8 py-4 shadow-sm',
        'prose-li:my-[0.1em] prose-li:marker:text-inherit',
        [
          variant === 'primary' && ['bg-base-200 text-base-1000'],
          variant === 'warning' && ['bg-warning-200 text-warning-1000'],
          variant === 'danger' && ['bg-danger-200 text-danger-1000'],
          variant === 'success' && ['bg-success-200 text-success-1000'],
        ],
        'flex gap-6 align-top',
        className
      )}
      {...rest}
    >
      {LeftIcon && (
        <div>
          <LeftIcon
            size='1.6em'
            className={clsxm(
              'mt-[0.325rem] text-lg',
              [
                variant === 'primary' && ['text-base-900'],
                variant === 'warning' && ['text-warning-900'],
                variant === 'danger' && ['text-danger-900'],
                variant === 'success' && ['text-success-900'],
              ],
              leftIconClassName
            )}
          />
        </div>
      )}

      <div
        // margin based on typography default margin
        className='-my-[1.1428571em]'
      >
        {children}
      </div>
    </div>
  );
}
