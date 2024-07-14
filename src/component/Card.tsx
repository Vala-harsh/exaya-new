"use client"
import React, { useEffect, useRef, useState } from "react";
import { fjalla_one } from '@/app/font'
import { Heading } from './common/Heading';
import { Button } from "./common/Button";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
// import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

export const Card = ({ data, imageside, snapDirections }: { data: any, imageside: any, snapDirections: any }) => {
    const imageDirections = {
        left: " md:flex md:flex-row-reverse md:flex-row  items-center gap-5 ",
        right: "md:flex md:flex-row items-center  gap-5",

    };

    const [swiper, setSwiper] = useState(null);

    const swiperRef = useRef(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (!initialized && snapDirections === "end" && swiperInstance) {
            swiperInstance.slideTo(swiperInstance.slides.length - 1, 0);
            setInitialized(true);
        }
    }, [initialized, snapDirections]);

    const handleMoveLeft = () => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (swiperInstance) {
                swiperInstance.slidePrev();
            }
        }
    };

    const handleMoveRight = () => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (swiperInstance) {
                swiperInstance.slideNext();
            }
        }
    };



    const handleSwiper = (swiper) => {
        if (swiper) {
            setSwiper(swiper);
        }
    };

    const handleSlideChange = () => {
        // You can add logic here for slide change if needed
    };




    return (
        <div className='mx-auto container px-4 space-y-12'>
            <div className="my-10">
                <Heading data={data} align={'center'} margin={'md:mt-12'} />
                <p className='md:text-xl font-light text-sm text-center mt-5 'dangerouslySetInnerHTML={{ __html:data.desc}}></p>
            </div>
            <div className={[imageDirections[imageside], " "].join(" card   ")}
            >
                <Swiper
                    ref={swiperRef}

                    onSwiper={handleSwiper}
                    onSlideChange={handleSlideChange}
                    // slidesPerView={3}
                    // spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 640px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        },
                        // when window width is >= 640px
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        }
                    }}
                >
                    {data.items.map((item: any, index: any) =>
                        <SwiperSlide key={index}>
                            <Link href={item.link} className='block'>
                                <div className=' overflow-hidden'>
                                    <img src={item.img} alt={item.alt} className='h-72 lg:h-96 w-full  shadow-md  transform transition-transform duration-[800ms] hover:scale-125  ease-linear' />
                                </div>

                                <h2 className={`text-theme-secondary-300 mt-2 font-thin text-3xl ${fjalla_one.className}`}>{item.title}</h2>
                                <p className=" text-base font-light ">{item.desc}</p>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>

                <div>
                    {imageside === "left" && (
                        <div className="group">
                          
                        <div className="group">
                            <button
                                onClick={handleMoveLeft}
                                className=" border border-theme-secondary-300 rounded-full bg-black   p-1"
                            >
                                <div className=" bg-theme-primary-800  group-hover:bg-theme-secondary-300 transition-all ease-in-out duration-100 rounded-full p-1 focus:outline-none focus:shadow-outline  ">
                                    <div className=" flex justify-center items-center  rounded-full md:w-6  md:h-6 m-1">
                                        <img src={data.img} alt={data.alt} className="md:w-4 h-3 w-3 md:h-4" />
                                    </div>
                                </div>
                            </button>
                        </div>

                                 
                        </div>

                    )}


                    {imageside === "right" && (
                        <div className="group">
                            <button
                                onClick={handleMoveRight}
                                className=" border border-theme-secondary-300 rounded-full bg-black p-1"
                            >
                                <div className=" bg-theme-primary-800 group-hover:bg-theme-secondary-300 transition-all ease-in-out duration-100 rounded-full p-1 focus:outline-none focus:shadow-outline  ">
                                    <div className=" flex justify-center items-center  rounded-full md:w-6  md:h-6 m-1">
                                        <img src={data.img} alt={data.alt} className="md:w-4 h-3 w-3 md:h-4" />

                                    </div>
                                </div>
                            </button>
                        </div>

                    )}
                </div>

            </div>
            <div className="">
                {data.contectus != null ? <Button align={'flex justify-center items-center'} data={data.contectus} border={"squre"}></Button> : <p></p>}
            </div>
        </div>
    );
};
