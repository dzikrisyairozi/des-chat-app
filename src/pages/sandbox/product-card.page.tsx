import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ProductCard from '@/components/shared/ProductCard';
import Typography from '@/components/typography/Typography';

import { PRODUCT_CARD_DATA } from '@/pages/sandbox/constant/product';

export default function PopoverPage() {
  return (
    <Layout>
      <Seo templateTitle='Product Card' />
      <main>
        <section className=''>
          <div className='layout min-h-main py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Product Card
            </Typography>
            <div className='flex flex-col flex-wrap items-center justify-start gap-8 sm:flex-row'>
              {PRODUCT_CARD_DATA?.map((item) => (
                <div key={item.id} className='mt-8 flex'>
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
