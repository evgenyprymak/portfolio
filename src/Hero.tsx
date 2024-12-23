import React from 'react';
// @ts-ignore

import SplitType from 'split-type';
import './css/Hero.css';

const Hero: React.FC = () => {

  return (
    <div className='hero'>
      <img src='assets/me.jpg' className='me' />
      <p>
        I design products that address real challenges and deliver meaningful value to both users and businesses. My journey covers everything from building products from the ground up to fine-tuning the details that make them better. Along the way, I’ve developed design systems, shaped processes, and led design teams. Collaboration is key for me—I love working closely with different teams, and I’m always learning new skills to keep improving how I work and what I deliver.
      </p>
    </div>
  );
};

export default Hero;
