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

const PageHero: React.FC<PageHero> = ({ wrapperclassName, headerwrapper, title, description,  alignment, color, colorDescription, imageMobile="/portfolio/assets/quasar/project_hero_quasar_960w.jpg", imageDesktop="/portfolio/assets/quasar/project_hero_quasar_2560w.jpg" }) => {
  return (
    <motion.div
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
    >
    <div className="page-hero-main">
      <div className={`page-hero-wrapper ${wrapperclassName}`}>
        <div className="page-hero-content">
          <div className={`page-hero-header-wrapper container-xxl ${headerwrapper}`}>
            <Header
              wrapperclassName="header px-2 z-3"
              alignment={alignment}
              size="large"
              title={title}
              color={color}
              colorDescription={colorDescription}
              description={description}
            />
          </div>
          <div className="page-hero-shade">
          </div>
          <img
            className="page-hero-image"
            srcSet={`${imageMobile} 960w, ${imageDesktop} 2560w`}
            sizes="(max-width: 960px) 960px,
            2560px"
            src={`${imageMobile}`}
            alt='Quasar'
          />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default PageHero;
