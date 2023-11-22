import * as React from 'react';

import CollapsibleText from '@/components/CollapsibleText';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function CollapsibleTextPage() {
  return (
    <Layout>
      <Seo templateTitle='Collapsible Text' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Collapsible Text
            </Typography>

            <CollapsibleText className='b2 mt-2 text-base-200' clampNumber={1}>
              Will following the initial height of the text, so you need to
              refresh the page when you change the text lenght or the viewport
              size that affect the container height. Taking clampNumber as the
              number of how much line to being clamp. The clampNumber is between
              1 to 6, with default is 3.
            </CollapsibleText>
            <CollapsibleText className='b2 mt-2 text-base-200'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus corporis est accusantium minus, consequuntur hic
              labore quos sunt neque quasi quibusdam nemo id maiores deleniti
              nobis magnam. Quibusdam tenetur minima provident architecto culpa
              commodi quidem! Saepe, necessitatibus reprehenderit facere minima,
              sequi dolores ab numquam dicta deleniti ducimus nihil provident a!
              Molestias, atque, assumenda sapiente quasi perspiciatis, dolorum
              nulla placeat debitis similique consectetur quaerat itaque in.
              Labore nostrum nulla maiores, nisi pariatur aperiam modi error aut
              unde, dolorem, dolor repellendus? Quis sapiente, error tempora sit
              ipsum sunt expedita ducimus nesciunt explicabo eius eaque eos
              voluptatem ab illum velit facere molestiae est illo quisquam
              magnam iste voluptate veniam! Corporis voluptates accusantium
              molestias ex animi asperiores repellat minus dolores illum.
              Delectus perspiciatis nam sequi adipisci culpa, architecto velit
              dignissimos exercitationem officia hic porro ad eos maiores
              voluptatem quibusdam autem libero, fugit in quasi necessitatibus
              aliquam illum! Temporibus dolore dolorem, excepturi sunt culpa
              itaque nostrum illum, assumenda autem nam ab voluptatibus
              exercitationem iure amet esse similique consequatur, voluptatem
              voluptate obcaecati ratione est vel non consequuntur enim. Aliquam
              nesciunt fuga, eos molestiae sunt deleniti libero, delectus
              corrupti quibusdam quis accusantium modi nulla maiores suscipit!
              Repellendus eaque porro reiciendis cumque alias iusto, aperiam
              cupiditate cum architecto sit numquam sequi! Eaque autem in alias
              deserunt quae repudiandae eum nostrum. Fugiat ducimus, obcaecati
              distinctio beatae sequi aut laudantium consequuntur, nam sed
              itaque, quos nobis atque impedit aspernatur velit nemo praesentium
              soluta! Eos perferendis, quos, ipsum voluptatem ratione iste
              repellat vero consequatur blanditiis laborum quaerat voluptatum.
              Provident eius placeat facere sapiente natus dolorum voluptatibus
              necessitatibus doloribus culpa nostrum voluptate laborum nam
              quaerat nemo, distinctio iusto repudiandae eligendi? Accusantium
              deserunt magni voluptatem optio nisi blanditiis. Quis deserunt qui
              quibusdam ut libero mollitia odit perspiciatis nulla veritatis
              magni consequuntur reprehenderit, at ea velit? Blanditiis, rem.
              Commodi vero a vel veritatis laborum.
            </CollapsibleText>
          </div>
        </section>
      </main>
    </Layout>
  );
}
