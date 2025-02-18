// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import '../css/Accordion2.css';



// type AccordionItem = {
//   title: string;
//   // image_desktop: string;
//   details_bg?: string;
//   description?: JSX.Element | string;
// };
// type CustomAccordionProps = {
//   items: AccordionItem[];
//   scrollPin?: string; // Теперь scrollPin передаем через пропсы
// };




// const CustomAccordion: React.FC<CustomAccordionProps> = ({ items, scrollPin }) => {
//   const [openIndex, setOpenIndex] = useState<number>(2);
//   const [closingIndex, setClosingIndex] = useState<number | null>(null);
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   // const pinRef = useRef<HTMLImageElement | null>(null);


//   gsap.registerPlugin(ScrollTrigger);

//   // ScrollTrigger.create({
//   //   trigger: scrollPin,
//   //   start: "top top",
//   //   end: "+=300px",
//   //   markers: true,
//   // })


//   gsap.to("#ID-details-section", {
//     scrollTrigger:{
//       trigger: scrollPin,
//       pin: "#ID-details-section",
//       pinSpacing: false,
//       markers: true,
//       start: "top top",
//       end: "+=0px",
//     },
//     opacity: 1,
//   })

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       toggleAccordion(0);
//     }, 200);
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleAccordion = (index: number) => {
//     if (openIndex !== index) {
//       setClosingIndex(openIndex);
//       setOpenIndex(index);

//       // Здесь добавляем анимацию при переключении аккордеона
//       if (imageRef.current) {
//         gsap.set(imageRef.current, {
//           opacity: 0,
//           scale: 1, // Начальное состояние для анимации
//         });

//         gsap.to(imageRef.current, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.57,
//           onComplete: () => {
//             if (imageRef.current) {
//               imageRef.current.src = items[index].image_desktop;
//             }
//           }
//         });
//       }

//       setTimeout(() => {
//         setClosingIndex(null);
//       }, 100);
//     }
//   };

//   const calculateHeight = (index: number) => {
//     return contentRefs.current[index] ? contentRefs.current[index].scrollHeight + 'px' : '0px';
//   };



//   return (
//     <div className="accordion-container" id='ID-accordion-container'>
//       <div className="details-section-desktop" id='ID-details-section'
//       >
//         <div
//           className="details-section"
//           style={{
//             backgroundImage: `url(${items[openIndex].details_bg || '/portfolio/assets/quasar/bg/bg1.png'
//               })`,
//           }}
//         >        <div className='product_image'>

//             <img
//               ref={imageRef} // Устанавливаем ссылку на изображение
//               src={items[openIndex].image_desktop}
//               alt={items[openIndex].title}
//               className='image_desktop'
//             />

//           </div>
//         </div>
//       </div>
//       <div className="accordion-section">
//         {items.map((item, index) => (
//           <div key={index} className="accordion-item">
//             <div
//               className={`accordion-header ${openIndex === index ? 'active-header' : ''}`}
//               onClick={() => toggleAccordion(index)}
//             >
//               {item.title}
//             </div>
//             <div
//               ref={el => (contentRefs.current[index] = el)}
//               className={`accordion-content ${openIndex === index ? 'expanded' : closingIndex === index ? 'closing' : ''}`}
//               style={{
//                 height: openIndex === index || closingIndex === index ? calculateHeight(index) : '0px',
//                 overflow: 'hidden',
//                 transition: 'height 0.5s cubic-bezier(0.57, 0, 0.13, 1)'
//               }}
//             >
//               {(openIndex === index || closingIndex === index) && (
//                 <div className="accordion-inner-content">
//                   <div className="details-content">
//                     {item.description}
//                     <div className="details-section-mobile">
//                       <div
//                         className="details-section"
//                         style={{
//                           backgroundImage: `url(${items[openIndex].details_bg || '/portfolio/assets/quasar/bg/bg1.png'
//                             })`,
//                         }}
//                       >
//                         <img src={item.image_desktop} alt={item.title} className='image_mobile' />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default CustomAccordion;
