// @ts-ignore
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Menu from './Menu';
import Metric1 from './components/Metric1';
import ExpandableCard from './components/ExpandableCard';
import Header from './components/Header';
import CustomAccordion from './components/Accordion2';

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';



import './css/MUI-tabs.css'
import './css/ProjectDetails.css';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const accordionItems = [
  { title: 'Driving Conversion Growth', 
    details: '/portfolio/assets/quasar/fastcheckout3.png',
    details_bg: '/portfolio/assets/quasar/bg/bg1.png',
    description: 'Our goal was simple: to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a thorough competitor analysis, identifying their strengths and weaknesses while outlining key opportunities to enhance our product. We compiled a list of improvements and developed strategies to implement them quickly. I designed interactive prototypes using Protopie and Figma, iterating through multiple versions, and conducted user testing via Useberry to refine our direction and identify quick wins for boosting conversion. Working closely with our skilled developers, we rapidly delivered the MVP. The result was a solution that allowed fans to purchase tickets effortlessly, without filling out numerous forms or providing excessive personal information, leading to a 38% increase in conversion. The feature became highly anticipated by other clients, and though not yet released globally, it helped the business secure significant contracts based on this conversion enhancement.'
  },
  { title: 'Leveraging Increased Adoption of Returnable Tickets to Drive Business Growth', 
    details: '/portfolio/assets/quasar/quasar_returnable.png',
    details_bg: '/portfolio/assets/quasar/bg/bg2.png',
    description: 'Our goal was simple: to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a thorough competitor analysis, identifying their strengths and weaknesses while outlining key opportunities to enhance our product. We compiled a list of improvements and developed strategies to implement them quickly. I designed interactive prototypes using Protopie and Figma, iterating through multiple versions, and conducted user testing via Useberry to refine our direction and identify quick wins for boosting conversion. Working closely with our skilled developers, we rapidly delivered the MVP. The result was a solution that allowed fans to purchase tickets effortlessly, without filling out numerous forms or providing excessive personal information, leading to a 38% increase in conversion. The feature became highly anticipated by other clients, and though not yet released globally, it helped the business secure significant contracts based on this conversion enhancement.'
  },
  { title: 'Leverage business with increased adoption rate of Returnable Tickets', 
    details: '/portfolio/assets/quasar/fastcheckout1.png',
    details_bg: '/portfolio/assets/quasar/bg/bg1.png',
    description: 'Our in-house Layaway Plans generated significant revenue for the business, prompting us to explore ways to increase their adoption rate. To achieve this, I conducted a thorough analysis of competitors and industry trends to understand how Buy Now, Pay Later (BNPL) and Layaway Plans are currently implemented by popular services. I planned user testing with interactive prototypes and surveys to gather feedback, while also developing a comprehensive vision for the feature and identifying a Minimum Viable Product (MVP) to facilitate a quick launch. By implementing A/B testing that offered Layaway Plans as the default payment method, we ultimately achieved a higher adoption rate through targeted design decisions.'
  }
];


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
      { opacity: 0, y: 150 }, // Начальное состояние
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'back.out(1.2)',
        stagger: 0.1, // Задержка между анимациями карточек
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
        wrapperclassName="page-header container-xxl pb-40"
        size="large"
        title="Quasar"
        description={<span>The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others.</span>} />
      <div className='container-xxl'>
        <div className='row row-gap-10'>
          <Metric1 className='col-12 col-md-3 card-gap-10' above='Around' mainmetric='NDA' color='rgba(255,255,255,0.5)' below='Events ran on Quasar platform' />
          <Metric1 className='col-12 col-md-3 card-gap-10' above='More than' mainmetric='NDA' color='rgba(255,255,255,0.5)' below='Tickets sold per year' />
          <Metric1 className='col-12 col-md-3 card-gap-10' above='Up to' mainmetric='NDA' color='rgba(255,255,255,0.5)' below='Conversion rate' />
          <Metric1 className='col-12 col-md-3 card-gap-10' above='Closely' mainmetric='$NDA' color='rgba(255,255,255,0.5)' below='Yearly fan savings' />
        </div>
      </div>
      {/* <div className='container-xxl px-0'>
        <img src='../assets/some_screens_1.png' className='py-4 container-fluid'></img>
      </div> */}

      <div className='container-fluid ephasized_section mt-80 mb-20 py-80'>
        <div className='container-xxl'>
          <Header
            wrapperclassName="container-xxl py-4 px-0"
            size="medium"
            title="My role"
          />
          <div className='row'>
            <div className='col-12 col-md-6 pr-4 px-0 role-description pe-4'>
              I joined the Quasar project in the end of 2020. Prior to this, I had been working on internal tools, client portals, and client experiences to help the business accelerate and scale. By the end of 2020, I took on the responsibility of managing all product design work in the company.
            </div>
            <div className='col-12 col-md-6 pb-4 px-0 role-description pe-4'>
              During my tenure on this project, I had the pleasure of collaborating with an exceptional Product Manager and brilliant Frontend, Backend, and QA engineers. We frequently communicated with other departments in the company, including Data, Marketing, and Fan Experience.
            </div>
            <div className='col-12 col-md-6 pb-4 px-0 role-description pe-4'>
              The Quasar project was built using the Xenolyte design system, which primarily focused on fan-facing interfaces. Consequently, I also took charge of managing this design system. It comprised over 50 components, ranging from basic elements to complex design components like data tables.
            </div>
            <div className='col-12 col-md-6 pb-4 px-0 role-description pe-4'>
              As part of my role, I interviewed and onboarded new designers to the project. To streamline this process and support ongoing design work, I created and maintained a "Design Club" space in Notion. This resource not only ensured a more consistent and straightforward onboarding process but also served as an up-to-date repository for new information and resources.
            </div>
          </div>
        </div>
        <Header
          wrapperclassName="container-xxl pt-4"
          size="small"
          title="Design activities"
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
      <div style={{backgroundColor: '#f1f1f1', paddingBottom: '100px' }} className="box-c px-0">
      <Header
          wrapperclassName="container-xxl px-3 pt-40"
          size="medium"
          title="Projects, features & flows delivered"
          description="Since my join the product I contributed in developing about 57 features created from scratch and improved 17 of them as well"
          color="var(--txt-dark-1)"
        />
      <div className='container-xxl px-0' style={{ height: 'auto' }} >
        <CustomAccordion items={accordionItems} />


      </div>
      </div>








    </div>
  );
};

export default ProjectDetails;