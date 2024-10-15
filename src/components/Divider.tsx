import React from 'react';
import '../css/Divider.css';

interface CardProps {
  type?: string;
  className?: string;
}

const Divider: React.FC<CardProps> = ({ className }) => {
  return (
    <div className={`divider-wrapper ${className || ''}`}>
      <div className="divider"></div>
    </div>
  );
};

export default Divider;
