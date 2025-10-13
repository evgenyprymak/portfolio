// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';




// import '@lottiefiles/lottie-player';
// import { create } from '@lottiefiles/lottie-interactivity';


import './css/index_v2.css';
import CanvasRippleCard from './components/CanvasRippleCard';


const MainPage = () => {

  const lottieRef = useRef<HTMLElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  // const [isModalCS_conversion1, setIsModalCS_conversion1] = useState(false);



  useEffect(() => {

    const lottiePlayer = lottieRef.current as any;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottiePlayer.play();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);


  return (
    <div>
      <div className="grid-center">
        <div className="grid-12x4">
          <div className="grid-card card-LT bg-accent-About"></div>
          <div className="grid-card card-TML bg-me2"></div>
          <div className="grid-card card-TMR bg-accent-WG">6,7,8,9,10</div>
          <CanvasRippleCard className="grid-card card-RT-wide">11,12</CanvasRippleCard>

          <CanvasRippleCard className="grid-card card-C1" backgroundImageUrl='assets/capital/project_hero_capital_2560w.jpg'>16-22<br />28-34</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-C2">19-21<br />31-33</CanvasRippleCard>

          <CanvasRippleCard className="grid-card card-RM">20-22<br />32-34</CanvasRippleCard>

          <CanvasRippleCard className="grid-card card-LB">25,26,27<br />37,38,39</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-BML">40,41,42</CanvasRippleCard>
          <div className="grid-card card-BMC1">43,44,45</div>
          <CanvasRippleCard className="grid-card card-BMC2">43,44,45</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-BR">46,47,48</CanvasRippleCard>
        </div>
      </div>
    </div>
  );
};

export default MainPage;