import React, { useEffect } from 'react';
import '../css/Modal.css';
import Header from './Header';

interface ModalProps {
  isOpen: boolean;                // Explicitly define the type as boolean
  onClose: () => void;            // Function type for the onClose handler
}

const ModalMoonfolio: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
        <div className='dialog-header' style={{ backgroundImage: "url('/portfolio/assets/projectTitleImages/moonfolio_project_title_tiny.jpg')" }}>
        </div>
        <div className="dialog-content">
          <div className='dialog-title'>
            <Header
              title={<span>Moonfolio Crypto Wallet App</span>}
            />
          </div>
          <p>
          A satellite project designed during my time at Currency.com. Moonfolio allowed users to seamlessly connect their crypto wallets directly or integrate with popular exchanges such as Binance and Kraken. As part of this project, I deepened my knowledge of blockchain and cryptocurrencies, conducted competitor analysis, created prototypes, managed design reviews and feedback loops, and developed the app's branding.          </p>
          <img className='inline-image mt-40' src='/portfolio/assets/moonfolio/moonfolio_1.jpg'></img>
          <img className='inline-image mt-40' src='/portfolio/assets/moonfolio/moonfolio_2.jpg'></img>
          <img className='inline-image mt-40' src='/portfolio/assets/moonfolio/moonfolio_3.jpg'></img>
          <img className='inline-image mt-40' src='/portfolio/assets/moonfolio/moonfolio_4.jpg'></img>



        </div>
      </div>

      <div className='dialog-close-container'>
        <img className="dialog-close" src='/portfolio/assets/icons/icon_close.svg' alt="Close" onClick={onClose}></img>

      </div>
    </div>
  );
};

export default ModalMoonfolio;
