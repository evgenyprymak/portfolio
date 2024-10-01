import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, AnimatePresence } from 'framer-motion'; // Импортируем анимации

import '../css/Accordion.css'; // Подключаем CSS файл


const items = [
  { title: 'Accordion 1', details: 'Details for accordion 1', additionalInfo: 'Additional info for accordion 1' },
  { title: 'Accordion 2', details: 'Details for accordion 2', additionalInfo: 'Additional info for accordion 2' },
  { title: 'Accordion 3', details: 'Details for accordion 3', additionalInfo: 'Additional info for accordion 3' },
];


export default function ResponsiveAccordion() {
  const [expanded, setExpanded] = useState<number>(0);

  const handleChange = (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? index : index === expanded ? expanded : index);
  };

  return (
    <div className="container">
      <div className="accordion-section">
        {items.map((item, index) => (
          <Accordion 
            key={index} 
            expanded={expanded === index} 
            onChange={handleChange(index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.additionalInfo}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="details-section">
        <AnimatePresence>
          {expanded !== null && (
            <motion.div
              key={expanded}
              initial={{ opacity: 0 }} // Начальная непрозрачность
              animate={{ opacity: 1 }} // Конечная непрозрачность
              exit={{ opacity: 0 }} // Непрозрачность при выходе
              transition={{ duration: 0.5 }} // Длительность анимации
              className="details-content"
            >
              <Typography variant="h6">{items[expanded].title}</Typography>
              <Typography>{items[expanded].details}</Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}