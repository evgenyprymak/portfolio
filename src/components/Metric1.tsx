import React from 'react';
import '../css/Metric1.css';

interface MetricProps {
  className?: string;
  above?: string;
  mainmetric?: string;
  below?: string;
  color?: string;
}

const Metric1: React.FC<MetricProps> = ({ className, above, mainmetric, below, color="#555555" }) => {
  return (
    <div className={`metric1_card ${className || ''}`}>
      <p className="metric1_above">{above}</p>
      <p className="metric1_main_number" style={{ color }}>{mainmetric}</p>
      <p className="metric1_below">{below}</p>
    </div>
  );
};

export default Metric1;
