"use client";
import React from "react";
import { motion } from "framer-motion";

export const Slidedown = ({ children }: { children: any }) => {
  return (
    
    <motion.div
      initial="hidden"
      whileInView="visible"
     
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y:  -60},
      }}
      transition={{ type: "tween" , duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};