// import React from 'react';
import { motion } from "framer-motion"

const ProjectDetailsProcedural = () => {
  return (
    <div>
      yo!
      <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
    </div>
  );
};

export default ProjectDetailsProcedural;
