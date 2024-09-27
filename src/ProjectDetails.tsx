// @ts-ignore
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Menu from './Menu';
import Metric1 from './components/Metric1';
import './css/ProjectDetails.css';
import ExpandableCard from './components/ExpandableCard';

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';

import './css/MUI-tabs.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectDetails = () => {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    // Сглаженная прокрутка к .box-c
    const smoothScroll = () => {
      gsap.to(window, {
        scrollTo: { y: ".box-c", autoKill: false },
        duration: 1,
        ease: "power2.inOut"
      });
    };

    const button = document.querySelector('button');
    if (button) {
      button.addEventListener('click', smoothScroll);
    }

    // Анимация карточек с задержкой
    gsap.fromTo('.expandable-card',
      { opacity: 0, y: 150, scaleY: 1.5 }, // Начальное состояние
      {
        opacity: 1,
        y: 0,
        scaleY: 1,
        duration: 1,
        delay: 0.5,
        ease: 'back.out(1.2)',
        stagger: 0.2, // Задержка между анимациями карточек
        scrollTrigger: {
          trigger: '#double_diamond',
          start: 'top bottom', // Когда элемент #double_diamond касается нижней части экрана
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          markers: false, // Можно включить markers: true для отладки
        }
      }
    );

    return () => {
      if (button) {
        button.removeEventListener('click', smoothScroll);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container-fluid">
      <Menu />
      <button className="scroll-button">Scroll to Box</button>
      <div id='header' className='pd-header container-xxl'>
        <h1 className='pd-title'>Quasar</h1>
        <p className='pd-description'>The goal of the Quasar project was to create the best fan experience in the ticketing world. The project supported various event states, such as Demand Aggregation, On Sale, Exchange, P2P exchanges, and more. Each flow had its own unique and shared features, which posed a design challenge in creating a scalable product and delivering a great user experience.</p>
      </div>
      <div className='container-xxl'>

        <div className='row row-gap-10'>
          <Metric1 className='col-12 col-md-4 card-gap-10' above='About' mainmetric='750' color='var(--project-quasar)' below='Events used Quasar to sell their tickets' />
          <Metric1 className='col-12 col-md-4 card-gap-10' above='More than' mainmetric='5.7M' color='var(--project-quasar)' below='Tickets sold per year' />
          <Metric1 className='col-12 col-md-4 card-gap-10' above='Up to' mainmetric='73%' color='var(--project-quasar)' below='Conversion rate' />
        </div>
      </div>
      <div className='container-xxl px-0'>
        <img src='../assets/some_screens_1.png' className='py-4 container-fluid'></img>
      </div>

      <div className='container-xxl px-0 py-4'>
        <div>The work</div>
      </div>


      <Tabs defaultValue={1} id='double_diamond' className='container-xxl py-4 tabs-wrapper'>
        <TabsList className='tabs-list'>
          <Tab value={1} id='dd_discover' className='tabs-tab'>Discover</Tab>
          <Tab value={2} id='dd_define' className='tabs-tab'>Define</Tab>
          <Tab value={3} className='tabs-tab'>Develop</Tab>
          <Tab value={4} className='tabs-tab'>Deliver</Tab>
        </TabsList>
        <TabPanel value={1}>
          <div className='row row-gap-2'>
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Moderated & Unmoderated User Testing"
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Understanding patterns and behaviors of fans"
              description="This was accomplished through fan journey mapping, analyzing recorded sessions, and examining user paths and funnel flows. Reviewed analytics data to identify drop-off points, interruptions, and areas with low engagement, focusing on improving the design of our product. Tools used Clarity, FullStory, Mixpanel, Looker, Notion."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Conducting design ideation sprints to generate collaborative ideas"
              description="Это текст, который появится при разворачивании карточки"
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Conducting design ideation sprints to generate collaborative ideas"
              description="Это текст, который появится при разворачивании карточки"
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Data-Driven Design Decisions"
              description="Worked closely with our talented data experts to better understand how users interact with the product over time. By analyzing patterns, trends, and support write-ins, we were able to uncover valuable insights that shaped thoughtful design decisions, ensuring the product continually evolves to meet user needs."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Competitor analysis to identify strengths and weaknesses"
              description="Это текст, который появится при разворачивании карточки."
            />
          </div>
        </TabPanel>
        <TabPanel value={2}>
          <div className='row row-gap-2'>
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Formulating and redefining problem statements."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Clustering and grouping problem statements."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Developing use cases."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Creating feature backlog from a design perspective and insights."
              description="Это текст, который появится при разворачивании карточки."
            />
          </div>
        </TabPanel>
        <TabPanel value={3}>
          <div className='row row-gap-2'>
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Updating a design system to ensure consistency across products."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Creating low-fidelity prototypes."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Creating production-ready design screens."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Holding sessions with developers to assess the feasibility of particular solutions."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Collaborating with Quality Assurance (QA) to identify edge cases and provide design support and Design QA."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Working with other designers to create required assets."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Creating interface animations by collaborating with developers and on my own using Lottie & AE."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Identifying A/B testing opportunities."
              description="Это текст, который появится при разворачивании карточки."
            />
          </div>
        </TabPanel>
        <TabPanel value={4}>
          <div className='row row-gap-2'>
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Creating interactive prototypes to simulate user interactions."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Conducting design reviews to gather feedback and improve design quality."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Determining data to collect for analysis."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Collaborating with content creators to ensure alignment between design and content."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Company wide features presentation"
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Creating guides for clients for event customizations."
              description="Это текст, который появится при разворачивании карточки."
            />
            <ExpandableCard
              wrapperclassName='col-12 col-lg-4 card-gap-2'
              title="Performed pre-production review and collaborated with Devs about final tune"
              description="Это текст, который появится при разворачивании карточки."
            />

          </div>
        </TabPanel>

      </Tabs>


      <div style={{ height: '1400px' }} className="box-c">222</div>








    </div>
  );
};

export default ProjectDetails;