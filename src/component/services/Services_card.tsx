import React, { useState } from 'react';
import { fjalla_one } from '@/app/font';
import { Slideright } from '../animations/Slideright';
import { Slideleft } from '../animations/Slideleft';

export const Services_card = ({ data }: { data: any }) => {
    


    return (
        <div className=' mx-auto px-4  md:mt-20 '>
            <div className=''>
                {data.items.map((item: any, index: any) => (
                    <div
                        key={index}
                        id={item.id}
                        className=''
                    >
                       <div className='w-full h-full md:my-10 my-5'>
                       {index % 2 === 0 ? (
                            <>
                            <Slideright>
                                <div className='flex flex-col md:flex-row justify-between items-center   bg-theme-primary-950 '>
                                    <div className='md:w-1/2 w-full'>
                                        <img src={item.img} alt={item.alt} className="lg:h-[20rem] md:w-auto w-full" />
                                    </div>
                                    <div className='md:w-1/2 w-full p-2 md:mr-6'>
                                        <div className={fjalla_one.className}>
                                            <h1 className='text-theme-secondary-300 font-thin md:text-3xl text-lg md:mt-0 mt-5'>{item.title}</h1>
                                        </div>
                                        <p className='md:mt-5 mt-2 md:text-xl font-light text-sm text-justify'>{item.desc}</p>
                                    </div>
                                </div>
                            </Slideright>
                            </>
                        ) : (
                            <>
                            <Slideleft>
                                <div className='flex flex-col-reverse md:flex-row justify-between md:items-center bg-theme-primary-900 '>
                                    <div className='md:w-1/2 w-full p-2 md:ml-6'>
                                        <div className='md:text-right text-justify md:mt-0 mt-5'>
                                            <div className='text-theme-secondary-300 font-thin md:text-3xl text-lg'>
                                                <h1 className={fjalla_one.className} >{item.title}</h1>
                                            </div>
                                            <p className='md:mt-5 mt-2 md:text-xl font-light text-sm text-justify'>{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img src={item.img} alt={item.alt} className="lg:h-[20rem] md:w-auto w-full" />
                                    </div>
                                </div>
                                </Slideleft>    
                            </>
                        )}
                       </div>
                    </div>
                ))}
            </div>
        </div >
    );
};
