// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';

import Hero from './Hero';
import Project from './Project';
import Header from './components/Header';
import Menu from './Menu';


import '@lottiefiles/lottie-player';
// import { create } from '@lottiefiles/lottie-interactivity';


import './css/index.css';
import ModalXeno from './components/ModalXenolyte';
import Divider from './components/Divider';
import ModalNDA from './components/ModalNDA';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import ModalMoonfolio from './components/ModalMoonfolio';
import ModalWoTWinterRaid from './components/ModalWoTWinterRaid';
import ModalWoTTree from './components/ModalWoTTree';






const MainPage = () => {

const { scrollY } = useScroll()
const [, setScrollDirection] = useState("down")

useMotionValueEvent(scrollY, "change", (current) => {
  const previous = scrollY.getPrevious()
  if (previous !== undefined) {
    const diff = current - previous
    setScrollDirection(diff > 0 ? "down" : "up")
    console.log("scroll direction:", diff > 0 ? "down" : "up")
  }
})



  const lottieRef = useRef<HTMLElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWoTWinterRaidOpen, setIsWoTWinterRaidOpen] = useState(false);
  const [isMoonfolioOpen, setIsMoonfolioOpen] = useState(false);
  const [isWoTTreeOpen, setIsWoTTreeOpen] = useState(false);
  const [isNDAOpen, setIsNDAOpen] = useState(false);
  // const [isModalCS_conversion1, setIsModalCS_conversion1] = useState(false);
  // const { scrollYProgress } = useScroll();


  useEffect(() => {

    const lottiePlayer = lottieRef.current as any;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottiePlayer.play();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);


  return (
    <div>

      <Menu
        productDesign
      />
      <div className="container-xxl px-4">
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [50, 0],
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}>
          <Hero />
        </motion.div>
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [50, 0],
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}>
          {/* <Divider type='light' /> */}
          
          <Divider type='light' />
          <div className='row contribution'>
            <Header
              wrapperclassName='col-lg-4 col-md-12 px-0 pe-4'
              title='Capabilities'
              description={<span>20+ years in commercial product design</span>}
              size='small'
              colorDescription='var(--txt-light-3)'
            />
            <div className='col-lg-4 col-md-6 px-0  pe-4'>
              <div className='skill'>AAA-Scale Game UX</div>
              <div className='skill'>Design Leadership</div>
              <div className='skill'>Streamlining Design Processes</div>
              <div className='skill'>Strengthening Team Culture</div>
              <div className='skill'>End-to-End Product Design </div> {/* (0<img src='/portfolio/assets/icons/arrow.svg' style={{ height: '14px', marginLeft: '4px', marginRight: '4px', }}></img>1 and Iteration) */}
              <div className='skill'>User-Centric Design</div>
              <div className='skill'>Data-Informed Design</div>
              <div className='skill'>Leveraging User Behavior by Analytics</div>
              <div className='skill'>Critical Thinking</div>
              <div className='skill'>Cross-Functional Collaboration</div>
            </div>
            <div className='col-lg-4 col-md-6 px-0  pe-4'>
              <div className='skill'>Enhancing Product Usability</div>
              <div className='skill'>Scalable Design Solutions</div>
              <div className='skill'>Iterative Prototyping and User Testing</div>
              <div className='skill'>Design Systems</div>
              <div className='skill'>Presentation & Pitching</div>
              <div className='skill'>B2B, B2C, SaaS</div>
              <div className='skill'>React, JS, Python</div>
              <div className='skill'>AI, Stable Diffusion</div>
              <div className='skill'>3D, Houdini, Redshift</div>
            </div>
          </div>
        </motion.div>
        {/* <div className='divider-light mt-80' />
        <Header
          wrapperclassName='pt-40'
          title='My Approach'
          description={<span>In today's fast-paced market, the idea of a Minimum Viable Product (MVP) is crucial for efficient and effective product development. An MVP is a version of a product that contains only the core features needed to provide value to customers and obtain validated learning with minimal effort. </span>}
          size='small'
          color='var(--txt-light-2)'
          colorDescription='var(--txt-light-3)'
        />
        <div className='row approach'>
          <div className='col-lg-6 col-md-12' ref={targetRef}>
            <lottie-player
              ref={lottieRef}
              mode="normal"
              speed={1.3}
              src="/portfolio/assets/animation/MVP_time_remap.json"
              style={{ width: '90%', height: '400px' }}
            ></lottie-player>
          </div>
          <div className='col-lg-5 col-md-12 mvp_steps'>
            <div className='levels'><div className='list-number'>4.</div><div>Design an engaging experience that resonates with users emotionally, encouraging continued use beyond basic functionality and usability.</div></div>
            <div className='levels'><div className='list-number'>3.</div><div>Create a user-friendly interface that allows customers to navigate and utilize features effortlessly.</div></div>
            <div className='levels'><div className='list-number'>2.</div><div>Ensure the product operates consistently and dependably, fostering trust among users.</div></div>
            <div className='levels'><div className='list-number'>1.</div><div>Design essential features that enable users to complete their tasks effectively.</div></div>
          </div>
        </div> */}
        <Divider type='light' />

        <Header
          wrapperclassName=''
          title='Case Studies'
          size='small'
        />
        <div className='row row-gap-10 pt-40 pb-40'>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='https://pitch.com/v/lyte---quasar---conversion-rate-improve-1-fs6px7'
              image='assets/case_boosting_CR.jpg'
              noHeader
            // projectNDA
            /></div>
          <div className='col-md-12 col-lg-6 card-gap-10'>
            <Project
              link='https://pitch.com/v/lyte---admin---customization-txgy5n'
              image='assets/case_operations.jpg'
              noHeader
            />
          </div>
          <ModalNDA
            isOpen={isNDAOpen}
            onClose={() => setIsNDAOpen(false)}
          >
          </ModalNDA>
        </div>
        <Divider type='light' />
        <div className=''>
          <Header
            wrapperclassName=''
            title='Latest Projects'
            size='small'
          />
          <div className='row row-gap-10 pt-40 pb-80'>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsWoTWinterRaidOpen(true)}>
              <ModalWoTWinterRaid
                isOpen={isWoTWinterRaidOpen}
                onClose={() => setIsWoTWinterRaidOpen(false)}
              >
              </ModalWoTWinterRaid>
              <Project
                link='#'
                image='assets/wargaming/project_winter_raid.png'
                title="World of Tanks: Winter Raid Event"
                year={<span>2025 · B2C</span>}
                description="A festive in-game event featuring unique missions, rewards, and winter-themed content to engage players during the holiday season."
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsWoTTreeOpen(true)}>
              <ModalWoTTree
                isOpen={isWoTTreeOpen}
                onClose={() => setIsWoTTreeOpen(false)}
              />
              <Project
                link='#'
                image='assets/wargaming/project_tech_tree.png'
                title="World of Tanks 2.0: Tech Tree"
                year={<span>2025 · B2C</span>}
                description="An updated tech tree system providing enhanced navigation and detailed information to improve player experience."
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10'>
              <Project
                link='/project/1'
                image='assets/projectTitleImages/project_quasar2_tiny.jpg'
                title="Quasar Ticketing Platform"
                year={<span>2020–2024 · B2C</span>}
                description="Enhanced the ticketing platform's usability, leading to significant boosts in conversion and adoption rates."
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10'>
              <Project
                link='/project/2'
                image='assets/project_dashboard.jpg'
                title="Lyte Client Dashboard"
                year={<span>2019 · B2B</span>}
                description="Unlocking data and events management for clients through intuitive product design and a comprehensive UI kit for the web."
              />
            </div>
            <ModalXeno
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
            </ModalXeno>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsModalOpen(true)}>
              <Project
                link='#'
                image='assets/project_xenolyte.jpg'
                title="Xenolyte Design System"
                year={<span>2020–2024 · Internal Project</span>}
                description="Creating a cohesive design language and reusable components to enhance collaboration and streamline product development."
              />
            </div>

            <div className='col-md-12 col-lg-6 card-gap-10'>
              <Project
                link='/project/8'
                image='assets/capital/project_capital.jpg'
                title="Capital.com Trading Platform"
                year={<span>2018 · B2C</span>}
                description="Developing the platform from scratch and enhancing the trading experience through user-centered design."
              />
            </div>
            <ModalMoonfolio
              isOpen={isMoonfolioOpen}
              onClose={() => setIsMoonfolioOpen(false)}
            />
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsMoonfolioOpen(true)}>
              <Project
                link='#'
                image='assets/projectTitleImages/moonfolio_project_title_tiny.jpg'
                title="Moonfolio Crypto Wallet App"
                year={<span>2018 · B2C</span>}
                description="A Currency.com project enabling wallet and exchange integration. Focused on design, branding, and prototyping."
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsNDAOpen(true)}>
              <Project
                link='#'
                image='assets/projectTitleImages/django_1_tiny.jpg'
                title="Lyte Primary Internal Admin Panel"
                year={<span>2019–2024 · Internal Project</span>}
                description="Enhancing the Operations Team's experience through product design of Lyte's primary admin tool."
                projectNDA
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsNDAOpen(true)}>
              <Project
                link='#'
                image='assets/projectTitleImages/admin_support2.jpg'
                title="Lyte Support Admin Panel"
                year={<span>2019–2024 · Internal Project</span>}
                description="Enhancing the Support Team's experience through product design of Lyte's support admin tool."
                projectNDA
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsNDAOpen(true)}>
              <Project
                comingsoon
                link='#'
                image='assets/projectTitleImages/tour_1_tiny.jpg'
                title="Lyte Dashboard for Music Tours"
                year={<span>2021 · B2B</span>}
                description="Empowering clients with efficient data and event management solutions tailored for the music industry through intuitive product design."
                projectNDA
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsNDAOpen(true)}>
              <Project
                comingsoon
                link='#'
                image='assets/projectTitleImages/project_designprocess.jpg'
                title="Creating & Rolling Out Design Process"
                year={<span>2023 · Internal Project</span>}
                description="Establishing a streamlined design process to enhance team collaboration and drive efficiency in product development."
                projectNDA
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10' onClick={() => setIsNDAOpen(true)}>
              <Project
                comingsoon
                link='#'
                image='assets/project_blueprint.jpg'
                title="Service Blueprint"
                year={<span>2019 · Internal Project</span>}
                description="Mapping out client journeys and service touchpoints to identify opportunities for improvement and enhance overall CX."
                projectNDA
              />
            </div>
            <div className='col-md-12 col-lg-6 card-gap-10'>
              <Project
                link='/project/99'
                image='assets/project_old.jpg'
                title="Old Projects"
                description="Early work in UX/UI design, web design, and game design, marking the start of my design journey."
                year={<span>2005–2016 · Various</span>}
              />
            </div>
          </div>

        </div>




      </div>
    </div>
  );
};

export default MainPage;