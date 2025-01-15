import React from "react";
import Header from "./Header";
import '../css/PageHero.css';
import { motion } from "framer-motion"

interface PageHero {
  wrapperclassName?: string;
  headerwrapper?: string;
  className?: string;
  title: string | JSX.Element;
  description?: string | JSX.Element;
  alignment?: "left" | "center";
  color?: string;
  colorDescription?: string;
  imageMobile?: string;
  imageDesktop?: string;
}

const PageHero: React.FC<PageHero> = ({ wrapperclassName, headerwrapper, title, description, alignment, color, colorDescription, imageDesktop = "/portfolio/assets/quasar/project_hero_quasar_2560w.jpg" }) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className={`page-hero-main ${wrapperclassName}`}>
        <div className={`page-hero-header-wrapper container-xxl ${headerwrapper}`}>
          <Header
            wrapperclassName="header z-3 px-1"
            alignment={alignment}
            size="large"
            title={title}
            color={color}
            colorDescription={colorDescription}
            description={description}
          />
        </div>
        <div className="page-hero-imageWrapper">
          <div className="page-hero-shade">
          </div>
          {/* <div
            className="page-hero-image"
            style={{ backgroundImage: `url(${imageDesktop})` }}
          >
          </div> */}
          <img
            className="page-hero-image"
            src={`${imageDesktop}`}
            alt='Quasar'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageHero;
