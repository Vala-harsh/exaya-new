"use client";
import React from "react";
import { motion } from "framer-motion";

export const Slideright = ({ children }: { children: any }) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0 },
          hidden: { opacity: 0, scale: 1, x: 200 },
        }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
