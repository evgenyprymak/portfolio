import React from 'react';
import '../css/Metric1.css';

interface MetricProps {
  className?: string;
  above?: string;
  mainmetric?: string;
  below?: string;
  color?: string; // Опциональный пропс
}

const Metric1: React.FC<MetricProps> = ({ className, above, mainmetric, below, color }) => {
  return (
    <div className={`metric1_card ${className || ''}`}> {/* Объединяем классы */}
      <p className="metric1_above">{above}</p>
      <p className="metric1_main_number" style={{ color }}>{mainmetric}</p>
      <p className="metric1_below">{below}</p>
    </div>
  );
};

// Устанавливаем значения по умолчанию для пропсов
Metric1.defaultProps = {
  color: '#555555', // Значение по умолчанию для цвета
  above: 'Default Above',
  mainmetric: '0%',
  below: 'Default Description',
};

export default Metric1;