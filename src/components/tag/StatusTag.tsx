import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

const STATUS_TAG_SIZE = ['sm', 'base'] as const;
type StatusTagSize = (typeof STATUS_TAG_SIZE)[number];

const STATUS_TAG_COLOR = [
  'DEFAULT',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
] as const;
type StatusTagColor = (typeof STATUS_TAG_COLOR)[number];

type StatusTagProps = {
  children: React.ReactNode;
  size?: StatusTagSize;
  color?: StatusTagColor;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const StatusTag = React.forwardRef<HTMLDivElement, StatusTagProps>(
  (
    {
      children,
      className,
      color = 'DEFAULT',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsxm(
          [
            size === 'sm' && ['py-0.5 text-xs'],
            size === 'base' && ['py-1 text-sm'],
          ],

          //#region  //*=========== Color ===========
          color === 'DEFAULT' && 'bg-base-800 text-neutral-surface',
          color === 'primary' && 'bg-base-900 text-primary-600',
          color === 'secondary' && 'bg-primary-400 text-primary-900',
          color === 'danger' && 'bg-danger-400 text-danger-800',
          color === 'warning' && 'bg-warning-400 text-yellow-800',
          color === 'success' && 'bg-success-300 text-success-800',
          //#endregion  //*======== Color ===========
          'inline-flex items-center gap-1 rounded-full px-3 font-medium',
          LeftIcon && 'pl-3',
          RightIcon && 'pr-3',
          className
        )}
        ref={ref}
        {...rest}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size='1em' className={clsxm(leftIconClassName)} />
          </div>
        )}
        {children}
        {RightIcon && (
          <div>
            <RightIcon size='1em' className={clsxm(rightIconClassName)} />
          </div>
        )}
      </div>
    );
  }
);

export default StatusTag;
