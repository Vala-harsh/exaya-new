import { fjalla_one } from '@/app/font'
import React from 'react'


export const Goal = ({ data }: { data: any }) => {
    return (
        <div className='goal-bgimg'>
            <div className=' px-4 container mx-auto'>

                <div className='text-center md:pt-20 pt-10 text-black '>
                    <div className={fjalla_one.className}>
                        <h1 className='md:text-6xl text-2xl  '>{data.title}</h1>
                    </div>
                    <p className='my-10 md:text-2xl text-lg font-normal lg:p-0 p-1'>{data.desc}</p>
                </div>
            </div>
            <div className='bg-black md:mt-20 lg:py-10 py-5 bg-opacity-75 '>
            <div className=' px-4 container mx-auto'>
                    <div className='md:flex justify-center items-center text-center gap-20 '>
                        {data.items.map((item: any, index: any) =>
                            <div className='mt-10 md:w-1/3 w-full'>
                                <div className='flex justify-center items-center'>
                                    <img src={item.img} alt={item.alt} className='lg:w-28 md:20 ' />
                                </div>
                                <div className='lg:py-5 py-10'>
                                    <div className={fjalla_one.className}>
                                        <h1 className='text-theme-secondary-300 md:text-3xl text-2xl  '>{item.title}</h1>
                                    </div>
                                    <p className='lg:mt-5 mt-8 md:text-xl font-light text-sm  lg:p-0 md:p-0 p-2'>{item.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}
