import { fjalla_one } from '@/app/font'
import React from 'react'

export const Heading = ({ data, align, margin  }: { data: any, align: any, margin: any }) => {
    const aligns = {
        left: 'md:text-left text-center',
        center: 'text-center',
        right: 'md:text-right text-center',
    }

    return (
        <div className={['', aligns[align],
        ].join(' ')}>
            <div className=''>
                <h1
                    className={`lg:text-7xl md:text-5xl text-white text-4xl md:font-semibold font-bold max-sm:text-center ${fjalla_one.className} ${margin}`}
                    style={{ lineHeight: '1.3' }}
                    dangerouslySetInnerHTML={{ __html: data.title }}
                ></h1>

            </div>
        </div>
    )
}
