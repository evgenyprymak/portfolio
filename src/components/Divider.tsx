import React from 'react';
import '../css/Divider.css';

interface CardProps {
  type?: "dark" | "light"; 
  className?: string;
}

const Divider: React.FC<CardProps> = ({ className, type='dark' }) => {
  return (
    <div className={`divider-wrapper ${className || ''}`}>
      <div className={`divider ${type}`}></div>
    </div>
  );
};

export default Divider;
