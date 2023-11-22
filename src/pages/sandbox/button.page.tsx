import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FiArrowRight, FiPlus, FiSave } from 'react-icons/fi';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function ButtonPage() {
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
      <Seo templateTitle='Button' />

      <main>
        <section>
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
                <Button variant='primary' leftIcon={FiSave}>
                  Save
                </Button>
              </form>
            </FormProvider>

            <div className='mt-8 flex space-x-2'>
              <Button variant='outline'>Cancel</Button>
              <Button variant='primary' leftIcon={FiSave}>
                Save
              </Button>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Primary
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='primary'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Primary Button
                </Button>
                <Button
                  variant='primary'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Primary Button
                </Button>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Primary Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='primary'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Primary Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='primary'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Primary Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Danger
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='danger'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Danger Button
                </Button>
                <Button
                  variant='danger'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Danger Button
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Danger Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='danger'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Danger Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='danger'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Danger Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Outline
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Outline Button
                </Button>
                <Button
                  variant='outline'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Outline Button
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Outline Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Outline Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Outline Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Warning
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='warning'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Warning Button
                </Button>
                <Button
                  variant='warning'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Warning Button
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Warning Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='warning'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Warning Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='warning'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Warning Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Success
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='success'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Success Button
                </Button>
                <Button
                  variant='success'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Success Button
                </Button>
                <Button
                  variant='success'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Success Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='success'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Success Disabled
                </Button>
                <Button
                  variant='success'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Success Disabled
                </Button>
                <Button
                  variant='success'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Success Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='success'
                  size='lg'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Success Disabled
                </Button>
                <Button
                  variant='success'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Success Disabled
                </Button>
                <Button
                  variant='success'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Success Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Ghost
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='ghost'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Ghost Button
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                >
                  Ghost Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='ghost'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Ghost Disabled
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  disabled
                >
                  Ghost Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='ghost'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Ghost Disabled
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  leftIcon={FiPlus}
                  rightIcon={FiArrowRight}
                  isLoading
                >
                  Ghost Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
