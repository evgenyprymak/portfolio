import React, { useEffect } from "react";
import '../css/Footer.css';
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Divider from "./Divider";

const squareVariants = {
  visible: () => ({
    opacity: 1,
    scale: 1,
    y: 0,
    scaleX: 1,
    transition: {
      duration: 1,
      delay: 0,
      ease: "easeInOut",
    },
  }),
  hidden: { opacity: 0, scale: 1, scaleX: 0.9, y: 0 },
};

const Footer: React.FC = () => {
  const controls = useAnimation(); // Initialize controls for animation
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        variants={squareVariants}
        animate={controls}
        custom={1} // Adding an index value for delayed animation
      >
        <Divider type="light" />
        <div className="footer-wrapper row-gap-2">
          <Link to="/" className="return-home card-gap-2">Return Home</Link>
          <div className="footer-btns">
          <a href="https://www.linkedin.com/in/evgenyprymak/" className="col-6 btn-linkedin"><img src='/portfolio/assets/icons/icon_linkedin.svg' style={{ height: '24px', marginLeft: '8px', marginRight: '8px', marginTop: '-2px'}}></img>LinkedIn</a>
          <a href="https://drive.google.com/file/d/1u-RuCyojZ77YW-6CqajPDBz1JkzBudT7/view"  className="col-6 btn-linkedin"><img src='/portfolio/assets/icons/icon_pdf.svg' style={{ height: '24px', marginLeft: '8px', marginRight: '8px', marginTop: '-2px'}}></img>Resume</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
