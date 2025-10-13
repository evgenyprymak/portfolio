import React, { useCallback, useRef } from 'react';

import '../css/WaveCard.css';

type WaveCardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
};

/**
 * WaveCard
 * Hover to trigger a soft luminous wave (ripple) radiating from center.
 * Inspired by the "Wave" effect example provided.
 */
const WaveCard: React.FC<WaveCardProps> = ({
  title,
  subtitle,
  children,
  ariaLabel,
  onClick,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Re-trigger CSS animations on repeated hovers by toggling a class
  const retrigger = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove('wave-hover');
    // Force reflow
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void node.offsetWidth;
    node.classList.add('wave-hover');
  }, []);

  return (
    <div
      ref={ref}
      role={onClick ? 'button' : 'group'}
      tabIndex={onClick ? 0 : -1}
      aria-label={ariaLabel}
      className={`wave-card ${className ?? ''}`.trim()}
      onMouseEnter={retrigger}
      onFocus={retrigger}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Center glow and wave elements */}
      <span className="wave-center" aria-hidden="true" />
      <span className="wave-ring" aria-hidden="true" />

      <div className="wave-content">
        {title && <div className="wave-title">{title}</div>}
        {subtitle && <div className="wave-subtitle">{subtitle}</div>}
        {children && <div className="wave-body">{children}</div>}
      </div>
    </div>
  );
};

export default WaveCard;


