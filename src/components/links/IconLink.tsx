import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const IconLinkVariant = [
  'primary',
  'danger',
  'outline',
  'ghost',
  'warning',
  'success',
] as const;
const IconLinkSize = ['xs', 'sm', 'base', 'lg'] as const;

type IconLinkProps = {
  variant?: (typeof IconLinkVariant)[number];
  size?: (typeof IconLinkSize)[number];
  icon?: IconType;
  iconClassName?: string;
} & Omit<UnstyledLinkProps, 'children'>;

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline',
      size = 'base',
      iconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        type='button'
        className={clsxm(
          'inline-flex items-center justify-center rounded-md font-semibold',
          'focus:outline-none focus-visible:ring',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[2.75rem] min-w-[2.75rem] md:min-h-[3rem] md:min-w-[3rem]',
              'text-lg',
            ],
            size === 'base' && [
              'min-h-[2.25rem] min-w-[2.25rem] md:min-h-[2.5rem] md:min-w-[2.5rem]',
              'text-sm md:text-base',
            ],
            size === 'sm' && [
              'min-h-[1.75rem] min-w-[1.75rem] md:min-h-[2rem] md:min-w-[2rem]',
              'text-xs md:text-sm',
            ],
            size === 'xs' && ['p-1', 'text-xs md:text-sm'],
          ],
          //#region  //*=========== Variants ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-600 text-base-900',
              'border border-primary-500',
              'hover:bg-primary-700',
              'active:bg-primary-800',
              'disabled:bg-primary-800 disabled:text-primary-1000',
              'focus-visible:ring-primary-400',
            ],
            variant === 'danger' && [
              'bg-danger-600',
              'border border-danger-500',
              'hover:bg-danger-700',
              'active:bg-danger-800',
              'disabled:bg-danger-800 disabled:text-danger-1000',
              'focus-visible:ring-danger-400',
            ],
            variant === 'warning' && [
              'bg-warning-600',
              'border border-warning-500',
              'hover:bg-warning-700',
              'active:bg-warning-800',
              'disabled:bg-warning-800 disabled:text-warning-1000',
              'focus-visible:ring-warning-400',
            ],
            variant === 'success' && [
              'bg-success-600 ',
              'border border-success-500',
              'hover:bg-success-700',
              'active:bg-success-800',
              'disabled:bg-success-800 disabled:text-success-1000',
              'focus-visible:ring-success-400',
            ],
            variant === 'outline' && [
              'border border-primary-600',
              'hover:bg-primary-800',
              'active:bg-primary-900',
              'disabled:bg-primary-800 disabled:text-primary-1000',
              'focus-visible:ring-primary-400',
            ],
            variant === 'ghost' && [
              'text-primary-600',
              'shadow-none',
              'hover:bg-primary-800',
              'active:bg-primary-900',
              'disabled:bg-transparent disabled:text-base-700',
              'focus-visible:ring-primary-400',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && <Icon size='1em' className={clsxm(iconClassName)} />}
      </UnstyledLink>
    );
  }
);

export default IconLink;
