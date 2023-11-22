import * as React from 'react';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export type CreatorCardProps = {
  name: string;
  username: string;
  followers: number;
  cover?: string;
  profile_id?: string;
  avatar?: string | IconType;
  films: DummyMiniProductCardProps[];
} & React.ComponentPropsWithRef<'div'>;

type DummyMiniProductCardProps = { image: string; id: string };

function DummyMiniProductCard({ image, id }: DummyMiniProductCardProps) {
  return (
    <NextImage
      src={image}
      alt={id}
      width={73}
      height={120}
      imgClassName='h-[7.5rem] rounded-sm object-cover'
    />
  );
}

export default function CreatorCard({
  name,
  username,
  followers,
  cover,
  films,
  avatar: Avatar = FiUser,
  profile_id = '/',
}: CreatorCardProps) {
  return (
    <div className='w-[22rem] shadow-xl'>
      {typeof cover === 'string' ? (
        <NextImage
          src={cover}
          alt={`${username} backcover`}
          width={352}
          height={32}
          imgClassName='h-[2rem] md:h-[5rem] object-cover rounded-t-md'
          className='w-fit'
        />
      ) : (
        <div className='h-[2rem] rounded-t-md bg-neutral-inline md:h-[5rem]' />
      )}
      <div className='rounded-b-md bg-base-900 px-5 pb-5'>
        <div
          className={clsxm(
            'flex h-20 w-20 items-center justify-center',
            'absolute -mt-5 flex-shrink-0 rounded-full outline-none',
            typeof Avatar === 'string' ? '' : 'bg-white'
          )}
        >
          {typeof Avatar === 'string' ? (
            <NextImage
              src={Avatar as string}
              alt={`${username} avatar`}
              imgClassName='rounded-full object-cover'
              layout='fill'
              className='rounded-full'
            />
          ) : (
            <Avatar className='text-typo ' size={40} />
          )}
        </div>
        <div className='ml-[5.4rem] flex items-center justify-between'>
          <div>
            <Typography variant='s2' color='primary'>
              {name}
            </Typography>
            <Typography variant='s4' color='primary'>
              {`@${username}`}
            </Typography>
            <Typography variant='c2' className='mt-1'>
              {followers} pengikut
            </Typography>
          </div>
          <ButtonLink href={profile_id} size='sm'>
            Lihat Profil
          </ButtonLink>
        </div>
        <div className='mt-5 hidden md:grid md:h-[7.5rem]'>
          {films.length > 0 ? (
            <div
              className={clsxm(
                'max-h-[7.5rem] grid-cols-4 overflow-hidden md:grid',
                films.length > 3 && 'flex-wrap justify-between md:flex'
              )}
            >
              {films.map((item) => (
                <div key={item.id}>
                  <DummyMiniProductCard image={item.image} id={item.id} />
                </div>
              ))}
            </div>
          ) : (
            <div className='flex h-full w-full items-center justify-center'>
              <Typography variant='c2' color='secondary'>
                belum ada karya
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
