"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SlideIn } from '../animations/SlideIn';
import { fjalla_one } from '@/app/font';

export const Project_list = ({ data }: { data: any }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

 useEffect(() => {
  setSelectedCategory('all');
  setActiveCategory('all');
  
 }, [])
 
 
 const filteredProjects = selectedCategory === 'all'
    ? data.list.all
    : data.list.all.filter((item: any) => item.category === selectedCategory);
    
  return (  
    <SlideIn>
    <div className='container mx-auto px-4'>
      <div className='mt-10 flex flex-row justify-center   px-2 md:px-0'>

        <ul className='md:flex md:flex-wrap md:space-x-2 space-x-0 '> 
          {data.option.items.map((item: any, index: any) => (
            <button
              key={index}
              className={`text-base md:text-xl md:px-4 px-2 transition ease-in-out hover:text-theme-secondary-300 ${activeCategory === item.highlightedText ? 'border-b-4 border-theme-secondary-300 text-theme-secondary-300 transition ease-in-out  ' : 'border-transparent border-b-4 hover:border-theme-secondary-300  transition ease-in-out'}`}
              type='button'
              onClick={() => handleCategoryClick(item.highlightedText)}
            >
              
              {item.btnText}
            </button>
          ))}
        </ul>

      </div>
      <div className='mt-12'>

        <div className=''>
          <div className='grid  lg:grid-cols-4 md:grid-cols-2  md:gap-10 md:space-y-0 space-y-5 '>
           {filteredProjects && filteredProjects.map((item: any, index: any) => (
              <div key={index} className='flex flex-col '>
                <Link href={item.link} >
                  <div className=' overflow-hidden'>
                  <img src={item.img} alt={item.alt} className='h-72 lg:h-96 w-full  shadow-md hover:grayscale-0 grayscale transform transition-transform duration-[800ms] hover:scale-125  ease-linear' />
                  </div>
                 
                  <h2 className={`text-theme-secondary-300 mt-2 font-thin text-3xl ${fjalla_one.className}`}>{item.title}</h2>
                   <p className=" text-xl font-light ">{item.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
    </SlideIn>
  );
};

export default Project_list;
