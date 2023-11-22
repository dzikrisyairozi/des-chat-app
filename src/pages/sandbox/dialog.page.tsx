/* eslint-disable no-console */
import * as React from 'react';

import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function DialogPage() {
  const dialog = useDialog();
  const openDefault = () => {
    dialog({
      title: 'Dialog Title',
      content: 'Dialog description type here',
      submitText: 'Label',
      closeText: 'Label',
      variant: 'default',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openSuccess = () => {
    dialog({
      title: 'Success title',
      content: 'Success description type here',
      submitText: 'Yes',
      closeText: 'No',
      variant: 'success',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openWarning = () => {
    dialog({
      title: 'Warning title !',
      content: 'Warning description type here',
      submitText: 'Sure',
      closeText: 'Cancel',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openDanger = () => {
    dialog({
      title: 'Danger action ! May risk',
      content: 'Danger description type here, are you sure?',
      submitText: 'Sure',
      closeText: 'Cancel',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };

  return (
    <Layout>
      <Seo templateTitle='Dialog' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Dialog
            </Typography>
            <div className='mt-8 flex flex-col items-start space-y-3'>
              <Button onClick={openDefault}>Default Dialog</Button>
              <Button onClick={openSuccess}>Success Dialog</Button>
              <Button onClick={openWarning}>Warning Dialog</Button>
              <Button onClick={openDanger}>Danger Dialog</Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
