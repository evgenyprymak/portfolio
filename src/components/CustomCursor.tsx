import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../css/CustomCursor.css';

interface Props {
  detectSelector?: string;
  size?: number;
  /** spring stiffness (force) - higher = snappier */
  stiffness?: number;
  /** damping factor - between 0 and 1, lower = more damping */
  damping?: number;
}

const iconMap: Record<string, string> = {
  view: 'See Positions History' ,
  play: '▶',
  link: 'Coming Soon',
};

const CustomCursor: React.FC<Props> = ({
  detectSelector = '[data-cursor]',
  size = 40,
  stiffness = 0.03,
  damping = 0.82,
}) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState<string>('');
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      const target = (e.target as HTMLElement)?.closest?.(detectSelector) as HTMLElement | null;
      if (target) {
        setVisible(true);
        const attr = target.getAttribute('data-cursor-icon') || target.getAttribute('data-cursor') || '';
        setIcon(attr || '');
      } else {
        setVisible(false);
        setIcon('');
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [detectSelector]);

  // toggle body class to hide native cursor when our custom cursor is visible
  useEffect(() => {
    const cls = 'has-custom-cursor';
    if (visible) {
      document.body.classList.add(cls);
    } else {
      document.body.classList.remove(cls);
    }
    return () => {
      document.body.classList.remove(cls);
    };
  }, [visible]);

  useEffect(() => {
    // RAF loop: spring physics (massless) with simple Euler integration
    const loop = () => {
      const target = posRef.current;
      const current = currentRef.current;
      const vel = velocityRef.current;

      const dx = target.x - current.x;
      const dy = target.y - current.y;

      // spring force toward target
      vel.x += dx * stiffness;
      vel.y += dy * stiffness;

      // damping
      vel.x *= damping;
      vel.y *= damping;

      // integrate velocity
      current.x += vel.x;
      current.y += vel.y;

      // snap when tiny to avoid jitter
      if (Math.abs(vel.x) < 0.01 && Math.abs(vel.y) < 0.01 && Math.hypot(dx, dy) < 0.5) {
        current.x = target.x;
        current.y = target.y;
        vel.x = 0;
        vel.y = 0;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.x}px, ${current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [stiffness, damping]);

  const resolvedIcon = iconMap[icon] || icon;

  const cursorEl = (
    <div
      ref={cursorRef}
      className={`custom-cursor ${visible ? 'visible' : ''}`}
      style={{ width: 'auto', height: 'auto' }}
      aria-hidden
    >
      <span className="cursor-inner">
        <span className="cursor-icon">{resolvedIcon}</span>
      </span>
    </div>
  );

  useEffect(() => {
    // create a container appended to body so the cursor is not affected by transformed ancestors
    const container = document.createElement('div');
    portalContainerRef.current = container;
    document.body.appendChild(container);
    setMounted(true);
    return () => {
      setMounted(false);
      if (portalContainerRef.current && portalContainerRef.current.parentNode) {
        portalContainerRef.current.parentNode.removeChild(portalContainerRef.current);
      }
      portalContainerRef.current = null;
    };
  }, []);

  if (mounted && portalContainerRef.current) {
    return createPortal(cursorEl, portalContainerRef.current);
  }
  return null;
};

export default CustomCursor;
