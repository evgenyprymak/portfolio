import React from "react";
import "../css/Header.css";

interface HeaderProps {
  wrapperclassName?: string;
  className?: string;
  title: string;
  description?: string | JSX.Element; // Обновляем тип description
  size?: "large" | "medium" | "small"; // Пропс для размеров
}

const Header: React.FC<HeaderProps> = ({ wrapperclassName, className, title, description, size = "medium" }) => {
  return (
    <div className={wrapperclassName}>
      <h1 className={`header-title ${size} ${className}`}>{title}</h1>
      <p className={`header-description ${size}`}>{description}</p>
    </div>
  );
};

export default Header;
