import React, { useEffect, useRef } from 'react';
import '../css/ModalNDA.css';
import Header from './Header';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

interface ModalProps {
  isOpen: boolean;                // Explicitly define the type as boolean
  onClose: () => void;            // Function type for the onClose handler
}

const ModalNDA: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const lottieRef = useRef<any>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  if (lottieRef.current && targetRef.current) {
    create({
      player: lottieRef.current,
      container: targetRef.current,
      mode: 'scroll',
      actions: [
        {
          type: "play",
        },
      ],
    });
  }



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
    <div className="modal-overlay-NDA" onClick={onClose}>
      <div className="dialog-NDA" onClick={(e) => e.stopPropagation()}>

        <div className="dialog-content-NDA">
          <div className='dialog-title-NDA'>
            <lottie-player
              ref={lottieRef}
              mode="normal"
              src="/portfolio/assets/animation/NDA2.json"
              style={{ width: '100%', height: '48px', marginBottom: '20px', alignSelf: 'flex-start' }}
              autoplay
            />
            <Header
              alignment='center'
              title={<span>Project Protected by NDA</span>}
            />
          </div>
          <p>
            Details of this project are protected under a Non-Disclosure Agreement (NDA).
            We can discuss its overall concept and approaches during a meeting or upon request.
          </p>
        </div>
        <div className="row row-gap-2">
          <div className="col-6 btn" onClick={onClose}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default ModalNDA;
