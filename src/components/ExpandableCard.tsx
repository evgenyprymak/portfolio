import React, { useState, useRef } from 'react';
import { IoAddSharp } from "react-icons/io5";

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
    <div style={styles.card} className={`col align-self-start ${className || ''}`}>
      <div style={styles.header} onClick={toggleExpand}>
        <p>{title}</p>
        {/* Иконка с динамическим классом для поворота */}
        <IoAddSharp
          style={{
            transform: `rotate(${isExpanded ? 45 : 0}deg)`, // Поворот на 45 градусов
            transition: 'transform 0.3s ease', // Анимация поворота
          }}
          size={40} // Размер иконки
        />
      </div>
      <div
        ref={contentRef}
        style={{
          ...styles.contentWrapper,
          height: `${height}px`,
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    fontFamily: 'ObjectSans',
    borderRadius: '12px',
    padding: '16px',
    margin: '8px auto',
    backgroundColor: '#222',
  },
  header: {
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  contentWrapper: {
    overflow: 'hidden',
    transition: 'height 0.3s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
  },
  description: {
    marginTop: '16px',
    color: '#eee',
  },
};

export default ExpandableCard;
