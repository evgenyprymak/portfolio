import React, { useState } from 'react';
import '../css/Accordion2.css'; // Make sure to create this CSS file for styling

// Пропсы для элемента аккордиона
type AccordionItem = {
    title: string;
    details: string;
    additionalInfo: string;
  };
  
  type CustomAccordionProps = {
    items: AccordionItem[];
  };
  
  const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number>(0); // Первая секция открыта по умолчанию
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      if (openIndex !== index) {
        setNextIndex(index);
        setIsTransitioning(true);
        setTimeout(() => {
          setOpenIndex(index);
          setIsTransitioning(false);
        }, 1);
      }
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
              <div className={`accordion-content ${openIndex === index ? 'expanded' : ''}`}>
                {openIndex === index && (
                  <div className="accordion-inner-content">
                    {item.additionalInfo}
  
                    {/* Перемещаем details внутрь для мобильных */}
                    <div className="mobile-details">
                      <h6>{item.title}</h6>
                      <p>{item.details}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Обычный details для десктопа */}
        <div className={`details-section ${isTransitioning ? 'fade-out' : ''}`}>
          {nextIndex !== null && (
            <>
              <h6>{items[nextIndex].title}</h6>
              <p>{items[nextIndex].details}</p>
            </>
          )}
        </div>
        <div className='details-section-background'></div>
      </div>
    );
  };
  
  export default CustomAccordion;