"use client";
import React, { useRef, useEffect, useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import data from "@/content/navbar.json";
import { useRouter } from "next/navigation";
import { Button } from "../common/Button";
import { SlideIn } from "../animations/SlideIn";
import { Slidedown } from "../animations/Slidedown";
// import { motion } from "framer-motion";
// import { Option } from "@/component/hompage/Option";

export const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false)
  const pathname = usePathname()
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-theme-secondary-300 transition ease transform duration-300`;
  const searchParams = useSearchParams()

  const [isScrolling, setIsScrolling] = useState(false)

  // hide the menu when route changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // hide the menu when route changes
  useEffect(() => {
    setIsMainMenuOpen(false)
  }, [pathname, searchParams])
  const isMobile = () => {
    const width = typeof window !== "undefined" ? window.innerWidth : 0;
    return width < 768;
  };
  return (
    
      <div className="bg-black  fixed w-full top-0 z-10 drop-shadow-sm">
        <div className="container  mx-auto px-4">
          <div className="lg:flex hidden py-3  items-center h-full justify-between ">
            <Logo data={data.logo} />
            <div className=" flex justify-between lg:gap-6 xl:gap-16 items-center h-full pr-5">
              {data.nav.items.map((item: any, index: any) => (
                <Link
                  key={index}
                  href={item.link}
                  className={["text-xl font-light   text-center hover:text-theme-secondary-300  border-b-2 hover:border-theme-secondary-300  transition ease transform duration-600", item.link === pathname ? 'text-theme-secondary-300 border-b-2 border-theme-secondary-300 transition ease transform duration-600' : 'border-transparent'].join(" ")}
                  style={{ paddingBottom: "4px" }} // Adjust as needed for spacing
                >
                  {item.text}
                </Link>
              ))}
             
            </div>
          </div>
         
          <div className="lg:hidden block">
            <div className=" flex justify-between items-center py-6 ">
              <Logo data={data.logo} />

              <button
                className="flex flex-col h-12 w-12 justify-center items-center "
                aria-label="Main Menu"
                onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${isMainMenuOpen
                      ? "rotate-45 translate-y-3"
                      : " "
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isMainMenuOpen
                      ? "opacity-0"
                      : ""
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isMainMenuOpen
                      ? "-rotate-45 -translate-y-3 "
                      : " "
                    }`}
                />
              </button>
            </div>
          
            {isMainMenuOpen ? (
                <Slidedown>
              <div className="  h-screen-without-navbar border-b-2">
                <div className="flex h-screen flex-col  items-center divide-y  divide-theme-secondary-300">
                  {data.nav.items.map((item: any, index: any) => (
                    <div className=" w-full text-center py-4" key={index}>
                      <Link className={["hover:text-theme-secondary-300  text-xl font-light text-center", item.link === pathname ? 'text-theme-secondary-300' : ''].join(" ")}
                        href={item.link}>
                        {item.text}
                      </Link>
                    </div>
                  ))}
                  <div

                    onClick={() => setIsScrolling(true)}
                    onMouseEnter={() => setIsScrolling(true)}
                    onMouseOut={(e) => setIsScrolling(false)}
                    className="   text-xl py-2  text-center w-full "
                  >

                  </div>
                  {/* <Button data={data.contectus} border={"rounded"}></Button> */}
                </div>
              </div>
            </Slidedown>
            ) : null}
          </div>
         
        </div>
      </div>

    
  );
};
