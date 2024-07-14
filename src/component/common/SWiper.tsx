"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

import { Autoplay, Navigation} from "swiper/modules";

export const SWiper = ({ data }: { data: any }) => {
    const ref = useRef(null);
    return (
      <div>
      <Swiper
      navigation={true}
      ref={ref}
      loop={true}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
      modules={[Autoplay, Navigation]}
      breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          // when window width is >= 320px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 1024px (laptop view)
          1024: {
            slidesPerView: 4, // Display 2 cards
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4, // Display 3 cards
            spaceBetween: 40,
            slidesPerGroup: 1,
          },
        }}

    >
           <div className=''>
                    {data.items.map((item: any, index: any) => {
                        return (
                               <SwiperSlide key={index} className="">
                                <div className="">
                                    <img src={item.img} alt={item.alt} style={{width: "100%"}} />
                                    <h2 className='text-theme-secondary-300 font-normal'>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )}
                </div>
    </Swiper>
    </div>
    )
 }