import React from 'react'
import { Heading } from '../common/Heading'
import { fjalla_one } from '@/app/font'


export const Our_team = ({ data }: { data: any }) => {
    return (
        <div className='mx-auto px-4 container'>
            <div className='md:flex  justify-center md:gap-20'>

                {data.items.map((item: any, index: any) =>
                    <div className=" mt-10 " key={index}>
                        <Heading data={item} align={"left"} margin={""} />
                        <div className={`w-full ${index == 0 ? ' md:mt-10' : (index == 2 ? "md:mt-10 " : "")}`}>

                            <img src={item.img} alt={item.alt} className='w-full' />
                            <div className={` text-center bg-theme-secondary-300 text-black py-3  `}>

                                <h1 className={`md:text-3xl text-2xl mb-1 ${fjalla_one.className}`}>{item.title2}</h1>

                                <p className='text-xl font-normal'>{item.desc}</p>
                            </div>
                        </div>


                    </div>
                )}
            </div>
        </div>
    )
}
