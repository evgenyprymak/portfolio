import React from 'react';
import './css/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <a href='#'><div className="menu-item link link--kale">Product Design</div></a>
      <a href='#'><div className="menu-item link link--kale">Procedural Art</div></a>
      <a href='#'><div className="menu-item link link--kale">About Me</div></a>
    </div>
  );
}

export default Menu;
