import React from 'react'

import { Heading } from '@/component/common/Heading'
import { Button } from '../common/Button'
import { Counter } from '../common/Counter'
import Link from 'next/link'

export const Our_services = ({ data }: { data: any }) => {
    return (
        <div className='container mx-auto px-4'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <Heading data={data} align={"left"} margin={"md:mt-20 mt-10"} />
                   
                </div>
                <div className='md:mt-20 mt-10 lg:text-right text-center'>
                    <Button data={data} align={""} border={"squre"} />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-y-5 gap-x-16'>
                {data.items.map((item: any, index: any) =>
                    <div className='flex justify-start items-center gap-5 lg:pl-0 pl-8'>
                        <div>
                            <img src={item.img} alt={item.alt} />
                        </div>
                        <div>
                            <Link href={item.link} className=' md:text-xl text-sm   hover:text-theme-secondary-300 hover:underline' >{item.title}</Link>
                        </div>
                    </div>
                )}
            </div>
            <div
                className={[
                    "mt-10 md:flex justify-evenly items-center",
                ].join(" ")}
            >
                {data.counters.items.map((item: any, index: any) => (
                    <Counter data={item} key={index} />
                ))}
            </div>
        </div>
    )
}
