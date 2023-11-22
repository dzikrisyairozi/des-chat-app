import * as React from 'react';

import NextImage from '@/components/NextImage';

const LogoVariant = ['base', 'word'] as const;

type LogoProps = {
  className?: string;
  variant?: (typeof LogoVariant)[number];
  imgClassName?: string;
};

export default function Logo({
  className,
  variant = 'base',
  imgClassName,
}: LogoProps) {
  return (
    <NextImage
      className={className}
      imgClassName={imgClassName}
      src={variant === 'word' ? '/images/logo-word.png' : '/images/logo.png'}
      width={280}
      height={280}
      alt='logo'
    />
  );
}
