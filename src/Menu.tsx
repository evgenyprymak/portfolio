// @ts-ignore

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Menu.css';


interface MenuProps {
  productDesign?: boolean;
  proceduralArt?: boolean;
  contact?: boolean;
  transparent?: boolean;
}

const Menu: React.FC<MenuProps> = ({ productDesign, proceduralArt, contact, }) => {
  const topBarRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setCompact(scrollPosition >= 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div id="menu" className='container-xxl px-4'>
      <motion.div
        className={`top-bar ${compact ? 'compact' : ''}`}
        ref={topBarRef}
      >
        <div className={`menu-wrapper ${compact ? 'compact' : ''}`}>
          <div className='menu menu-item link' style={{fontWeight:'700'}}>Menu
            <div className={`menu-dropdown`}>
              <div className={`menu-item link ${productDesign ? 'active' : ''}`}><Link to="/" className=''>Product Design & Web</Link></div>
              <div className={`menu-item link ${proceduralArt ? 'active' : ''}`}><Link to="/project/100" className=''>Procedural Art</Link></div>
              <div className={`menu-item link ${contact ? 'active' : ''}`}><Link to="/contact" className=''>Contacts</Link></div>
            </div>
            {/* <div className={`'menu-item link ${productDesign ? 'active' : ''}`}><Link to="/" className=''>Product Design & Web</Link></div>
            <div className={`'menu-item link ${proceduralArt ? 'active' : ''}`}><Link to="/project/100" className=''>Procedural Art</Link></div>
            <div className={`'menu-item link ${contact ? 'active' : ''}`}><Link to="/contact" className=''>Contacts</Link></div> */}

          </div>
          <div className='logo'><a href='#/'>Evgeny Prymak</a></div>
          <div className='cta-button'>
            <a href='https://drive.google.com/file/d/1rJz_sODrLDV9r8N9x5bvYyeduQOEyB-k/view' target="_blank"><div className="menu-item link">Resume</div></a>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Menu;
