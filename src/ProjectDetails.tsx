// @ts-ignore
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Menu from './Menu';
import Metric1 from './components/Metric1';
import ExpandableCard from './components/ExpandableCard';
import Header from './components/Header';

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';

import './css/MUI-tabs.css'
import './css/ProjectDetails.css';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectDetails = () => {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

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
    <div className="container-fluid px-0">
      <Menu />
      <button className="scroll-button">Scroll to Box</button>
      <Header
        wrapperclassName="header container-xxl"
        size="large"
        title="Quasar"
        description={<span>The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others.</span>}/>
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

      <div className='my-80 py-80'>
      <Header
        wrapperclassName="container-xxl py-4"
        size="medium"
        title="My Role"
        description={
          <span>
            I joined the Quasar project in 2020. Prior to this, I had been working on internal tools, client portals, and client experiences to help the business accelerate and scale. By the end of 2020, I took on the responsibility of managing all product design work in the company.
            <br /><br />The Quasar project was built using the Xenolyte design system, which primarily focused on fan-facing interfaces. Consequently, I also took charge of managing this design system. It comprised over 50 components, ranging from basic elements to complex design components like data tables.
            <br /><br />During my tenure on this project, I had the pleasure of collaborating with an exceptional Product Manager and brilliant Frontend, Backend, and QA engineers. We frequently communicated with other departments in the company, including Data, Marketing, and Fan Experience.
            <br /><br />As part of my role, I interviewed and onboarded new designers to the project. To streamline this process and support ongoing design work, I created and maintained a "Design Club" space in Notion. This resource not only ensured a more consistent and straightforward onboarding process but also served as an up-to-date repository for new information and resources.
          
          </span>
        }
      />




      <Header
        wrapperclassName="container-xxl pt-4"
        size="medium"
        title="My top activities"
      />
      <Tabs defaultValue={1} id='double_diamond' className='container-xxl pb-4 tabs-wrapper'>
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

      </div>
      <div style={{ height: '400px' }} className="box-c">222</div>








    </div>
  );
};

export default ProjectDetails;