import { CheckCircle2, Info } from 'lucide-react';
import * as React from 'react';

import TypographyAlert from '@/components/alert/TypographyAlert';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TypographyAlertPage() {
  return (
    <Layout>
      <Seo templateTitle='Typography Alert' />

      <main>
        <section className=''>
          <div className='layout min-h-screen space-y-4 py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Alert Message
            </Typography>
            <Typography as='h1' variant='h1' color='primary'>
              Default
            </Typography>
            <Typography as='h3' variant='h3' color='primary'>
              Primary
            </Typography>
            <TypographyAlert variant='primary' leftIcon={Info}>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='primary'>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Danger
            </Typography>
            <TypographyAlert variant='danger' leftIcon={Info}>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='danger'>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Warning
            </Typography>
            <TypographyAlert variant='warning' leftIcon={Info}>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='warning'>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Success
            </Typography>
            <TypographyAlert variant='success' leftIcon={CheckCircle2}>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='success'>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h1' variant='h1' color='primary'>
              Single
            </Typography>
            <Typography as='h3' variant='h3' color='primary'>
              Primary
            </Typography>
            <TypographyAlert variant='primary' leftIcon={Info}>
              <p className='text-xl font-bold'>System Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='primary'>
              <p className='text-xl font-bold'>System Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Danger
            </Typography>
            <TypographyAlert variant='danger' leftIcon={Info}>
              <p className='text-xl font-bold'>Danger Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='danger'>
              <p className='text-xl font-bold'>Danger Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Warning
            </Typography>
            <TypographyAlert variant='warning' leftIcon={Info}>
              <p className='text-xl font-bold'>Warning Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='warning'>
              <p className='text-xl font-bold'>Warning Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Success
            </Typography>
            <TypographyAlert variant='success' leftIcon={CheckCircle2}>
              <p className='text-xl font-bold'>System Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <TypographyAlert variant='success'>
              <p className='text-xl font-bold'>System Title</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </TypographyAlert>
            <Typography as='h1' variant='h1' color='primary'>
              Multiple
            </Typography>
            <Typography as='h3' variant='h3' color='primary'>
              Primary
            </Typography>
            <TypographyAlert variant='primary' leftIcon={Info}>
              <p className='text-xl font-bold'>System Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <TypographyAlert variant='primary'>
              <p className='text-xl font-bold'>System Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Danger
            </Typography>
            <TypographyAlert variant='danger' leftIcon={Info}>
              <p className='text-xl font-bold'>Danger Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <TypographyAlert variant='danger'>
              <p className='text-xl font-bold'>Danger Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Warning
            </Typography>
            <TypographyAlert variant='warning' leftIcon={Info}>
              <p className='text-xl font-bold'>Danger Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <TypographyAlert variant='warning'>
              <p className='text-xl font-bold'>Warning Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <Typography as='h3' variant='h3' color='primary'>
              Success
            </Typography>
            <TypographyAlert variant='success' leftIcon={CheckCircle2}>
              <p className='text-xl font-bold'>Success Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
            <TypographyAlert variant='success'>
              <p className='text-xl font-bold'>Success Title</p>
              <ul className='text-lg font-semibold'>
                <li>option1</li>
                <li>option2</li>
                <li>option3</li>
                <li>...</li>
              </ul>
            </TypographyAlert>
          </div>
        </section>
      </main>
    </Layout>
  );
}
