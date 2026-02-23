// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import './css/Hero.css';
import Divider from './components/Divider';

const Hero: React.FC = () => {

  const lottieRef = useRef<any>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);



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
    <div className='hero'>
      <div className='row'>
        <div className='col-md-8 px-0 pe-4 pt-80'>
        <img src='assets/me.jpg' className='me' />

          <p>
            I design products that address real challenges and deliver meaningful value to both users and businesses. My journey covers everything from building products from the ground up to fine-tuning the details that make them better. Along the way, I’ve developed design systems, shaped processes, and led design teams. Collaboration is key for me—I love working closely with different teams, and I’m always learning new skills to keep improving how I work and what I deliver.
          </p>
        </div>
        
        <div className='col-md-4 px-0 ps-4'>
          <div className='' ref={targetRef}>
            <lottie-player
              ref={lottieRef}
              mode="normal"
              speed={1}
              src="/portfolio/assets/animation/Complex_render2.json"
              style={{ width: '100%', height: '360px' }}
              loop
              onClick={() => {
                lottieRef.current?.stop();
                lottieRef.current?.play();
              }}
            ></lottie-player>
          </div>
          <div className='complexthings'>Making Complex Things<br />Straightforward & Delightful</div>
        </div>

      </div>


    </div>


  );
};

export default Hero;
