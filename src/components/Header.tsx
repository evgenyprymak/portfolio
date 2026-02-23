import React from "react";
import '../css/Header.css'; 


interface HeaderProps {
  wrapperclassName?: string;
  className?: string;
  title: string | JSX.Element;
  description?: string | JSX.Element; 
  size?: "large" | "medium" | "small"; 
  alignment?: "left" | "center";
  color?: string;
  colorDescription?: string;
  logoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ wrapperclassName, className, title, description, size = "medium", color, colorDescription, alignment = "left", logoUrl }) => {
  return (
    <div className={`${wrapperclassName} page-header-wrapper`}>
      <div className="page-header-text-wrapper">
        <h1 className={`page-header-title ${size} ${className}`} style={{ color: color, textAlign: alignment, alignSelf: alignment }}>{title}</h1>
        <p className={`page-header-description ${size} ${className}`} style={{ color: colorDescription, textAlign: alignment, alignSelf: alignment }}>{description}</p>
      </div>
      {logoUrl && (
        <div className="page-header-logo-wrapper">
          <img src={logoUrl} className="page-header-logo" />
        </div>
      )}
    </div>
  );
};

export default Header;
