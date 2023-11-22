import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import ExamplePopover from '@/pages/sandbox/components/ExamplePopover';

export default function PopoverPage() {
  return (
    <Layout>
      <Seo templateTitle='Popover' />

      <main>
        <section className=''>
          <div className='layout min-h-main py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Popover
            </Typography>
            <div className='mt-8'>
              <ExamplePopover />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
