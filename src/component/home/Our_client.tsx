"use client"
import React, { useRef } from 'react'
import { Heading } from '../common/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


export const Our_client = ({ data }: { data: any }) => {
    const ref = useRef(null);
    return (
        <div className='container mx-auto px-4'>
            <Heading data={data} align={"center"} margin={"mt-10"} />
            <div className='mt-10'>

                <Swiper
                
                    ref={ref}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    className='swiper_1' 
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 320px
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 640px
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 640px
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                            slidesPerGroup: 1
                        }
                    }}
                >
                    {data.items.map((item: any, index: any) => {
                        return (
                            <SwiperSlide key={index} >
                                        <div>
                                            <p className='text-center text-4xl font-bold opacity-40'>{item.title}</p>
                                        </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

        </div>
    )
}
