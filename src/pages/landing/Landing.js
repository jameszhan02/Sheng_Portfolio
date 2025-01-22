import { motion } from "motion/react";
import React, { useEffect } from "react";
import "./Landing.css";

function Landing() {
  useEffect(() => {}, []);

  const containerVariants = {
    animate: { transition: { staggerChildren: 1 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="splash-screen-container"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="open-notation-absolute"
      >
        ''
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0.3 }}
        animate={{ width: "fit-content", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="open-notation"
      >
        'Sheng Zhan'
      </motion.div>
    </motion.div>
  );
}

export default Landing;
