import React from 'react'
import { fjalla_one } from '@/app/font'

export const Titlebar = ({data}:{data:any}) => {
  return (
    <h1 className={`mx-auto container px-4 md:text-8xl  text-4xl pt-10 font-normal text-theme-secondary-300 seondary-font flex text-center items-center justify-center ${fjalla_one.className}`}>{data.title}</h1>
  )
}
