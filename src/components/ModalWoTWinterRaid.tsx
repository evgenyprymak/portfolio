import React, { useEffect } from 'react';
import '../css/Modal.css';
import Header from './Header';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import NDABlock from './NDABlock';
import Divider from './Divider';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;                // Explicitly define the type as boolean
  onClose: () => void;            // Function type for the onClose handler
}

const ModalWoTWinterRaid: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    // console.log('ModalWoTWinterRaid isOpen changed:', isOpen);
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => { e.stopPropagation(); onClose(); }}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        {/* <div className='dialog-header' style={{ backgroundImage: "url('/portfolio/assets/projectTitleImages/moonfolio_project_title_tiny.jpg')" }}>
        </div> */}
        <div className="dialog-content" style={{ backgroundColor: 'red !important' }} >
          <div className='dialog-title'>
            <Header
              title={<span>World of Tanks: Winter Raid</span>}
            />
          </div>
          <iframe className='youtube-player' src="https://www.youtube.com/embed/xKq8Y297SP8?si=PS5RH-HJdU3MFrTg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className='my-40'>
            Winter Raid is a limited-time Holiday Ops 2026 PvP mode (Dec 11–22) set in a charming miniature winter world, where three teams of five battle on compact snowy maps. Players collect gifts across the battlefield and deliver them to their base to score, while also being able to steal gifts from enemy bases and adapt to special events like snowstorms and high-value “big gifts.” By playing matches and completing mode-specific daily quests, players earn Gift Coins to progress through the event and unlock rewards, including new “Uncharted Territory” 3D attachments.
          </p>
          <div className='mt-20 mb-20'>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="assets/wargaming/winter_raid_2024.jpg" alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src="assets/wargaming/winter_raid_0.jpg" alt="Image two" />}
            />
          </div>

            <div className='container-xxl my-20 py-20 px-0'>
              <div className='row'>
                <motion.div {...imageSlide()} className='d-flex justify-content-center px-0'>
                  <img src='assets/wargaming/wg_UI_render_1.jpg' className='col-12 inline-image' />
                </motion.div>
                <motion.div {...imageSlide({ delay: 0.12 })} className='col-sm-6 col-md-6 col-lg-6 pt-4 px-0 pe-2'>
                  <video style={{ width: '100%', height: 'auto', overflow: 'hidden' }} className='inline-image' src="assets/wargaming/winter_raid_rewards.mp4" autoPlay loop></video>
                </motion.div>
                <motion.div {...imageSlide({ delay: 0.36 })} className='col-sm-6 col-md-6 col-lg-6 pt-4 px-0 ps-2'>
                  <img src='assets/wargaming/winter_raid_2.jpg' className='inline-image' />
                </motion.div>
              </div>
            </div>

          <Divider type='light' className='pb-20' smallMargin />

          <NDABlock />


          <div className='row row-gap-2 pb-40 pt-20'>
            <div className='col-12 col-lg-12 card-gap-2'>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>1.</div><div><strong>Turned 60–70s board game references into a usable UI</strong> so the mode felt like a real tabletop experience, while interactions stayed clear and easy to read.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>2.</div><div><strong>Used last year’s player data to avoid repeating old mistakes</strong> and to focus the UX on the places where players actually struggled or dropped off.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>3.</div><div><strong>Collected and filtered feedback into real next steps</strong> by combining player input with internal reviews and turning it into a prioritized list of improvements.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>4.</div><div><strong>Kept multiple teams aligned on one UX direction</strong> so the experience stayed coherent across the pipeline and handoffs didn’t dilute the intent.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>5.</div><div><strong>Pushed new-to-Wargaming UX elements from idea to implementation</strong> by working closely with developers and iterating until it felt right in-game.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>6.</div><div><strong>Used 3D modeling to support the “physical board” illusion</strong> and helped the UI sit naturally inside the gameboard presentation.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>7.</div><div><strong>Made short explainer videos that removed guesswork</strong> by recording and editing clear walkthroughs of how the abilities work in the game mode for players.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>8.</div><div><strong>Suggested game design tweaks when UX felt off</strong> especially around rules clarity, pacing, and making the core loop easier to understand.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>9.</div><div><strong>Designed everything with scaling in mind</strong> so key solutions could be reused for future events and adapted to different formats without redesigning from scratch. </div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>10.</div><div><strong>Built a style guide and Figma components for fast iteration</strong> so the UI stayed consistent and the team could ship updates without reinventing basics.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>11.</div><div><strong>Wrote UX docs that made handoff painless</strong> covering flows, states, edge cases, and implementation notes that engineers and QA could rely on.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>12.</div><div><strong>Did continuous UX/UI quality checks during production</strong> catching inconsistencies and usability issues early, before they turned into expensive rework.</div></div>
              <div className='numbered-list' style={{ borderRadius: '.5rem', overflow: 'hidden', backgroundColor: '#242424', color: '#EEEEF1' }}><div className='numbered-list-number'>13.</div><div><strong>Stayed involved after release and fed learnings back into the roadmap</strong> by watching real usage, gathering fresh feedback, and outlining what to improve next.</div></div>
            </div>

          </div>

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

export default ModalWoTWinterRaid;
