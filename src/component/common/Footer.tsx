import React from 'react';
import data from "@/content/footer.json";
import Link from 'next/link';
import { Logo } from '../navigation/Logo';
import { fjalla_one } from '@/app/font';

export const Footer = () => {
  return (
    <div className="bg-black text-white mt-5">
      <div className="container mx-auto px-4 ">
        <div className="w-full flex flex-col lg:flex-row pt-10">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
            <Logo data={data.logo} />
            <p
              dangerouslySetInnerHTML={{ __html: data.logo.desc }}
              className="text-base mt-8 text-center  md:text-xl font-light lg:text-justify w-full lg:w-60 "
            ></p>
          </div>
          <div className="w-full lg:1/2 flex flex-col lg:flex-row lg:flex-shrink lg:space-x-5 lg:justify-between  px-0 mt-10 lg:mt-0 space-y-9 lg:space-y-0   ">
              <div className="flex flex-col items-center lg:items-start ">
                <div className={fjalla_one.className}>
                <p className="font-light text-center md:text-start md:text-2xl pb-4 text-base  ">
                  {data.Services.title}
                </p>
                </div>
               
                <div className="flex  flex-col text-center md:text-base text-sm lg:text-start space-y-3 mt-5 md:mt-0">
                  {data.Services.items.map((item, index) => (
                    <Link key={index} href={item.link} className="md:text-xl font-light hover:underline text-base hover:text-theme-secondary-300">
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start md:pt-0 pt-10">
                <div className={fjalla_one.className}>
                <p className="font-light text-center md:text-start md:text-2xl pb-4 text-base">
                  {data.company.title}
                </p>
                </div>
               
                <div className="flex  flex-col space-y-3 md:text-base text-sm text-center lg:text-start mt-5 md:mt-0">
                  {data.company.items.map((item, index) => (
                    <Link key={index} href={item.link} className="md:text-xl font-light hover:underline text-base hover:text-theme-secondary-300">
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start mt-5 md:mt-0 md:pt-0 pt-10">
                <div className={fjalla_one.className}>
                <p className="font-light text-center md:text-start md:text-2xl pb-4 text-base ">
                  {data.contectus.title}
                </p>
                </div>
               
                <div className="flex flex-col space-y-3 ">
                  <div className=" text-center md:text-base text-sm lg:text-start mt-5 md:mt-0">
                    <p className='md:text-xl font-light text-base '>{data.contectus.phone.text}</p>
                    <Link href={data.contectus.phone.telLink} className='md:text-xl font-light hover:underline text-base hover:text-theme-secondary-300'>
                      {data.contectus.phone.tel}
                    </Link>
                  </div>
                  <div className=" text-center md:text-lg  text-base lg:text-start">
                    <p className='md:text-xl font-light text-base'>{data.contectus.emailObj.text}</p>
                    <Link
                      href={data.contectus.emailObj.emailLink}
                      target="_blank"
                      className='md:text-xl font-light hover:underline text-base hover:text-theme-secondary-300'
                    >
                      {data.contectus.emailObj.email}
                    </Link>
                  </div>
                </div>
                <div className="md:mt-4 mt-2 text-center lg:text-start  text-base ">
                  <div className='md:text-xl font-light text-base'>{data.contectus.title2}</div>
                  <div className="flex  justify-center  lg:justify-start  text-base flex-row space-x-3 mt-2">
                    {data.contectus.icons.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className=""
                        target="_blank"
                      >
                        <img
                          src={item.img}
                          alt={item.altimg}
                          className="w-7 h-7"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="mt-10 ">
          <div className="border border-theme-secondary-300"></div>
          <div className="md:flex justify-between py-2 flex-col-reverse md:flex-row">
            <p className="text-center md:text-xl font-light text-sm md:text-left">
              Copyright © 2024 | All rights reserved
            </p>
            <p className="text-center md:text-xl font-light text-sm md:text-right">
              Designed by{' '}
              <a href="https://kiara.tech/" target="_blank" className=" md:text-xl text-sm hover:underline hover:text-theme-secondary-300 text-white">
                Kiara TechX
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

