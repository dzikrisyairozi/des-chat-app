import { CircleDotIcon, Globe, Trash2 } from 'lucide-react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StatusTag from '@/components/tag/StatusTag';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

export default function TagPage() {
  return (
    <Layout>
      <Seo templateTitle='Tag' />

      <main>
        <section className=''>
          <div className='layout min-h-main py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Tag
            </Typography>

            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Default
              </Typography>
              <div className='flex flex-col justify-start'>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='default' size='base'>
                    Label
                  </Tag>
                  <Tag color='default' size='base' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='default' size='base' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='default' size='sm'>
                    Label
                  </Tag>
                  <Tag color='default' size='sm' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='default' size='sm' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Secondary
              </Typography>
              <div className='flex flex-col justify-start'>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='secondary' size='base'>
                    Label
                  </Tag>
                  <Tag color='secondary' size='base' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='secondary' size='base' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='secondary' size='sm'>
                    Label
                  </Tag>
                  <Tag color='secondary' size='sm' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='secondary' size='sm' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Primary
              </Typography>
              <div className='flex flex-col justify-start'>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='primary' size='base'>
                    Label
                  </Tag>
                  <Tag color='primary' size='base' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='primary' size='base' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='primary' size='sm'>
                    Label
                  </Tag>
                  <Tag color='primary' size='sm' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='primary' size='sm' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Danger
              </Typography>
              <div className='flex flex-col justify-start'>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='danger' size='base'>
                    Label
                  </Tag>
                  <Tag color='danger' size='base' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='danger' size='base' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='danger' size='sm'>
                    Label
                  </Tag>
                  <Tag color='danger' size='sm' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='danger' size='sm' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Warning
              </Typography>
              <div className='flex flex-col justify-start'>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='warning' size='base'>
                    Label
                  </Tag>
                  <Tag color='warning' size='base' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='warning' size='base' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='warning' size='sm'>
                    Label
                  </Tag>
                  <Tag color='warning' size='sm' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='warning' size='sm' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Success
              </Typography>
              <div className='flex flex-col justify-start'>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='success' size='base'>
                    Label
                  </Tag>
                  <Tag color='success' size='base' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='success' size='base' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
                <div className='flex items-start space-x-3 p-2'>
                  <Tag color='success' size='sm'>
                    Label
                  </Tag>
                  <Tag color='success' size='sm' leftIcon={Globe}>
                    Label
                  </Tag>
                  <Tag color='success' size='sm' rightIcon={Globe}>
                    Label
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='layout min-h-main'>
            <Typography as='h1' variant='h1'>
              Status Tag
            </Typography>
            <div className='mt-4 flex flex-col gap-3'>
              <div className='flex gap-2'>
                <StatusTag>Default</StatusTag>
                <StatusTag color='primary' leftIcon={CircleDotIcon}>
                  Primary
                </StatusTag>
                <StatusTag color='secondary' rightIcon={Trash2}>
                  Secondary
                </StatusTag>
              </div>
              <div className='flex gap-2'>
                <StatusTag color='danger'>Danger</StatusTag>
                <StatusTag color='warning'>Warning</StatusTag>
                <StatusTag color='success'>Success</StatusTag>
              </div>
            </div>
            <div className='mt-2 flex gap-2'>
              <StatusTag color='primary' size='sm'>
                Small
              </StatusTag>
              <StatusTag color='primary'>Base</StatusTag>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
