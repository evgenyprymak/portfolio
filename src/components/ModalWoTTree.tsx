import React, { useEffect } from 'react';
import '../css/Modal.css';
import Header from './Header';
import NDABlock from './NDABlock';
import Divider from './Divider';

interface ModalProps {
  isOpen: boolean;                // Explicitly define the type as boolean
  onClose: () => void;            // Function type for the onClose handler
}

const ModalWoTTree: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    // console.log('ModalWoTTree isOpen changed:', isOpen);
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
    <div className="modal-overlay" onClick={(e) => { e.stopPropagation(); onClose(); }}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-content" style={{ backgroundColor: 'red !important' }} >
          <div className='dialog-title'>
            <Header
              title={<span>World of Tanks 2.0: Tech Tree</span>}
            />
          </div>
          <iframe className='youtube-player' src="https://www.youtube.com/embed/FTEkzHeiafg?si=K0Np9A2dyHHuAsJE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                             <Divider type='light' className='py-20' smallMargin />

                    <NDABlock />

          <p className='mt-40'>
            Tech Tree in 2.0 is a complete overhaul of the World of Tanks tech tree, designed to improve navigation, clarity, and user experience. The redesign introduces a more intuitive layout, enhanced visual hierarchy, and streamlined access to vehicle information.
          </p>
          <p className='pb-20'>
            The new Tech Tree is designed to help players navigate the game’s huge vehicle roster without feeling overwhelmed — making it easier to explore, compare, and understand what to unlock next, so progression feels clear and satisfying.

            On this project, I partnered closely with UX designers and developers and created the visual identity for the new tiers, making sure the system looked distinctive, stayed readable, and worked smoothly in the real UI.
          </p>

        </div>

      </div>

      <div className='dialog-close-container'>
        <img className="dialog-close" src='/portfolio/assets/icons/icon_close.svg' alt="Close" onClick={(e) => {
          e.stopPropagation();
          // console.log('Close button clicked, onClose function:', onClose);
          onClose();
          // console.log('onClose called');
        }}></img>
      </div>
    </div>
  );
};

export default ModalWoTTree;
