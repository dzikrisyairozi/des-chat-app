import * as React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Banner from '@/components/Banner';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { BannerData } from '@/constant/data';

export default function BannerPage() {
  return (
    <Layout>
      <Seo templateTitle='Banner' />
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
      >
        {BannerData?.map((item, index) => (
          <SwiperSlide key={index}>
            <Banner BannerData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
}
