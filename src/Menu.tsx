// @ts-ignore <a href='#/'>Evgeny Prymak</a>
import React, { useEffect, useRef, useState } from 'react';
import './css/Menu.css';

const Menu = () => {
  const topBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container-xxl top-bar-wrapper">
      <div className="top-bar" ref={topBarRef}>
        <div className='logo'><a href='#/'>Evgeny Prymak</a></div>
        <div className='menu'>
          <a href='#'><div className="menu-item link link--metis">Product Design</div></a>
          <a href='#'><div className="menu-item link link--metis">Procedural Art</div></a>
          <a href='#'><div className="menu-item link link--metis">About</div></a>
          <a href='#'><div className="menu-item link link--metis">Resume</div></a>
        </div>
      </div>
    </div>
  );
};

export default Menu;

