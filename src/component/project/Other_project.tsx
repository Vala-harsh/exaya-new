import React from 'react'
import { Heading } from '../common/Heading'
import Link from 'next/link'
import { Button } from '../common/Button'
import { SlideIn } from '../animations/SlideIn'
import { fjalla_one } from '@/app/font'


export const Other_project = ({ data }: { data: any }) => {
    return (
        <SlideIn>
            <div className='container mx-auto px-4 my-10 lg:my-20'>
                <div>
                    <Heading data={data} align={"left"} margin={"my-10"} />
                </div>
                <div className='grid  lg:grid-cols-4 md:grid-cols-2 md:gap-10 md:space-y-0 space-y-5 '>
                    {data.items.map((item: any, index: any) =>
                        <div key={index} className=''>
                            <Link href={item.link} className='block'>
                                <div className=' overflow-hidden'>
                                    <img src={item.img} alt={item.alt} className='h-72 lg:h-96 w-full  shadow-md hover:grayscale-0 grayscale transform transition-transform duration-[800ms] hover:scale-125  ease-linear' />
                                </div>

                                <h2 className={`text-theme-secondary-300 mt-2 font-extralight text-3xl ${fjalla_one.className}`}>{item.title}</h2>
                                <p className="md:text-xl text-sm font-light ">{item.desc}</p>
                            </Link>
                        </div>
                    )}
                </div>
                <div className='mt-10 text-center'>
                    <Button data={data} align={"text-center"} border={"squre"} />
                </div>
            </div>
        </SlideIn>

    )
}
