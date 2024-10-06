import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap'; // Импортируйте GSAP
import '../css/Accordion2.css';

type AccordionItem = {
  title: string;
  details: string; // feature image
  details_bg?: string; // image background
  description?: string;
};
type CustomAccordionProps = {
  items: AccordionItem[];
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number>(2);
  const [closingIndex, setClosingIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null); // Ссылка на изображение

  useEffect(() => {

    const timer = setTimeout(() => {
      toggleAccordion(0); // Открываем первый элемент
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    if (openIndex !== index) {
      setClosingIndex(openIndex);
      setOpenIndex(index);

      // Здесь добавляем анимацию при переключении аккордеона
      if (imageRef.current) {
        gsap.set(imageRef.current, {
          opacity: 0,
          scale: 1, // Начальное состояние для анимации
        });

        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.57,
          onComplete: () => {
            // Обновляем src изображения после завершения анимации
            if (imageRef.current) {
              imageRef.current.src = items[index].details; // Обновляем src изображения
            }
          }
        });
      }

      setTimeout(() => {
        setClosingIndex(null);
      }, 100);
    }
  };

  const calculateHeight = (index: number) => {
    return contentRefs.current[index] ? contentRefs.current[index].scrollHeight + 'px' : '0px';
  };

  return (
    <div className="accordion-container">
            <div
        className="details-section"
        style={{
          backgroundImage: `url(${items[openIndex].details_bg || '/portfolio/assets/quasar/bg/bg1.png'
            })`,
        }}
      >        <div className='product_image'>

          <img
            ref={imageRef} // Устанавливаем ссылку на изображение
            src={items[openIndex].details}
            alt={items[openIndex].title}
            className='image_desktop'
          />

        </div>
      </div>
      <div className="accordion-section">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-header ${openIndex === index ? 'active-header' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </div>
            <div
              ref={el => (contentRefs.current[index] = el)}
              className={`accordion-content ${openIndex === index ? 'expanded' : closingIndex === index ? 'closing' : ''}`}
              style={{
                height: openIndex === index || closingIndex === index ? calculateHeight(index) : '0px',
                overflow: 'hidden',
                transition: 'height 0.5s cubic-bezier(0.57, 0, 0.13, 1)'
              }}
            >
              {(openIndex === index || closingIndex === index) && (
                <div className="accordion-inner-content">
                  <div className="details-content">
                      {item.description}
                    <img src={item.details} alt={item.title} className='image_mobile' />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CustomAccordion;
