import React from "react";
import Link from "next/link";
import { Heading } from "./common/Heading";
import { Button } from "./common/Button";
import { SlideIn } from "./animations/SlideIn";
import { Slideleft } from "./animations/Slideleft";
import { Slideright } from "./animations/Slideright";

export const Features = ({ data, imageside }: { data: any, imageside: any }) => {
    const imageDirections = {
        left: " md:flex md:flex-row-reverse md:flex-row justify-between items-center ",
        right: "md:flex md:flex-row justify-between md:space-x-0 sm:space-x-10 items-center ",
    };

    return (



        <div className="mx-auto container px-4 md:mt-5 pt-8 " id={data.id}>
            <div className={[imageDirections[imageside], ""].join(" ")}>
                <div className="animation-from-left">
                    <Slideleft>
                        <img src={data.img} alt={data.altimg} className="lg:h-[35rem] h-[30rem] w-full " />
                    </Slideleft>

                </div>
                <div className="animation-from-right p-5 md:text-left md:w-2/3">
                    <Slideright >

                        <Heading data={data} align={"left"} margin={"my-5"} />
                        <p className="md:text-xl font-light text-sm text-justify ">{data.desc}</p>
                        <div className="grid md:grid-cols-2 gap-y-5 my-8">
                            {data.items.map((item: any, index: any) => (
                                <div key={index} className="flex items-center md:text-xl font-light text-sm">
                                    <img className="px-3" src={item.img} alt={item.altimg} />
                                    {item.text}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 md:text-left text-center">
                            {data.contectus != null ? (
                                <Button align={"center"} type={""} data={data.contectus} border={"squre"}></Button>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </Slideright>
                </div>
            </div>
        </div>


    );
};