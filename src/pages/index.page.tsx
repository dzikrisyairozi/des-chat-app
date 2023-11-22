import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='DES' />

      <main>
        <section>
          <div className='layout relative flex min-h-screen flex-col  py-12 text-center'>
            <Typography as='h1' variant='d2' className='mt-2'>
              Data Encryption Standard Algorithm - Chat App
            </Typography>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href=''>
                Data Encryption Standard Algorithm
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
