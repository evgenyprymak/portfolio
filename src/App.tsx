import React, { useEffect, useRef } from 'react';
import { BlurScrollEffect } from './js/blurScrollEffect';
import SplitType from 'split-type';
import './css/App.css';

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
    <div className='card'>

      <h1 ref={clickTextRef}>
        Нажми на этот текст, чтобы увидеть эффект размытия при клике!
      </h1>
    </div>
  );
};

export default App;
