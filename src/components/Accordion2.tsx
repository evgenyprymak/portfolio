import React, { useState, useRef, useEffect } from 'react';
import '../css/Accordion2.css'; // Make sure to create this CSS file for styling

type AccordionItem = {
  title: string;
  details: string; // URL изображения
  details_bg?: string;
  additionalInfo: string;
};

type CustomAccordionProps = {
  items: AccordionItem[];
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number>(2);
  const [closingIndex, setClosingIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Добавляем задержку 500 мс перед открытием первого элемента
    const timer = setTimeout(() => {
      toggleAccordion(0); // Открываем первый элемент
    }, 500);

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
  }, []);

  const toggleAccordion = (index: number) => {
    if (openIndex !== index) {
      setClosingIndex(openIndex);
      setOpenIndex(index);

      setTimeout(() => {
        setClosingIndex(null);
      }, 300);
    }
  };

  const calculateHeight = (index: number) => {
    return contentRefs.current[index] ? contentRefs.current[index].scrollHeight + 'px' : '0px';
  };




  return (
    <div className="accordion-container">
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
                transition: 'height 0.5s ease'
              }}
            >
              {(openIndex === index || closingIndex === index) && (
                <div className="accordion-inner-content">
                  <div className="details-content">
                    {item.additionalInfo}
                    <img src={item.details} alt={item.title} className='image_mobile' />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="details-section">
        {/* <h6>{items[openIndex].title}</h6> */}
        <img src={items[openIndex].details} alt={items[openIndex].title} className='image_desktop' />
      </div>
    </div>
  );
};

export default CustomAccordion;