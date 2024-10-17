import React from "react";
import '../css/Header.css'; 


interface HeaderProps {
  wrapperclassName?: string;
  className?: string;
  title: string;
  description?: string | JSX.Element; 
  size?: "large" | "medium" | "small"; 
  alignment?: "left" | "center";
  color?: string;
  colorDescription?: string;
}

const Header: React.FC<HeaderProps> = ({ wrapperclassName, className, title, description, size = "medium", color, colorDescription, alignment = "left" }) => {
  return (
    <div className={wrapperclassName}>
      <h1 className={`header-title ${size} ${className}`} style={{ color: color, textAlign: alignment, alignSelf: alignment }}>{title}</h1>
      <p className={`header-description ${size} ${className}`} style={{ color: colorDescription, textAlign: alignment, alignSelf: alignment }}>{description}</p>
    </div>
  );
};

export default Header;
