import * as React from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionProvider,
  AccordionTrigger,
} from '@/components/Accordion';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function AccordionPage() {
  return (
    <Layout>
      <Seo templateTitle='Accordion' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1' color='primary'>
              Accordion
            </Typography>
            <div className='mt-8'>
              <AccordionProvider type='single'>
                <AccordionItem value='accordion-one'>
                  <AccordionTrigger>Title here</AccordionTrigger>
                  <AccordionContent>
                    <ul className='list-disc px-5 text-base'>
                      <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='accordion-two'>
                  <AccordionTrigger>Title here</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, officiis nulla dicta eligendi aliquid pariatur
                    minima odit ducimus est id unde qui magnam, sunt distinctio
                    quia adipisci, dolores similique commodi!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='accordion-three'>
                  <AccordionTrigger>Title here</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, officiis nulla dicta eligendi aliquid pariatur
                    minima odit ducimus est id unde qui magnam, sunt distinctio
                    quia adipisci, dolores similique commodi!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='accordion-four'>
                  <AccordionTrigger>Title here</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, officiis nulla dicta eligendi aliquid pariatur
                    minima odit ducimus est id unde qui magnam, sunt distinctio
                    quia adipisci, dolores similique commodi!
                  </AccordionContent>
                </AccordionItem>
              </AccordionProvider>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
