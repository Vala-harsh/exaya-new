"use client";
import React from "react";
import { motion } from "framer-motion";

export const SlideIn = ({ children }: { children: any }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 100 },
      }}
      transition={{ type: "tween" }}
    >
      {children}
    </motion.div>
  );
};
