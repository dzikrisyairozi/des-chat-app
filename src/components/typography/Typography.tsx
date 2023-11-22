import * as React from 'react';

import clsxm from '@/lib/clsxm';

const TypographyVariant = [
  'd1',
  'd2',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  's1',
  's2',
  's3',
  's4',
  'b1',
  'b2',
  'b3',
  'c1',
  'c2',
  'l1',
  'l2',
] as const;

const TypographyColor = [
  'base',
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'black',
] as const;
const TypographyFont = ['inter'] as const;

type TypographyProps<T extends React.ElementType> = {
  /** @default <p> tag */
  as?: T;
  className?: string;
  color?: (typeof TypographyColor)[number];
  /**
   * | Variant | Size Class | Font Size | Font Weight |
   * | :------ | :--------- | :-------- | :---------- |
   * | d1      | text-5xl   | 36px      | 700         |
   * | d2      | text-4xl   | 30px      | 700         |
   * | h1      | text-3xl   | 24px      | 700         |
   * | h2      | text-2xl   | 20px      | 700         |
   * | h3      | text-xl    | 18px      | 700         |
   * | h4      | text-lg    | 16px      | 700         |
   * | h5      | text-base  | 16px      | 700         |
   * | h6      | text-sm    | 14px      | 700         |
   * | s1      | text-lg    | 18px      | 600         |
   * | s2      | text-base  | 16px      | 600         |
   * | s3      | text-sm    | 14px      | 600         |
   * | s4      | text-xs    | 12px      | 600         |
   * | b1      | text-lg    | 18px      | 400         |
   * | b2      | text-base  | 16px      | 400         |
   * | b3      | text-sm    | 14px      | 400         |
   * | c1      | text-xs    | 12px      | 400         |
   * | c2      | -          | 10px      | 400         |
   */
  variant?: (typeof TypographyVariant)[number];
  font?: (typeof TypographyFont)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

/** @see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/ */
type TypographyComponent = <T extends React.ElementType = 'p'>(
  props: TypographyProps<T>
) => React.ReactElement | null;

const Typography: TypographyComponent = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    {
      as,
      children,
      className,
      color = 'base',
      variant = 'b2',
      font,
      ...rest
    }: TypographyProps<T>,
    ref?: React.ComponentPropsWithRef<T>['ref']
  ) => {
    const Component = as || 'p';
    return (
      <Component
        ref={ref}
        className={clsxm(
          //#region  //*=========== Variants ===========
          [
            variant === 'd1' && ['text-5xl font-bold'],
            variant === 'd2' && ['text-4xl font-bold'],
            variant === 'h1' && ['text-3xl font-bold'],
            variant === 'h2' && ['text-2xl font-bold'],
            variant === 'h3' && ['text-xl font-bold'],
            variant === 'h4' && ['text-lg font-bold'],
            variant === 'h5' && ['text-base font-bold'],
            variant === 'h6' && ['text-sm font-bold'],
            variant === 's1' && ['text-lg font-semibold'],
            variant === 's2' && ['text-base font-semibold'],
            variant === 's3' && ['text-sm font-semibold'],
            variant === 's4' && ['text-xs font-semibold'],
            variant === 'b1' && ['text-lg'],
            variant === 'b2' && ['text-base'],
            variant === 'b3' && ['text-sm'],
            variant === 'c1' && ['text-xs'],
            variant === 'c2' && ['text-[10px] leading-[16px]'],
          ],
          //#endregion  //*======== Variants ===========
          //#region  //*=========== Color ===========
          [
            color === 'base' && ['text-white'],
            color === 'primary' && ['text-primary-600'],
            color === 'secondary' && ['text-base-200'],
            color === 'tertiary' && ['text-neutral-secondary'],
            color === 'danger' && ['text-danger-600'],
            color === 'black' && ['text-black'],
          ],
          //#endregion  //*======== Color ===========
          //#region  //*=========== Font ===========
          [font === 'inter' && ['font-inter']],
          //#endregion  //*======== Font ===========
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;
