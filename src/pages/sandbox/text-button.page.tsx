import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TextButtonPage() {
  return (
    <Layout>
      <Seo templateTitle='Text Button' />
      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Text Button
            </Typography>
            <div className='mt-4 space-y-8'>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Primary
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='primary'>Button</TextButton>
                  <TextButton variant='primary' size='sm'>
                    Button
                  </TextButton>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='primary' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='primary' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Basic
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='basic'>Button</TextButton>
                  <TextButton variant='basic' size='sm'>
                    Button
                  </TextButton>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='basic' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='basic' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Danger
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='danger'>Button</TextButton>
                  <TextButton variant='danger' size='sm'>
                    Button
                  </TextButton>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='danger' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='danger' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
