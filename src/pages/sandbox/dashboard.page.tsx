import * as React from 'react';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function BaseLayoutPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard Layout' />

      <main>
        <section className=''>
          <div className='layout min-h-[200vh] py-5 text-center'>
            <Typography as='h1' variant='h1'>
              Dashboard Main
            </Typography>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
