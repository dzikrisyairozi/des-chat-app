import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tabs from '@/components/Tabs';
import TextTabs from '@/components/TextTabs';
import Typography from '@/components/typography/Typography';

type Tab =
  | 'film'
  | 'series'
  | 'kreator'
  | 'coming soon'
  | 'sample#1'
  | 'sample#2';
type TextTab =
  | 'coin transaction'
  | 'film transaction'
  | 'sample#1'
  | 'sample#2';
export default function TabsPage() {
  const tabs: Tab[] = [
    'film',
    'series',
    'kreator',
    'coming soon',
    'sample#1',
    'sample#2',
  ];
  const disableTabs: Tab[] = ['coming soon'];
  const textTabs: TextTab[] = [
    'coin transaction',
    'film transaction',
    'sample#1',
    'sample#2',
  ];
  const [activeTab, setActiveTab] = React.useState<Tab>('film');
  const [activeTextTab, setActiveTextTab] =
    React.useState<TextTab>('coin transaction');
  return (
    <Layout>
      <Seo />
      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='d1' color='primary'>
              Tabs
            </Typography>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                Tabs
              </Typography>
              <Tabs
                tabs={tabs}
                disableTab={disableTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className='mt-8'>
              <Typography as='h1' variant='h1' color='primary'>
                TextTabs
              </Typography>
              <TextTabs
                tabs={textTabs}
                activeTab={activeTextTab}
                setActiveTab={setActiveTextTab}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
