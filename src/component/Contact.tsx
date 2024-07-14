import React from 'react'
import { Contact_us } from './common/Contact_us'
import { Heading } from './common/Heading'
import { SlideIn } from './animations/SlideIn'

export const Contact = ({ data  }: { data: any  }) => {
    return (
         <SlideIn>
            <div className='mx-auto container px-4'>
                <Heading data={data.contact_title} align={'center'} margin={'md:my-10'} />
                <div className='flex flex-col md:flex-row md:p-0 p-5 md:gap-20'>
                    <div className='md:w-1/2 '>
                        <Heading data={data.contact_us} align={'left'} margin={'md:my-8 my-4'} />
                        <p className='md:text-xl font-light text-base text-justify'>{data.contact_us.desc}</p>
                    </div>
                    <div className='md:w-1/2 mt-8 md:mt-0'>
                        <Contact_us data={data} />  
                    </div>
                </div>
            </div>
        </SlideIn>
        
    )
}
