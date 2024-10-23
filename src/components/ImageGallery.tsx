// @ts-ignore
import React, { useEffect } from "react";
import { ImageNames } from './ImageNames';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../css/ImageGallery.css";

const basePath = 'assets/procedural/'; // путь до папки images в public

const squareVariants = {
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    scaleX: 1,
    transition: {
      duration: 1,
      delay: index * 0.25, // Задержка анимации в зависимости от индекса
      ease: "easeInOut",
    },
  }),
  hidden: { opacity: 0, scale: 1, scaleX: 1.5, y: 50 }, // Добавление начального вращения
};

const ImageGallery = () => {
  return (
    <div>
      <div className='row row-gap-10'>
        {ImageNames.map((name, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({
            triggerOnce: true, // анимация срабатывает один раз
            threshold: 0.1, // 10% элемента должны быть видимы для срабатывания
          });

          useEffect(() => {
            if (inView) {
              controls.start("visible");
            }
          }, [controls, inView]);

          return (
            <div className='col-6 col-lg-4 gallery-image-wrapper card-gap-10' key={name}>
              <motion.div
                ref={ref}
                initial="hidden"
                variants={squareVariants}
                animate={controls}
              >
                <img src={`${basePath}${name}`} className='gallery-image' alt={`Image ${index + 1}`} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
