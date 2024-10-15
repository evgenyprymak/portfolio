import React from "react";
import '../css/Header.css'; 


interface HeaderProps {
  wrapperclassName?: string;
  className?: string;
  title: string;
  description?: string | JSX.Element; 
  size?: "large" | "medium" | "small"; 
  color?: string;
  colorDescription?: string;
}

const Header: React.FC<HeaderProps> = ({ wrapperclassName, className, title, description, size = "medium", color, colorDescription }) => {
  return (
    <div className={wrapperclassName}>
      <h1 className={`header-title ${size} ${className}`} style={{ color }}>{title}</h1>
      <p className={`header-description ${size} ${className}`} style={{ color: colorDescription }}>{description}</p>
    </div>
  );
};

export default Header;
