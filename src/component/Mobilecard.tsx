"use client"
import React, { useRef } from 'react'
import { Contact_us } from './common/Contact_us'
import { Heading } from './common/Heading'
import 'swiper/css';
import 'swiper/css/pagination';
import { fjalla_one } from '@/app/font'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export const Mobilecard = ({ data }: { data: any }) => {
    const swiperRef = useRef(null);
    return (
        <div className='container mx-auto px-4'>
            <div className="my-10">
                <Heading data={data} align={'center'} margin={'md:mt-12'} />
                <p className='md:text-xl font-light text-sm text-center mt-5'dangerouslySetInnerHTML={{ __html:data.desc}}></p>
            </div>
            <div className='my-12'>
            <Swiper
                 ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{clickable:true }}  modules={[Pagination]}
                   
                >
                    {data.items.map((item: any, index: any) =>
                        <SwiperSlide key={index}>
                            <Link href={item.link} className='block'>
                                <div className=' overflow-hidden'>
                                    <img src={item.img} alt={item.alt} className='h-72 lg:h-96 w-full  shadow-md  transform transition-transform duration-[800ms] hover:scale-125  ease-linear' />
                                </div>

                                <h2 className={`text-theme-secondary-300 mt-2 font-extralight text-3xl ${fjalla_one.className}`}>{item.title}</h2>
                                <p className=" text-base font-light ">{item.desc}</p>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}
