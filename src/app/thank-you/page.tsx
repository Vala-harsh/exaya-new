import Link from "next/link";
import React from "react";
import { Button } from '@/component/common/Button'

import { Metadata } from 'next'
export const metadata: Metadata  = {
   title: "Thank You | Ekaya Studio",
   description: "Ultimately, interior design aims to create environments that enhance the quality of life, evoke certain moods or emotions."
 }
  const data ={
    btntext: "Back to Home",
    btnlink: "/",
    type: "primary",
  }
export default function page() {
  return (
    <div className=" flex flex-col justify-center items-center container mx-auto md:mt-20 mt-24 px-4">
      <img src="/img/thankyou/thankyou.svg" className="max-md:h-80" alt="Thank you" />
      <p className=" md:text-xl text-center">
        We received your request. We'll get back to you soon...
      </p>
      <Button data={data} align={""} border={"squre"} />
    </div>
  );
}
