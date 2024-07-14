'use client';
import React, { useState } from "react";
import { Button } from "@/component/common/Button";
import { Heading } from "@/component/common/Heading";
import { Slidedown } from "../animations/Slidedown";
import { Slideup } from "../animations/Slideup";
import { Animation_2 } from "../animations/Animation_2";

export const Herosection = ({ data, imageside }: { data: any; imageside: any }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageDirections = {
        left: " lg:flex lg:flex-row-reverse lg:flex-row justify-between items-center ",
        right: "lg:flex lg:flex-row justify-between lg:space-x-24 items-center ",
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="mx-auto lg:h-[34rem]   container  px-4 md:mt-5 mt-12 pt-16 ">
            {data.map((item: any, index: any) => (
                <div key={index} className={[imageDirections[imageside], ""].join(" ")}>
                    {/* Use currentIndex to determine the current image and content */}

                    <div className={`flex items-center justify-center  h-96 lg:w-1/2  relative max-sm:h-[10rem] ${index === currentIndex ? "display" : "hidden"}`}>

                        <div style={{ overflow: 'hidden', marginRight: '' }} className="absolute ">

                            <Slidedown>
                                <div>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="h-full relative lg:w-96 w-28 "
                                        style={{
                                            clipPath: 'inset(25% 75% 5% 0%)',
                                            height: '550px',
                                            width: '500px',
                                            ...(window.innerWidth <= 600 && { height: '300px' }),
                                        }}
                                    />
                                </div>
                            </Slidedown>

                        </div>

                        <div style={{ overflow: 'hidden', marginRight: '' }} className="absolute md:pl-2 pl-1">
                            <Slideup>
                                <div>
                                    <img src={item.img} alt={item.alt} className="h-full lg:w-96 w-28 max-sm:h-[8rem] " style={{ clipPath: 'inset(0% 50% 0% 25%)', height: "550px", width: "500px",  ...(window.innerWidth <= 600 && { height: '300px' }) }} />
                                </div>

                            </Slideup>

                        </div>
                        <div style={{ overflow: 'hidden', marginRight: '' }} className="absolute md:pl-4 pl-2 ">
                            <Slidedown>
                                <div>
                                    <img src={item.img} alt={item.alt} className="h-full lg:w-96 w-28 max-sm:h-[8rem]" style={{ clipPath: 'inset(30% 25% 10% 50%)', height: "550px", width: "500px" ,  ...(window.innerWidth <= 600 && { height: '300px' }) }} />
                                </div>

                            </Slidedown>

                        </div>
                        <div style={{ overflow: 'hidden', marginRight: '' }} className="absolute md:pl-6 pl-4 ">
                            <Slideup>
                                <div>
                                    <img src={item.img} alt={item.alt} className="h-full lg:w-96 w-28 max-sm:h-[8rem]" style={{ clipPath: 'inset(22% 0% 0% 75%)', height: "550px", width: "500px" ,  ...(window.innerWidth <= 600 && { height: '300px' })}} />
                                </div>

                            </Slideup>

                        </div>
                    </div>
                    <div className={`lg:pr-10 py-5 lg:w-1/2  lg:mt-0 md:mt-10 mt-20 lg:text-left ${index === currentIndex ? "display" : "hidden"}`} >
                        {index === currentIndex ? <Animation_2>
                            <Heading data={item} align={"left"} margin={"md:my-5"} />
                            <p className=" md:text-xl font-light text-sm text-justify ">
                                {item.desc}
                            </p>
                        </Animation_2> : ""}


                        <div className="md:mt-4 lg:text-left  text-center">
                            {data.contectus != null ? (

                                <Button align={"left"} data={item.contectus} border={"rounded"}></Button>
                            ) : (
                                <p></p>
                            )}
                        </div>

                        <div className="flex  lg:justify-start justify-center lg:space-x-2 space-x-2  ">
                            <div className="group">
                                <button
                                    onClick={handlePrevious}
                                    className="group  border border-theme-secondary-300 rounded-full bg-black p-1"
                                >
                                    <div className="hover:bg-theme-secondary-300 hover:transition-all bg-theme-primary-800 rounded-full p-1 focus:outline-none focus:shadow-outline  ">
                                        <div className=" flex justify-center items-center  rounded-full md:w-6  md:h-6 m-1">
                                            <img src="/img/home/right_arrow.svg" alt="right arrow" className=" md:w-4 h-3 w-3 md:h-4" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="group">
                                <button
                                    onClick={handleNext}
                                    className="group border border-theme-secondary-300 rounded-full bg-black p-1"
                                >
                                    <div className="hover:bg-theme-secondary-300 hover:transition-all bg-theme-primary-800 rounded-full p-1 focus:outline-none focus:shadow-outline  ">
                                        <div className=" flex justify-center items-center  rounded-full md:w-6  md:h-6 m-1">
                                            <img src="/img/home/left_arrow.svg" alt="left arrow" className="md:w-4 h-3 w-3 md:h-4" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            ))
            }
        </div >
    );
};
