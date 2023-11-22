import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function ColorsPage() {
  return (
    <Layout>
      <Seo templateTitle='Colors' />

      <main>
        <div className='layout min-h-screen py-20'>
          <Typography as='h1' variant='d1'>
            Colors
          </Typography>
          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Neutral
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-neutral-white text-black'>white</ColorBox>
              <ColorBox className='bg-neutral-surface text-black'>
                surface
              </ColorBox>
              <ColorBox className='bg-neutral-light text-black'>light</ColorBox>
              <ColorBox className='bg-neutral-outline text-black'>
                outline
              </ColorBox>
              <ColorBox className='bg-neutral-inline text-black'>
                inline
              </ColorBox>
              <ColorBox className='bg-neutral-icon text-white'>icon</ColorBox>
              <ColorBox className='bg-neutral-secondary text-white'>
                secondary
              </ColorBox>
              <ColorBox className='bg-neutral-black text-white'>black</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Base
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-base-100 text-black'>100</ColorBox>
              <ColorBox className='bg-base-200 text-black'>
                <p>200</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-base-300 text-black'>300</ColorBox>
              <ColorBox className='bg-base-400 text-black'>400</ColorBox>
              <ColorBox className='bg-base-500 text-black'>
                <p>500</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-base-600 text-white'>
                <p>600</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-base-700 text-white'>
                <p>700</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-base-800 text-white'>
                <p>800</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-base-900 text-white'>900</ColorBox>
              <ColorBox className='bg-base-1000 text-white'>1000</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Primary
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-primary-100 text-black'>100</ColorBox>
              <ColorBox className='bg-primary-200 text-black'>
                <p>200</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-primary-300 text-black'>300</ColorBox>
              <ColorBox className='bg-primary-400 text-black'>400</ColorBox>
              <ColorBox className='bg-primary-500 text-black'>
                <p>500</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-primary-600 text-white'>
                <p>600</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-primary-700 text-white'>
                <p>700</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-primary-800 text-white'>
                <p>800</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-primary-900 text-white'>900</ColorBox>
              <ColorBox className='bg-primary-1000 text-white'>1000</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Danger
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-danger-100 text-black'>100</ColorBox>
              <ColorBox className='bg-danger-200 text-black'>
                <p>200</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-danger-300 text-black'>300</ColorBox>
              <ColorBox className='bg-danger-400 text-black'>400</ColorBox>
              <ColorBox className='bg-danger-500 text-black'>
                <p>500</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-danger-600 text-white'>
                <p>600</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-danger-700 text-white'>
                <p>700</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-danger-800 text-white'>
                <p>800</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-danger-900 text-white'>900</ColorBox>
              <ColorBox className='bg-danger-1000 text-white'>1000</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Warning
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-warning-100 text-black'>100</ColorBox>
              <ColorBox className='bg-warning-200 text-black'>
                <p>200</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-warning-300 text-black'>300</ColorBox>
              <ColorBox className='bg-warning-400 text-black'>400</ColorBox>
              <ColorBox className='bg-warning-500 text-black'>
                <p>500</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-warning-600 text-white'>
                <p>600</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-warning-700 text-white'>
                <p>700</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-warning-800 text-white'>
                <p>800</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-warning-900 text-white'>900</ColorBox>
              <ColorBox className='bg-warning-1000 text-white'>1000</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h2'>
              Success
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-success-100 text-black'>100</ColorBox>
              <ColorBox className='bg-success-200 text-black'>
                <p>200</p>
                <p>Background</p>
              </ColorBox>
              <ColorBox className='bg-success-300 text-black'>300</ColorBox>
              <ColorBox className='bg-success-400 text-black'>400</ColorBox>
              <ColorBox className='bg-success-500 text-black'>
                <p>500</p>
                <p>Complement</p>
              </ColorBox>
              <ColorBox className='bg-success-600 text-white'>
                <p>600</p>
                <p>Default</p>
              </ColorBox>
              <ColorBox className='bg-success-700 text-white'>
                <p>700</p>
                <p>Hovered</p>
              </ColorBox>
              <ColorBox className='bg-success-800 text-white'>
                <p>800</p>
                <p>Active</p>
              </ColorBox>
              <ColorBox className='bg-success-900 text-white'>900</ColorBox>
              <ColorBox className='bg-success-1000 text-white'>1000</ColorBox>
            </div>
          </section>

          <section className='mt-4'>
            <Typography as='h2' variant='h2'>
              Typography
            </Typography>
            <div className='mt-2 flex flex-wrap gap-2'>
              <ColorBox className='bg-typo text-white'>Default</ColorBox>
              <ColorBox className='bg-typo-secondary text-white'>
                Secondary
              </ColorBox>
              <ColorBox className='bg-typo-tertiary text-white'>
                Tertiary
              </ColorBox>
              <ColorBox className='bg-typo-icons text-white'>Icons</ColorBox>
              <ColorBox className='bg-typo-divider text-typo'>Divider</ColorBox>
              <ColorBox className='bg-typo-outline text-typo'>Outline</ColorBox>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

function ColorBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsxm(
        'flex h-24 w-24 flex-col items-center justify-center break-all rounded px-1 text-center text-xs font-medium',
        className
      )}
    >
      {children}
    </div>
  );
}
