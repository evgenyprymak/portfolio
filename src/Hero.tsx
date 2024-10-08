import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { BlurScrollEffect } from './js/blurScrollEffect';
import SplitType from 'split-type';
import './css/Hero.css';

const Hero: React.FC = () => {
  const scrollTextRef = useRef<HTMLHeadingElement | null>(null);
  const clickTextRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (scrollTextRef.current) {
      new SplitType(scrollTextRef.current, { types: 'words' });
      new BlurScrollEffect(scrollTextRef.current); // Для анимации прокрутки
    }

    if (clickTextRef.current) {
      new SplitType(clickTextRef.current, { types: 'words' });
      new BlurScrollEffect(clickTextRef.current, true); // Для анимации клика
    }
  }, []);

   // 
  return (
    <div className='hero'>
      <p>
        <strong>Hi, I’m Evgeny.</strong>
      </p>
      <p ref={clickTextRef}>
      I create products that tackle real problems and bring value to both users and businesses. My journey covers everything from building products from the ground up to fine-tuning the details that make them better. Along the way, I’ve developed design systems, shaped processes, and led design teams. Collaboration is key for me—I love working closely with different teams, and I’m always learning new skills to keep improving how I work and what I deliver.      </p>
    </div>
  );
};

export default Hero;
