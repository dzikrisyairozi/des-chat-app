import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

const TAG_SIZE = ['sm', 'base'] as const;
type TagSize = (typeof TAG_SIZE)[number];

const TAG_COLOR = [
  'default',
  'primary',
  'secondary',
  'warning',
  'danger',
  'success',
] as const;
type TagColor = (typeof TAG_COLOR)[number];

type TagProps = {
  children: React.ReactNode;
  size?: TagSize;
  color?: TagColor;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
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
            size === 'sm' && ['px-3 py-1 text-xs'],
            size === 'base' && ['px-3 py-1 text-lg font-semibold'],
          ],

          //#region  //*=========== Color ===========
          color === 'default' &&
            'bg-base-800 text-neutral-surface hover:bg-neutral-surface hover:text-base-800',

          color === 'primary' &&
            'bg-base-900 text-primary-600 hover:bg-primary-600 hover:text-base-1000',

          color === 'secondary' &&
            'bg-primary-400 text-primary-900 hover:bg-primary-800 hover:text-primary-200',

          color === 'danger' &&
            'bg-danger-400 text-danger-800 hover:bg-danger-800 hover:text-danger-200',

          color === 'warning' &&
            'bg-warning-400 text-yellow-800 hover:bg-warning-800 hover:text-yellow-200 ',

          color === 'success' &&
            'bg-success-300 text-success-800 hover:bg-success-800 hover:text-success-200',

          //#endregion  //*======== Color ===========
          'inline-flex items-center gap-1 rounded-lg px-3 font-medium',
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

export default Tag;
