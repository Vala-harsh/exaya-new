import React from "react";
import { motion } from "framer-motion";

export const Animation_2 = ({ children }: { children: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity set to 0
      animate={{ opacity: 1 }} // Fade in by changing opacity to 1
      exit={{ opacity: 0 }} // Fade out by changing opacity to 0
      transition={{
        duration: 1,
        ease: "easeInOut",
        type: "tween"   
      }}
    >
      {children}
    </motion.div>
  );
};
