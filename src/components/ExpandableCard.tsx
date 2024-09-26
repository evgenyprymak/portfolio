import React, { useState, useRef } from 'react';
import { IoAddSharp } from "react-icons/io5";
import '../css/ExpandableCard.css'; // Подключаем CSS файл

interface CardProps {
  className?: string;
  title: string;
  description: string;
}

const ExpandableCard: React.FC<CardProps> = ({ className, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (contentRef.current) {
      setHeight(isExpanded ? 0 : contentRef.current.scrollHeight);
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`expandable-card col align-self-start ${isExpanded ? 'expandable-card--expanded' : ''} ${className || ''}`}
      onClick={toggleExpand}
    >
      <div className="expandable-card__header">
        <p>{title}</p>
        <IoAddSharp
          className="expandable-card__icon"
          style={{ transform: `rotate(${isExpanded ? 45 : 0}deg)` }} // Поворот иконки
          size={40} // Размер иконки
        />
      </div>
      <div
        ref={contentRef}
        className="expandable-card__content"
        style={{
          height: `${height}px`,
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <p className="expandable-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ExpandableCard;
