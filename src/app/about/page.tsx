import React from 'react';
import data from '@/content/about.json';
import { Breadcrumb } from '@/component/common/Breadcrumb';
import { Features } from '@/component/Features';
import dat from '@/content/home.json'
import { Goal } from '@/component/about_us/Goal';
import { Our_team } from '@/component/about_us/Our_team';
import { Contact } from '@/component/Contact';
import { SlideIn } from '@/component/animations/SlideIn';

import { Metadata } from 'next'
import { Titlebar } from '@/component/common/Titlebar';
export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.desc,
}
export default function Page() {
  return (
    <div>
      <div className='mt-20'>
        <Breadcrumb data={data.about_us} />
      </div>
      <SlideIn>
        <Titlebar data={data.titlebar} />
      </SlideIn>
      <div>
        
          <Features data={data.featurs} imageside={"right"} />
      </div>
      <div className='my-10'>
        <SlideIn>
          <Goal data={data.goal} />
        </SlideIn>
      </div>
      <div className='my-10'>
        <SlideIn>
          <Our_team data={data.our_team} />
        </SlideIn>
      </div>
      <div className='mt-20'>
        <SlideIn>
          <Contact data={dat} />
        </SlideIn>
      </div>
    </div>
  );
}
