// @ts-ignore <a href='#/'>Evgeny Prymak</a>
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';


interface MenuProps {
  productDesign?: boolean;
}

const Menu: React.FC<MenuProps> = ({ productDesign  }) => {
  const topBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container-xxl top-bar-wrapper" id="menu">
      <div className="top-bar" ref={topBarRef}>
        <div className='logo'><a href='#/'>Evgeny Prymak</a></div>
        <div className='menu'>
          <div className={`'menu-item link ${productDesign ? 'active' : ''}`}><Link to="/" className=''>Product Design & Web</Link></div>
          <div className={`'menu-item link ${productDesign ? '' : 'active'}`}><Link to="/project/100" className=''>Procedural Art</Link></div>

          
          <div className='cta-button'>
            <a href='https://drive.google.com/file/d/1u-RuCyojZ77YW-6CqajPDBz1JkzBudT7/view' target="_blank"><div className="menu-item link">Resume</div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
