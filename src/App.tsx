import React, { useRef } from 'react';
import { BlurScrollEffect } from './js/blurScrollEffect';
import SplitType from 'split-type';
import './App.css';

const App: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null); // Ссылка на текстовый элемент

  const handleClick = () => {
    if (textRef.current) {
      // Создание экземпляра SplitType при клике
      const splitInstance = new SplitType(textRef.current, { types: 'words' });
      console.log('Words:', splitInstance.words); // Выводим слова в консоль

      // Создание экземпляра BlurScrollEffect при клике
      new BlurScrollEffect(textRef.current);
    }
  };

  return (
    <div>
      <h1 ref={textRef} onClick={handleClick}>
        Прокручивай, чтобы увидеть эффект размытия текста при прокрутке!
      </h1>
      {/* Другие элементы контента */}
    </div>
  );
};

export default App;
