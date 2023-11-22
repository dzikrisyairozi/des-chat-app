import * as React from 'react';

import NextImageLightbox from '@/components/NextImageLightbox';

type PromotionPosterCardProps = {
  src: string;
  alt: string;
};

export default function PromotionPosterCard({
  src,
  alt,
  ...props
}: PromotionPosterCardProps) {
  return (
    <NextImageLightbox
      src={src}
      alt={alt}
      width={380}
      height={172}
      className='rounded-xl transition-transform duration-300 hover:scale-110 active:scale-105'
      {...props}
    />
  );
}
