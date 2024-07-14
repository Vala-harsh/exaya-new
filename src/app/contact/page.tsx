import React from 'react';
import data from '@/content/home.json';
import { Contact } from '@/component/Contact';
import dat from '@/content/contact.json';
import { Contact_us } from '@/component/common/Contact_us';
import { Heading } from '@/component/common/Heading';
import { Breadcrumb } from '@/component/common/Breadcrumb';
import { SlideIn } from '@/component/animations/SlideIn';
import { fjalla_one } from '@/app/font'
import { Metadata } from 'next'
import { Titlebar } from '@/component/common/Titlebar';
export const metadata: Metadata  = {
   title: dat.seo.title,
   description:dat.seo.desc,
 }
export default function Page() {
  return (
    <div>
      <div className='mt-20'>
        <Breadcrumb data={data.contact_us} />
      </div>
      <SlideIn>
        <Titlebar data={dat.titlebar} />
      </SlideIn>
      <SlideIn> 
      <div className='flex justify-center contactus-bgimg  mt-10 md:px-0 px-4'>
        <div className='w-full md:w-2/3 lg:w-1/2  md:px-0 px-4 bg-black my-20'>
          <div className=' md:p-10'>

            <div className='text-center'>
              <Heading data={data.contact_us} align='center' margin='md:my-8 my-4' />
              <p className='md:text-xl font-light text-sm  md:text-center text-justify'>{data.contact_us.desc}</p>
              <h2
                    className={`lg:text-5xl md:text-3xl text-4xl md:font-semibold text-theme-secondary-300 font-bold max-sm:text-center mt-10 my-4 ${fjalla_one.className}`}
                    dangerouslySetInnerHTML={{ __html: dat.heading.title }}
                ></h2>

              {/* <Heading data={data.contact_us.address} align='center' margin='mt-10 my-4' /> */}
              <p className='md:text-xl font-light text-sm  md:text-center text-justify'>{data.contact_us.address.desc}</p>
            </div>

            <div className='mt-10'>
              <Contact_us data='flex justify-center items-center' />
            </div>
          </div>
        </div>
      </div>
      </SlideIn>
    </div>
  );
}
