import React from 'react';
import data from '@/content/services.json';
import { Contact } from '@/component/Contact';
import { Contact_us } from '@/component/common/Contact_us';
import { Heading } from '@/component/common/Heading';
import { Breadcrumb } from '@/component/common/Breadcrumb';
import { Services_card } from '@/component/services/Services_card';
import dat from "@/content/home.json";
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
      <div className='lg:mt-20 mt-24'>
        <Breadcrumb data={data.services} />
        
          <Titlebar data={data.titlebar} />
        
        <div className=''>
          
            <Services_card data={data.card} />
          
        </div>
        <div className='mt-20'>
          <SlideIn>
            <Contact data={dat} />
          </SlideIn>
        </div>
      </div>

    </div>
  );
}
