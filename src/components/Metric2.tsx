import React from 'react';
import '../css/Metric2.css';

interface MetricProps {
  className?: string;
  above?: string;
  mainmetric?: string;
  below?: string;
  color?: string; // Опциональный пропс
}

const Metric1: React.FC<MetricProps> = ({ className, above, mainmetric, below, color="#555555" }) => {
  return (
    <div className={`metric2_card ${className || ''}`}>
      <p className="metric2_above">{above}</p>
      <p className="metric2_main_number" style={{ color }}>{mainmetric}</p>
      <p className="metric2_below">{below}</p>
    </div>
  );
};

export default Metric1;
