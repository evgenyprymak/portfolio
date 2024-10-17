// @ts-ignore
import React from 'react';
import './css/Menu.css';

function Menu() {
  return (
    <div className="container-fliud top-bar">
      <div className='logo'>Evgeny Prymak</div>
      <div className='menu'>
        <a href='#'><div className="menu-item link link--metis">Product Design</div></a>
        <a href='#'><div className="menu-item link link--metis">Procedural Art</div></a>
        <a href='#'><div className="menu-item link link--metis">About</div></a>
        <a href='#'><div className="menu-item link link--metis">Resume</div></a>
      </div>
    </div>
  );
}

export default Menu;
