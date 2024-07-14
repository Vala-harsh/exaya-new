import React from 'react';
import data from '@/content/project.json';
import { Breadcrumb } from '@/component/common/Breadcrumb';
import { Contact } from '@/component/Contact';
import dat from "@/content/home.json";
import { Project_list } from '@/component/project/Project_list';
import { SlideIn } from '@/component/animations/SlideIn';
import { Titlebar } from '@/component/common/Titlebar';
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.desc,
}
export default function Page() {
  return (
    <div>
      <div className='mt-20'>
        <Breadcrumb data={data.project} />
        <SlideIn>
          <Titlebar data={data.titlebar} />
        </SlideIn>
        <SlideIn>
          <Project_list data={data.project} />
        </SlideIn>
        <div className=' my-20'>
          <SlideIn>
            <Contact data={dat} />
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
