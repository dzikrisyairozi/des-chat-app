import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FiEdit2, FiEye, FiPlus, FiSave } from 'react-icons/fi';

import logger from '@/lib/logger';

import IconButton from '@/components/buttons/IconButton';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function IconButtonPage() {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit = (data: unknown) => {
    logger({ data }, 'rhf.tsx line 33');

    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    console.log({ data });
    return;
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Icon Button' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h2' variant='h2'>
              Form
            </Typography>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex max-w-sm items-end space-x-2'
              >
                <Input
                  id='name'
                  label='Name'
                  validation={{ required: 'Name must be filled' }}
                  placeholder='Enter your name'
                  hideError
                />
                <IconButton variant='primary' icon={FiSave} />
              </form>
            </FormProvider>

            <div className='mt-8 flex flex-wrap gap-4'>
              <div>
                <Typography as='h2' variant='h2'>
                  Primary
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='primary' size='lg' icon={FiPlus} />
                  <IconButton variant='primary' icon={FiEye} />
                  <IconButton variant='primary' size='sm' icon={FiEdit2} />
                  <IconButton variant='primary' size='xs' icon={FiPlus} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='primary'
                    disabled
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='primary' disabled icon={FiEye} />
                  <IconButton
                    variant='primary'
                    disabled
                    size='sm'
                    icon={FiEdit2}
                  />
                  <IconButton
                    variant='primary'
                    disabled
                    size='xs'
                    icon={FiPlus}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='primary'
                    isLoading
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='primary' isLoading icon={FiEye} />
                  <IconButton
                    variant='primary'
                    isLoading
                    size='sm'
                    icon={FiEdit2}
                  />
                  <IconButton
                    variant='primary'
                    isLoading
                    size='xs'
                    icon={FiPlus}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Danger
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='danger' size='lg' icon={FiPlus} />
                  <IconButton variant='danger' icon={FiEye} />
                  <IconButton variant='danger' size='sm' icon={FiEdit2} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='danger'
                    disabled
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='danger' disabled icon={FiEye} />
                  <IconButton
                    variant='danger'
                    disabled
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='danger'
                    isLoading
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='danger' isLoading icon={FiEye} />
                  <IconButton
                    variant='danger'
                    isLoading
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Outline
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='outline' size='lg' icon={FiPlus} />
                  <IconButton variant='outline' icon={FiEye} />
                  <IconButton variant='outline' size='sm' icon={FiEdit2} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='outline'
                    disabled
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='outline' disabled icon={FiEye} />
                  <IconButton
                    variant='outline'
                    disabled
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='outline'
                    isLoading
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='outline' isLoading icon={FiEye} />
                  <IconButton
                    variant='outline'
                    isLoading
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Warning
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='warning' size='lg' icon={FiPlus} />
                  <IconButton variant='warning' icon={FiEye} />
                  <IconButton variant='warning' size='sm' icon={FiEdit2} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='warning'
                    disabled
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='warning' disabled icon={FiEye} />
                  <IconButton
                    variant='warning'
                    disabled
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='warning'
                    isLoading
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='warning' isLoading icon={FiEye} />
                  <IconButton
                    variant='warning'
                    isLoading
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Success
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='success' size='lg' icon={FiPlus} />
                  <IconButton variant='success' icon={FiEye} />
                  <IconButton variant='success' size='sm' icon={FiEdit2} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='success'
                    disabled
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='success' disabled icon={FiEye} />
                  <IconButton
                    variant='success'
                    disabled
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='success'
                    isLoading
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='success' isLoading icon={FiEye} />
                  <IconButton
                    variant='success'
                    isLoading
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Ghost
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='ghost' size='lg' icon={FiPlus} />
                  <IconButton variant='ghost' icon={FiEye} />
                  <IconButton variant='ghost' size='sm' icon={FiEdit2} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='ghost'
                    disabled
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='ghost' disabled icon={FiEye} />
                  <IconButton
                    variant='ghost'
                    disabled
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='ghost'
                    isLoading
                    size='lg'
                    icon={FiPlus}
                  />
                  <IconButton variant='ghost' isLoading icon={FiEye} />
                  <IconButton
                    variant='ghost'
                    isLoading
                    size='sm'
                    icon={FiEdit2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
