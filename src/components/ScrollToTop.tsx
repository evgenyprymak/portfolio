import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокрутка к верхней части при изменении пути
    document.querySelector('body')?.scrollTo(0, 0);
  }, [pathname]);

  return null; // Не нужно ничего рендерить
};

export default ScrollToTop;