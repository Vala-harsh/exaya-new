import Link from "next/link";
import React from "react";
import { Loading } from "./loading/Loading";

export const Button = ({
  data,
  type = "button",
  loading,
  border,
  align 
}: {
  data: any;
  align:any
  type?: any;
  border?: any;
  loading?: boolean;
}) => {
  const { btnlink, btntext } = data;
  const borders = {
    rounded: "rounded-full",
    squered: ""
  }
  // const AS = btnlink ? Link : "div";
  return (
    <div className={align}>
    <MyComponent href={btnlink} >
      <button
        type={type}
        className={["h-10 transition-all ease-in-out duration-100 font-primary text-white   bg-theme-primary-950  inline-block  px-6    text-xl text-center border-theme-secondary-300 border hover:border-theme-secondary-300  hover:bg-theme-secondary-300", borders[border],
        ].join(' ')}
      >
        {loading ? (
          <Loading as="span" />
        ) : (
          <div className="">
            {btntext}
            
          </div>
        )}
      </button>
    </MyComponent>
    </div>
  );
};


const MyComponent = ({ href, children }: any) => {
  return (
    <>
      {
        href ? (
          <Link href={href}>{children}</Link>
        ) : (
          <div>{children}</div>
        )
      }
    </>
  )
}
