import CreatorCard from '@/components/CreatorCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { CREATOR_DATA } from '@/pages/sandbox/constant/creator';

export default function CreatorCardPage() {
  return (
    <Layout>
      <Seo templateTitle='CreatorCard' />

      <main>
        <section>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Creator Card
            </Typography>
            <div className='mt-8 flex flex-wrap gap-x-5 gap-y-8'>
              {CREATOR_DATA.map((item) => (
                <CreatorCard
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  followers={item.followers}
                  cover={item.cover}
                  avatar={item.avatar}
                  films={item.films}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
