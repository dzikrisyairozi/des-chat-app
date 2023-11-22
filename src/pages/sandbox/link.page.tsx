import * as React from 'react';
import {
  FiArrowLeft,
  FiArrowRight,
  FiEye,
  FiPlus,
  FiTrash2,
} from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function LinksPage() {
  return (
    <Layout>
      <Seo templateTitle='Links' />
      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Links
            </Typography>
            <div className='mt-4 space-y-8'>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Primary
                </Typography>
                <div className='flex gap-x-4'>
                  <PrimaryLink href='/' variant='primary'>
                    Primary Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='primary' size='sm'>
                    Primary Link
                  </PrimaryLink>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Basic
                </Typography>
                <div className='flex gap-x-4'>
                  <PrimaryLink href='/' variant='basic'>
                    Basic Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='basic' size='sm'>
                    Basic Link
                  </PrimaryLink>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Danger
                </Typography>
                <div className='flex gap-x-4'>
                  <PrimaryLink href='/' variant='danger'>
                    Danger Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='danger' size='sm'>
                    Danger Link
                  </PrimaryLink>
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Underline
                </Typography>
                <UnderlineLink className='mt-3' href='/'>
                  Underline Link
                </UnderlineLink>
              </div>

              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Arrow Link
                </Typography>
                <div className='flex gap-x-4'>
                  <ArrowLink href='/' direction='left'>
                    Left Arrow Link
                  </ArrowLink>
                  <ArrowLink href='/'>Right Arrow Link</ArrowLink>
                </div>
                <div className='flex gap-x-4'>
                  <ArrowLink
                    href='/'
                    as={UnstyledLink}
                    className='inline-flex items-center'
                  >
                    Polymorphic
                  </ArrowLink>
                  <ArrowLink href='/' as={ButtonLink} variant='primary'>
                    Polymorphic
                  </ArrowLink>
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Icon Link
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconLink
                    variant='primary'
                    size='lg'
                    href='/'
                    icon={FiArrowLeft}
                  />
                  <IconLink variant='outline' href='/' icon={FiArrowLeft} />
                  <IconLink
                    variant='ghost'
                    size='sm'
                    href='/'
                    icon={FiArrowLeft}
                  />
                  <IconLink
                    variant='outline'
                    size='xs'
                    href='/'
                    icon={FiPlus}
                  />
                  <IconLink variant='outline' size='lg' href='/' icon={FiEye} />
                  <IconLink variant='danger' href='/' icon={FiTrash2} />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Button Link
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <ButtonLink
                    href='/'
                    variant='primary'
                    size='lg'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='primary'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='primary'
                    size='sm'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Button Link
                  </ButtonLink>
                </div>

                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <ButtonLink
                    href='/'
                    variant='outline'
                    size='lg'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Outline Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='outline'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Outline Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='outline'
                    size='sm'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Outline Button Link
                  </ButtonLink>
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <ButtonLink
                    href='/'
                    variant='warning'
                    size='lg'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Warning Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='warning'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Warning Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='warning'
                    size='sm'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Warning Button Link
                  </ButtonLink>
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <ButtonLink
                    href='/'
                    variant='ghost'
                    size='lg'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Ghost Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='ghost'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Ghost Button Link
                  </ButtonLink>
                  <ButtonLink
                    href='/'
                    variant='ghost'
                    size='sm'
                    leftIcon={FiPlus}
                    rightIcon={FiArrowRight}
                  >
                    Ghost Button Link
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
