import React from 'react'
import { Heading } from '../common/Heading'
import { SlideIn } from '../animations/SlideIn'


export const About_project = ({ data }: { data: any }) => {
    return (
        <SlideIn>
        <div className='container mx-auto px-4 md:mt-10 mt-5'>
            <div className='md:flex justify-between mt-5 md:mt-0'>
                <div className=' w-full md:w-1/2 md:mb-0 mb-4'>
                    <p className='font-light md:text-xl text-sm'>{data.desc}</p>
                </div>
                <div className='w-full md:w-1/3  md:mt-0 mt-10  '>
                    {data.items.map((item: any, index: any) =>
                        <div className='flex justify-between text-base font-normal border-b-2 border-theme-primary-300 '>
                            <h1 className='text-theme-secondary-300 md:text-xl text-sm lg:py-4 py-4 md:py-2 md:pr-4'>{item.title}</h1>
                            <p className='lg:py-4 py-4 md:text-xl text-sm lg:pr-2 md:py-2  w-1/2'>{item.desc}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
        </SlideIn>
    )
}
