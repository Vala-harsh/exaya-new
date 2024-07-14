
import Link from "next/link";
import { Button } from '@/component/common/Button'
import React from "react";
const data ={
  btntext: "Back to Home",
  btnlink: "/",
  type: "primary",
}
const NotFoundPage = () => {
  return (
    // <div className="flex justify-center items-center h-screen">
    <div className=" flex flex-col justify-center items-center container mx-auto  mt-24 px-4">
      <img src="/img/404error.svg" alt="404 Error" className="w-full  lg:w-2/5" />
      <div className="my-2">
      <Button data={data} align={""} border={"squre"} />
      </div>
    </div>
    // </div>
  );
};

export default NotFoundPage;
