// @ts-ignore

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';


interface MenuProps {
  productDesign?: boolean;
  proceduralArt?: boolean;
  contact?: boolean;
  transparent?: boolean;
}

const Menu: React.FC<MenuProps> = ({ productDesign, proceduralArt, contact, transparent=false  }) => {
  const topBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`top-bar-wrapper ${transparent ? 'transparent' : ''}`} id="menu">
      <div className="top-bar container-xxl px-3" ref={topBarRef}>
        <div className='logo'><a href='#/'>Evgeny Prymak | Product Designer</a></div>
        <div className='menu'>
          <div className={`'menu-item link ${productDesign ? 'active' : ''}`}><Link to="/" className=''>Product Design & Web</Link></div>
          <div className={`'menu-item link ${proceduralArt ? 'active' : ''}`}><Link to="/project/100" className=''>Procedural Art</Link></div>
          <div className={`'menu-item link ${contact ? 'active' : ''}`}><Link to="/contact" className=''>Contacts</Link></div>
          <div className='cta-button'>
            <a href='https://drive.google.com/file/d/1jXdijPhuvAXgHcgtKdCxRgx5eXrtnQQL/view' target="_blank"><div className="menu-item link">Resume</div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
