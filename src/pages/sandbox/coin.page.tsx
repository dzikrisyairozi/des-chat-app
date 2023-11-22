import * as React from 'react';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function CoinPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Coin - Dashboard Layout' />

      <main>
        <section>
          <div className='layout min-h-screen py-5 text-center'>
            <Typography as='h1' variant='h1'>
              Dashboard Coin
            </Typography>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
