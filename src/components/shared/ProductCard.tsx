import clsx from 'clsx';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import { Genre, ProductCardProps } from '@/types/entities/movies';

const ProductCard = ({
  product,
  className,
}: {
  product: ProductCardProps;
  className?: string;
}) => {
  const mainGenre =
    typeof product.main_genre != 'string'
      ? product.main_genre?.name
      : product.main_genre;
  const subGenre = product.sub_genre.map((item) => (item as Genre).name);
  const genre = [mainGenre, ...subGenre].join(', ');

  return (
    <UnstyledLink
      href={
        product.film_type === 'MOVIE'
          ? `/movies/${product.id}`
          : product.film_type === 'SERIES'
          ? `/series/${product.id}`
          : `#${product.title}`
      }
    >
      <div
        className={clsx(
          'group/card relative h-[225px] w-[130px] overflow-hidden rounded-xl shadow-sm sm:h-[250px] sm:w-[155px] md:h-[275px] md:w-[180px]',
          'transition duration-500 hover:scale-105 hover:shadow-lg',
          className
        )}
      >
        <div className='poster overflow-hiddenabsolute relative bottom-0 h-full w-full content-none'>
          <NextImage
            src={product.vertical_poster_url}
            alt={product.title}
            width={180}
            height={275}
            imgClassName='h-full object-cover'
            className='poster-img h-full w-full transition duration-500 group-hover/card:translate-y-[-36px] group-hover/card:blur-sm'
          />
          <div className='details absolute bottom-[-180px] h-1/2 w-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent transition duration-500 group-hover/card:translate-y-[-180px]'>
            <div className='absolute bottom-[-1px] m-3 '>
              <Typography variant='s3' color='primary'>
                {product.title}
              </Typography>

              <Typography variant='s4'>{genre as string}</Typography>

              <div className='line-clamp-2'>
                <Typography variant='c2' color='tertiary'>
                  {product.description}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default ProductCard;
