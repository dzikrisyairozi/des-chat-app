import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

const ButtonVariant = [
  'primary',
  'danger',
  'outline',
  'ghost',
  'warning',
  'success',
] as const;
const ButtonSize = ['sm', 'base', 'lg'] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center justify-center rounded-md font-semibold',
          'focus:outline-none focus-visible:ring',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[2.75rem] px-3.5 md:min-h-[3rem]',
              'text-lg',
            ],
            size === 'base' && [
              'min-h-[2.25rem] px-3 md:min-h-[2.5rem]',
              'text-sm md:text-base',
            ],
            size === 'sm' && [
              'min-h-[1.75rem] px-2 md:min-h-[2rem]',
              'text-xs md:text-sm',
            ],
          ],
          //#endregion  //*======== Size ===========
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
          isLoading &&
            '!hover:text-transparent relative !text-transparent transition-none disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': [
                  'primary',
                  'danger',
                  'warning',
                  'success',
                  'outline',
                ].includes(variant),
                'text-primary-600': ['ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'lg' && 'mr-3',
              size === 'base' && 'mr-2',
              size === 'sm' && 'mr-1',
            ])}
          >
            <LeftIcon
              size='1em'
              className={clsxm('text-base', leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'lg' && 'ml-3',
              size === 'base' && 'ml-2',
              size === 'sm' && 'ml-1',
            ])}
          >
            <RightIcon
              size='1em'
              className={clsxm('text-base', rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
