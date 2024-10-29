import React, { useEffect } from 'react';
import '../css/Modal.css';
import Header from './Header';
import Metric1 from './Metric1';

interface ModalProps {
  isOpen: boolean;                // Explicitly define the type as boolean
  onClose: () => void;            // Function type for the onClose handler
}

const ModalXeno: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Toggle the modal-open class on the body when the modal opens or closes
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className='dialog-header' style={{ backgroundImage: "url('/portfolio/assets/project_xenolyte.jpg')" }}>
        </div>
        <div className="dialog-content">
          <div className='dialog-title'>
            <Header
              title={<span>Xenolyte Design System</span>}
            />
          </div>
          <p>
            The Xenolyte Design System has been instrumental in our product’s success, offering a toolkit of over 50 reusable components that streamline the design process. From simple buttons to complex data tables, this system ensures consistency across our products while making it easier for teams to collaborate and innovate.
          </p>
          <p>
            What truly makes it stand out is its focus on usability and adaptability. By incorporating user feedback and design patterns, we continuously refine the system to meet evolving needs. In essence, the Xenolyte Design System serves as a shared language that fosters creativity and drives our projects forward, ultimately enhancing the user experience.
          </p>
          <div className='row row-gap-10'>
            <Metric1 className='col-6 col-lg-6 card-gap-10' above='Time saving (approx.)' mainmetric='35%' color='rgba(255,255,255,1)' below='For a Front-End development' />
            <Metric1 className='col-6 col-lg-6 card-gap-10' above='Time saving (approx.)' mainmetric='50%' color='rgba(255,255,255,1)' below='For a Design Teams' />
          </div>
          <img className='inline-image mt-40' src='/portfolio/assets/xenolyte/xenolyte_4.jpg'></img>
          <img className='inline-image mt-40' src='/portfolio/assets/xenolyte/xenolyte_1.jpg'></img>

        </div>
      </div>

<div className='dialog-close-container'>
        <img className="dialog-close" src='/portfolio/assets/icons/icon_close.svg' alt="Close" onClick={onClose}></img>
  
</div>
    </div>
  );
};

export default ModalXeno;
