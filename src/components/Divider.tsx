import React from 'react';
import '../css/Divider.css';

interface CardProps {
  type?: "dark" | "light"; 
  className?: string;
  smallMargin?: boolean;
}

const Divider: React.FC<CardProps> = ({ className, type = 'dark', smallMargin = false }) => {
  return (
    <div className={`divider-wrapper ${className || ''} ${smallMargin ? 'small-margin' : ''}`}>
      <div className={`divider ${type}`}></div>
    </div>
  );
};

export default Divider;
