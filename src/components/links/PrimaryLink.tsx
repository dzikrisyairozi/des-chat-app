import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const PrimaryLinkSize = ['sm', 'base'] as const;
const PrimaryLinkVariant = ['primary', 'basic', 'danger'] as const;

type PrimaryLinkProps = {
  size?: (typeof PrimaryLinkSize)[number];
  variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  (
    { className, children, size = 'base', variant = 'primary', ...rest },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring',
          'transition duration-100',
          'underline decoration-current hover:decoration-white/0 active:decoration-current disabled:hover:decoration-current',
          //#region  //*=========== Size ===========
          size === 'sm' && 'text-xs md:text-sm ',
          size === 'base' && 'text-sm md:text-base',
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-600 hover:text-primary-700 active:text-primary-800',
            'focus-visible:ring-primary-400',
          ],
          variant === 'basic' && ['focus-visible:ring-gray-400'],
          variant === 'danger' && [
            'text-red-600 hover:text-red-700 active:text-red-800',
            'focus-visible:ring-red-300',
          ],
          //#endregion  //*======== Variant ===========
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
