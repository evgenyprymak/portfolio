import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { BlurScrollEffect } from './js/blurScrollEffect';
import SplitType from 'split-type';
import './css/Hero.css';

const App: React.FC = () => {
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

  return (
    <div className='hero'>
      <p ref={clickTextRef}>
      <strong>Hi, I’m Evgeny.</strong> 
      </p>
      <p ref={clickTextRef}>
      I design products that solve real problems and create value for both users and businesses. Every project is a journey toward success.
      </p>
    </div>
  );
};

export default App;
