import React from 'react';
import { Heading } from '../common/Heading';
import { SlideIn } from '../animations/SlideIn';
import { fjalla_one } from '@/app/font';

export const HeroSection = ({ data }: { data: any }) => {
    return (
      <SlideIn>
        <div className=' mt-10 relative '>
            <div className='relative'>
              <img src={data.img} alt={data.alt} className='w-full' />
              <div className={`absolute lg:bottom-5 lg:left-0 bottom-1 w-full ${fjalla_one.className}`}>
                <h1 className='text-theme-secondary-300 mt-2 font-thin text-4xl max-sm:text-center text-left container  mx-auto px-4'>
                  {data.title}
                </h1>
              </div>
            </div>
        </div>
      </SlideIn>
    );
};
