"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { fjalla_one } from "@/app/font";

export const Counter = ({ data }: { data: any }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef);

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!animationStarted && isInView) {
      setAnimationStarted(true);
      animate(count, parseInt(data.title.toString()), { duration: 2.5 });
    }
  }, [isInView]);

  return (

      <div className=" flex flex-col justify-center items-center md:mb-0 mb-6 text-center mt-10" ref={itemRef} >



        <div className={`font-bold text-5xl mb-2 counter text-black boder border-b-2 lg:w-80 w-48 ${fjalla_one.className}`}>

          <motion.span>{rounded}</motion.span>
          {data.unit ? <span className=" mt-2 md:mt-4">{data.unit}</span> : ''}

        </div>



        <p className=" md:text-xl font-light text-base mt-2 ">
          {data.desc}
        </p>
      </div>
    
  );
};
