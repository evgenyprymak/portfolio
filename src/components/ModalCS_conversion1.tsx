import React, { useEffect } from 'react';
import '../css/Modal.css';
import Header from './Header';
import { motion } from 'framer-motion';
import Divider from './Divider';
import MotionParagraph from './MotionParagraph';
import Metric4 from './Metric4';
import Metric3 from './Metric3';


interface ModalProps {
  isOpen: boolean;                // Explicitly define the type as boolean
  onClose: () => void;            // Function type for the onClose handler
}

const ModalCS_conversion1: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // const ref = useRef(null)
  // const isInView = useInView(ref)

  // const activeBGColor = 'var(--bg-dark-3)'
  // const activeTextColor = '#000'
  // const colorOldMetric = '#71809C'

  // const defaultBGColor = 'var(--bg-dark-2)'
  // const defaultTextColor = 'var(--txt-light-2)'

  // const variants = {
  //   active: {
  //     backgroundColor: activeBGColor,
  //     color: activeTextColor,
  //   }

  // }

  const imageSlide = ({ delay = 0 } = {}) => ({
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { margin: "0px 0px -100px 0px" },
    variants: {
      offscreen: {
        opacity: 0,
        y: 50,
      },
      onscreen: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 1,
          delay,
        },
      },
    },
  });


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className='dialog-header' style={{ backgroundImage: "url('/portfolio/assets/caseStudies/CS_conversion1/case_boosting_CR.jpg')" }}>
        </div>
        <div className="dialog-content noXpadding">
          <div className='dialog-title pb-2 px-40'>
            <Header
              className='pb-2'
              title={<span>Boosting conversion rate by checkout optimization for the Quasar project</span>}
            />
            <Divider smallMargin type='light' />
            <MotionParagraph
              wrapperClassName='py-4 t--light-2'
              title="Context"
              classNameTitle="h--h3 pb-3"
              description="The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others."
              classNameDescription="t--t3"
              animationType='fadeIn'
            />
            <div className='row pt-4'>
              <Metric3 className='col-12 col-lg-4' above='' mainMetric='1000+' color='rgba(255,255,255,1)' below='Events per year' />
              <Metric3 className='col-12 col-lg-4' above='' mainMetric='1M+' color='rgba(255,255,255,1)' below='Tickets sold annually' />
              <Metric3 className='col-12 col-lg-4' above='' mainMetric='16%' color='rgba(255,255,255,1)' below='Primary sales conversion rate' />
            </div>
            <motion.div {...imageSlide()} className='d-flex justify-content-center px-0 pb-40'>
              <img src='/portfolio/assets/quasar/tickets_edited2.jpg' className='col-12 inline-image' />
            </motion.div>
          </div>
          <div className='bg--dark-2 px-40'>
            <MotionParagraph
              wrapperClassName='py-4 t--light-2'
              title="Business goals"
              classNameTitle="h--h3 pb-3"
              description="Identified by CEO and company leads as our new urgent direction"
              classNameDescription="t--t3"
              animationType='fadeIn'

            />
            <div className='row'>
              <Metric4 className='col-12' above='' mainMetric='Boost conversion rate for primary sales' color='rgba(255,255,255,1)' below='' />
              <Metric4 className='col-12' above='' mainMetric='Become best ticket platform in a matter of CR' color='rgba(255,255,255,1)' below='Tickets sold annually' />
              <Metric4 className='col-12' above='' mainMetric='Evaluate this as a sales proposition' color='rgba(255,255,255,1)' below='Primary sales conversion rate' />
            </div>
          </div>
          <MotionParagraph
              wrapperClassName='py-40 t--light-2 px-40'
              title="My Role"
              classNameTitle="h--h3 pb-3"
              description="Identified by CEO and company leads as our new urgent direction"
              classNameDescription="t--t3"
              animationType='fadeIn'

            />
            <div className='row row-gap-2 pb-40 pt-20'>
              <div className='col-12'>
                <div className='numbered-list bg--dark-1'><div className='numbered-list-number'>*</div><div><strong>Close collaboration with Director of Product, PM, Engineering team</strong></div></div>
                <div className='numbered-list'><div className='numbered-list-number'>*</div><div><strong>Solidified CEO, and other company leaders with a design direction and keep them updated</strong></div></div>

              
              </div>
            </div>
        </div>
      </div>

      <div className='dialog-close-container'>
        <img className="dialog-close" src='/portfolio/assets/icons/icon_close.svg' alt="Close" onClick={onClose}></img>

      </div>
    </div>
  );
};

export default ModalCS_conversion1;
