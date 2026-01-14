// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"



// import '@lottiefiles/lottie-player';
// import { create } from '@lottiefiles/lottie-interactivity';


import './css/index.css';
import CanvasRippleCard from './components/CanvasRippleCard';
import CustomCursor from './components/CustomCursor';


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
    <div className='main'>
      <CustomCursor />
      <div className="grid-center">

        <div className="grid-12x4">
          <CanvasRippleCard className="grid-card card-LT" data-cursor data-cursor-icon="view" rippleColor='#47c5ffff' backgroundImageUrl='assets/v2/about-bg-1.png'></CanvasRippleCard>
          <div className="grid-card card-TML" data-cursor data-cursor-icon="link"></div>
          <div className="grid-card card-TMR" data-cursor data-cursor-icon="view" >UX/UI Team Lead <br />Universal, Web Streams @ Wargaming</div>
          <CanvasRippleCard className="grid-card card-RT-wide" data-cursor data-cursor-icon="view" rippleColor='#FF0000' backgroundImageUrl='assets/v2/procedural-bg-1.png'>Procedural & <br />Generative Art</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-C1" data-cursor data-cursor-icon="view" backgroundImageUrl='assets/capital/project_hero_capital_2560w.jpg'>Platforms & Dashboards</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-C2" data-cursor data-cursor-icon="view" rippleColor='#ffd000' backgroundImageUrl='assets/v2/games-bg-1.png'>UX for Games</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-RM" data-cursor data-cursor-icon="view" ></CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-LB" data-cursor data-cursor-icon="view" >Mobile Apps</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-BML" data-cursor data-cursor-icon="view" backgroundImageUrl='assets/xenolyte/xenolyte_3.jpg'>Design Systems</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-BMC1" data-cursor data-cursor-icon="view" rippleColor='#47c5ffff' backgroundImageUrl='assets/v2/leadership-bg-1.png'>Design <br /> Leadership</CanvasRippleCard>
          <CanvasRippleCard className="grid-card card-BMC2" data-cursor data-cursor-icon="view" backgroundImageUrl='assets/v2/random-bg-1.png'></CanvasRippleCard>
          <div className="grid-card card-BR" data-cursor data-cursor-icon="view" >CV</div>
        </div>
      </div>
    </div>
  );
};


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

export default MainPage;