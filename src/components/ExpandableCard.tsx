import React, { useState, useRef } from 'react';
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"; // Импортируем сразу две иконки

import '../css/ExpandableCard.css';

interface CardProps {
  wrapperclassName?: string;
  className?: string;
  title: string;
  description: string;
}

const ExpandableCard: React.FC<CardProps> = ({ wrapperclassName, className, title, description }) => {
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
    <div className={`'card-gap-10' ${wrapperclassName || ''}`}>
      <div
        className={`expandable-card align-self-start ${isExpanded ? 'expandable-card--expanded' : ''} ${className || ''}`}
        onClick={toggleExpand}
      >
        <div className="expandable-card__header">
          <div>{title}</div>
          <div className='expandable-card__icon-wrapper'>
            {isExpanded ? (
              <IoRemoveSharp
                className="expandable-card__icon expandable-card__icon--visible"
                size={20}
              />
            ) : (
              <IoAddSharp
                className="expandable-card__icon expandable-card__icon--visible"
                size={20}
              />
            )}
          </div>
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
    </div>
  );
};

export default ExpandableCard;
