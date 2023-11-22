import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <NextImage
              alt='Filinmovie Logo'
              src='/images/logo.png'
              width={200}
              height={200}
            />

            <Typography as='h1' variant='d1' className='mt-2'>
              Filinmovie Design System
            </Typography>
            <Typography variant='b3' color='tertiary' className='mt-2'>
              Based from{' '}
              <UnderlineLink href='https://github.com/theodorusclarence/aether-design-system'>
                Aether Design System
              </UnderlineLink>
              , adjusted to our needs
            </Typography>

            <div className='mt-6'>
              <Typography as='h2' variant='h6'>
                Sandbox:
              </Typography>
              <div className='mt-2 flex flex-wrap justify-center gap-2'>
                {sandbox.map(({ title, route }) => (
                  <ButtonLink key={route} href={route} variant='outline'>
                    {title}
                  </ButtonLink>
                ))}
              </div>
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://filinmovie.com'>
                Filinmovie
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

//#region  //*=========== Sandbox ===========
const sandbox = [
  {
    title: 'Typography',
    route: '/sandbox/typography',
  },
  {
    title: 'Colors',
    route: '/sandbox/colors',
  },
  {
    title: 'Form',
    route: '/sandbox/form',
  },
  {
    title: 'Searchable Select Form',
    route: '/sandbox/searchable-select-form',
  },
  {
    title: 'Text Button',
    route: '/sandbox/text-button',
  },
  {
    title: 'Button',
    route: '/sandbox/button',
  },
  {
    title: 'Breadcrumb',
    route: '/sandbox/breadcrumb',
  },
  {
    title: 'Icon Button',
    route: '/sandbox/icon-button',
  },
  {
    title: 'React Query & Toast',
    route: '/sandbox/toast-rq',
  },
  {
    title: 'Modal',
    route: '/sandbox/modal',
  },
  {
    title: 'Dialog',
    route: '/sandbox/dialog',
  },
  {
    title: 'Table',
    route: '/sandbox/table',
  },
  {
    title: 'Tooltip',
    route: '/sandbox/tooltip',
  },
  {
    title: 'Mac Card',
    route: '/sandbox/mac-cards',
  },
  {
    title: 'Popover',
    route: '/sandbox/popover',
  },
  {
    title: 'Banner',
    route: '/sandbox/banner',
  },
  {
    title: 'Alert',
    route: '/sandbox/alert',
  },
  {
    title: 'Typography Alert',
    route: '/sandbox/typography-alert',
  },
  {
    title: 'Tabs',
    route: '/sandbox/tabs',
  },
  {
    title: 'Tag',
    route: '/sandbox/tag',
  },
  {
    title: 'Card',
    route: '/sandbox/card',
  },
  {
    title: 'Development Card',
    route: '/sandbox/development-card',
  },
  {
    title: 'Statistics Card',
    route: '/sandbox/statistics-card',
  },
  {
    title: 'Accordion',
    route: '/sandbox/accordion',
  },
  {
    title: 'Collapsible Text',
    route: '/sandbox/collapsible-text',
  },
  {
    title: 'Link',
    route: '/sandbox/link',
  },
  {
    title: 'Review Card',
    route: '/sandbox/review-card',
  },
  {
    title: 'Base Layout',
    route: '/sandbox/base-layout',
  },
  {
    title: 'Dashboard Layout',
    route: '/sandbox/dashboard',
  },
  {
    title: 'CreatorCard',
    route: '/sandbox/creator-card',
  },
  {
    title: 'Promotion Poster Card',
    route: '/sandbox/promotion-poster-card',
  },
  {
    title: 'Product Card',
    route: '/sandbox/product-card',
  },
];
//#endregion  //*======== Sandbox ===========
