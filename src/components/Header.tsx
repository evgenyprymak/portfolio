import React from "react";
import "../css/Header.css";

interface HeaderProps {
  wrapperclassName?: string;
  className?: string;
  title: string;
  description?: string | JSX.Element; // Обновляем тип description
  size?: "large" | "medium" | "small"; // Пропс для размеров
  color?: string; // Опциональный пропс
}

const Header: React.FC<HeaderProps> = ({ wrapperclassName, className, title, description, size = "medium", color }) => {
  return (
    <div className={wrapperclassName}>
      <h1 className={`header-title ${size} ${className}`} style={{ color }}>{title}</h1>
      <p className={`header-description ${size} ${color}`} style={{ color }}>{description}</p>
    </div>
  );
};

export default Header;
