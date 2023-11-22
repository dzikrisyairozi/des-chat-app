import * as React from 'react';

import clsxm from '@/lib/clsxm';

const TextButtonSize = ['sm', 'base'] as const;
const TextButtonVariant = ['primary', 'basic', 'danger'] as const;

type TextButtonProps = {
  size?: (typeof TextButtonSize)[number];
  variant?: (typeof TextButtonVariant)[number];
} & React.ComponentPropsWithRef<'button'>;

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    { children, className, size = 'base', variant = 'primary', ...rest },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring',
          'transition duration-100',
          'underline decoration-current hover:decoration-white/0 active:decoration-current disabled:hover:decoration-current',
          //#region  //*=========== Size ===========
          size === 'sm' && 'text-xs md:text-sm',
          size === 'base' && 'text-sm  md:text-base',
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-600 hover:text-primary-700 active:text-primary-800',
            'focus-visible:ring-primary-400',
            'disabled:text-primary-1000',
          ],
          variant === 'basic' && [
            'focus-visible:ring-gray-400',
            'disabled:text-typo-secondary',
          ],
          variant === 'danger' && [
            'text-red-600 hover:text-red-700 active:text-red-800',
            'focus-visible:ring-red-300',
            'disabled:text-red-800',
          ],
          'disabled:cursor-not-allowed disabled:brightness-105',
          //#endregion  //*======== Variant ===========
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default TextButton;
