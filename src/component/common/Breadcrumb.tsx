import React from 'react';
import Link from 'next/link';

export const Breadcrumb = ({ data }: { data: any }) => {
    return (
        <div className='mt-24'>
            <div className='border-y-2 border-theme-secondary-200 py-3 top-0 z-10 md:mt-0 mt-28'>
                <div className='container px-4 mx-auto '>
                    <ul className="flex flex-wrap md:flex-nowrap space-x-4  ">
                        {data.items.map((item: any, index: any) => {
                            const isLastItem = index === data.items.length - 1;

                            return (
                                <li
                                    key={index}
                                    className="flex items-center md:text-xl font-light text-sm"
                                >
                                    {item.link ? (
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <span>{item.title}</span>
                                    )}

                                    {!isLastItem && <span className='font-bold pl-4'> - </span>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>



    );
};
