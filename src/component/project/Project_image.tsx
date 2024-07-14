"use client"
import React, { useEffect, useState } from 'react';
import { Heading } from '../common/Heading';
import { SlideIn } from '../animations/SlideIn';

export const Project_image = ({ data }: { data: any }) => {
    const [width, setWidth] = useState('62%')

    useEffect(() => {
        const handleResize = () => {
            // Set width to 100% on screens smaller than 480px
            if (window.innerWidth <= 768) {
                setWidth('100%');
            } else {
                setWidth('62%'); // Set back to default width
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <SlideIn>
            <div className='container mx-auto px-4 mt-20'>

                <div className=''>
                    <img src={data.img_1} alt={data.alt_1} className='w-full' />
                </div>
                <div className='lg:flex   justify-between  mt-10'>
                    
                    <img src={data.img_2} alt={data.alt_2} className='lg:w-auto w-full ' />
                    <img src={data.img_3} alt={data.alt_3} className='mt-5 lg:mt-0' style={{ width }}   />
                </div>
                <div className='mt-10'>
                    <img src={data.img_4} alt={data.alt_4} className='w-full' />
                </div>
                <div className='lg:flex justify-between mt-10 '>
                    <img src={data.img_6} alt={data.alt_6} style={{ width }} />
                    <img src={data.img_5} alt={data.alt_5} className='mt-5 lg:mt-0 lg:w-auto w-full' />
                </div>
            </div>


        </SlideIn>
    );
};
