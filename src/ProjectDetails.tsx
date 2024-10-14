// @ts-ignore
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Menu from './Menu';
import Metric1 from './components/Metric1';
import Metric2 from './components/Metric2';

import Header from './components/Header';
import CustomAccordion from './components/Accordion2';
import Divider from './components/Divider';



import './css/MUI-tabs.css'
import './css/ProjectDetails.css';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const accordionItems = [
  {
    title: 'Driving Conversion Growth',
    image_desktop: '/portfolio/assets/quasar/fastcheckout3.png',
    details_bg: '/portfolio/assets/quasar/bg/bg1.png',
    description: <span>The goal: to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a thorough <strong>competitor analysis</strong>, identifying their strengths and weaknesses while <strong>outlining key opportunities</strong> to enhance our product. We compiled a list of improvements and <strong>developed strategies</strong> to implement them quickly. I designed <strong>interactive prototypes</strong> using <strong>Protopie</strong> and Figma, iterating through multiple versions, and conducted user testing via <strong>Useberry</strong> to refine our direction and identify <strong>quick wins for boosting conversion</strong>. Working closely with our skilled developers, <strong>we rapidly delivered the MVP</strong>. The result was a solution that allowed fans to purchase tickets effortlessly, without filling out numerous forms or providing excessive personal information, <strong>leading to a 38% increase in conversion</strong>. The feature became highly anticipated by other clients, and though not yet released globally, it helped the <strong>business secure significant contracts</strong> based on this conversion enhancement.</span>
  },
  {
    title: 'Increasing Adoption of Layaway Plans for Sales Growth',
    image_desktop: '/portfolio/assets/quasar/quasar_lp_2.png',
    details_bg: '/portfolio/assets/quasar/bg/bg1.png',
    description: 'Our in-house Layaway Plans generated significant revenue for the business, prompting us to explore ways to increase their adoption rate. To achieve this, I conducted a thorough analysis of competitors and industry trends to understand how Buy Now, Pay Later (BNPL) and Layaway Plans are currently implemented by popular services. I planned user testing with interactive prototypes and surveys to gather feedback, while also developing a comprehensive vision for the feature and identifying a Minimum Viable Product (MVP) to facilitate a quick launch. By implementing A/B testing that offered Layaway Plans as the default payment method, we ultimately achieved a higher adoption rate through targeted design decisions.'
  },
  {
    title: 'Leverage business with increased adoption rate of Returnable Tickets',
    image_desktop: '/portfolio/assets/quasar/quasar_returnable_2.png',
    details_bg: '/portfolio/assets/quasar/bg/bg2.png',
    description: 'Our in-house Layaway Plans generated significant revenue for the business, prompting us to explore ways to increase their adoption rate. To achieve this, I conducted a thorough analysis of competitors and industry trends to understand how Buy Now, Pay Later (BNPL) and Layaway Plans are currently implemented by popular services. I planned user testing with interactive prototypes and surveys to gather feedback, while also developing a comprehensive vision for the feature and identifying a Minimum Viable Product (MVP) to facilitate a quick launch. By implementing A/B testing that offered Layaway Plans as the default payment method, we ultimately achieved a higher adoption rate through targeted design decisions.'
  },
  {
    title: 'Enhance the Ticket Selection Page and Bypass the Landing Page',
    image_desktop: '/portfolio/assets/quasar/quasar_menu.png',
    details_bg: '/portfolio/assets/quasar/bg/bg2.png',
    description: 'Our in-house Layaway Plans generated significant revenue for the business, prompting us to explore ways to increase their adoption rate. To achieve this, I conducted a thorough analysis of competitors and industry trends to understand how Buy Now, Pay Later (BNPL) and Layaway Plans are currently implemented by popular services. I planned user testing with interactive prototypes and surveys to gather feedback, while also developing a comprehensive vision for the feature and identifying a Minimum Viable Product (MVP) to facilitate a quick launch. By implementing A/B testing that offered Layaway Plans as the default payment method, we ultimately achieved a higher adoption rate through targeted design decisions.'
  },
  {
    title: 'Multistep checkout pages',
    image_desktop: '/portfolio/assets/quasar/quasar_multistep_checkout.png',
    details_bg: '/portfolio/assets/quasar/bg/bg2.png',
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
    <div className="container-fluid px-0 justify-content-center">
      <Menu />
      {/* <button className="scroll-button">Scroll to Box</button> */}
      <img className='project_title_image container-xxl' src='/portfolio/assets/quasar/quasar_title.png'></img>
      <Header
        wrapperclassName="header container-xxl pt-80 pb-40"
        size="large"
        title="Quasar"
        description={<span>The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others.</span>} />
      <div className='container-xxl'>
        <div className='row row-gap-10'>
          <Metric1 className='col-6 col-md-4 card-gap-10' above='Around' mainmetric='5,700' color='rgba(255,255,255,1)' below='Music events used the platform' />
          <Metric1 className='col-6 col-md-4 card-gap-10' above='More than' mainmetric='$750M' color='rgba(255,255,255,1)' below='Secured in ticket reservations' />
          <Metric1 className='col-6 col-md-4 card-gap-10' above='Up to' mainmetric='75%' color='rgba(255,255,255,1)' below='Conversion Rate (secondary sales)' />
        </div>
      </div>
      <div className='container-fluid ephasized_section mt-40 pt-40 px-0'>
        <div className='container-xxl'>
          <div className='row row-gap-10'>
            <Metric2 className='col-6 col-md-4 card-gap-10' above='My role' mainmetric='Product Designer' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-md-4 card-gap-10' above='Timeline' mainmetric='2020–2024' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-md-4 card-gap-10' above='Dev team size' mainmetric='5–10' color='var(--txt-dark-2)' />
          </div>
        </div>
        <Divider className='container-xxl px-2' />
        <div className='container-xxl'>
          <Header
            wrapperclassName="container-xxl py-4 px-0"
            className='txt-dark-2'
            size="medium"
            title="Long story short"
          />
          <div className='row'>
            <div className='col-12 col-md-6 role-description'>
              I joined the project in 2020. During my tenure, I had the pleasure of <strong>collaborating</strong> with an exceptional team, including a Product Manager and talented Frontend, Backend, and QA engineers. We frequently engaged with other departments, such as Data, Marketing, and Fan Experience, to ensure <strong>seamless cross-functional communication</strong>. The Quasar project was built using the Xenolyte Design System, which primarily focused on fan-facing interfaces. I took responsibility for <strong>managing this design system</strong>, ensuring it met the project's evolving needs.
            </div>
            <div className='col-12 col-md-6 role-description'>
              In addition, I <strong>interviewed and onboarded</strong> new designers, creating and maintaining a "Design Club" space in Notion to streamline the process. This resource helped ensure a smooth onboarding experience and served as a regularly updated repository of information and resources. Through our team efforts, we <strong>significantly increased conversion rates</strong>, <strong>boosted the adoption rate of key business features</strong>, and successfully delivered numerous features to the market <strong>under tight deadlines</strong>.
            </div>
          </div>
        </div>
        <Divider className='container-xxl px-2' />
        <Header
          wrapperclassName="container-xxl pt-4"
          className='txt-dark-2'
          size="medium"
          description="During my time on the project, I had the pleasure of tackling various challenges, each with its own unique constraints. Below is a quick snapshot of the key activities I worked on, organized by the different phases of the design process. While this isn't an exhaustive list, it gives you a good sense of the most impactful work I contributed to:"
          title="Design activities"
        />
        <div className='container-xxl'>
          <div className='row DD'>
            <div className='col-12 col-l-3 DD-phase'>
              <div className='DD-wrapper'>
                <img src='/portfolio/assets/icons/DD-icon-1.svg'></img>
                <div>Discover</div>
              </div>
              <div className='design-activity'>Data-Driven Design Decisions</div>
              <div className='design-activity'>Understanding patterns and behaviors of fans</div>
              <div className='design-activity'>Competitor analysis</div>
              <div className='design-activity'>Unmoderated User Research</div>
              <div className='design-activity'>Design ideation sprints</div>
            </div>
            <div className='col-12 col-l-3 DD-phase'>
              <div className='DD-wrapper'>
                <img src='/portfolio/assets/icons/DD-icon-2.svg'></img>
                <div>Define</div>
              </div>
              <div className='design-activity'>Formulating and redefining problem statements</div>
              <div className='design-activity'>Clustering and grouping problem statements</div>
              <div className='design-activity'>Developing use cases</div>
              <div className='design-activity'>Maintaining feature backlog from a design perspective and insights</div>
            </div>
            <div className='col-12 col-l-3 DD-phase'>
              <div className='DD-wrapper'>
                <img src='/portfolio/assets/icons/DD-icon-3.svg'></img>
                <div>Develop</div>
              </div>
              <div className='design-activity'>Creating low & high fidelity prototypes</div>
              <div className='design-activity'>Updating a design system to ensure consistency</div>
              <div className='design-activity'>Creating production-ready design screens & hand off</div>
              <div className='design-activity'>Sessions with developers to assess the feasibility</div>
              <div className='design-activity'>Collaborating with Quality Assurance, and Design QA</div>
              <div className='design-activity'>Working with other designers to create required assets</div>
              <div className='design-activity'>Interface animations & motion design</div>
              <div className='design-activity'>Identifying A/B testing opportunities</div>
            </div>
            <div className='col-12 col-l-3 DD-phase'>
              <div className='DD-wrapper'>
                <img src='/portfolio/assets/icons/DD-icon-4.svg'></img>
                <div>Deliver</div>
              </div>
              <div className='design-activity'>Determining data to collect for analysis.</div>
              <div className='design-activity'>Conducting design reviews to gather feedback and improve </div>
              <div className='design-activity'>Collaborating with content creators</div>
              <div className='design-activity'>Performed pre-production review and collaborated</div>
              <div className='design-activity'>Company & team wide features presentation</div>
              <div className='design-activity'>Creating necessary admin tools or pass to another team</div>
              <div className='design-activity'>Creating guides for clients for event customizations.</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#fff', paddingBottom: '100px' }} className="features px-0">
        <Header
          wrapperclassName="container-xxl px-4 pt-80"
          size="medium"
          title="Projects, features & flows delivered"
          description="Since my join the product I contributed in developing about 53 features created from scratch and improved 24 of them as well. With dependency on time to market, feasibility, "
          color="var(--txt-dark-2)"
        />
        <div className='container-xxl px-4' style={{ height: 'auto' }} >
          <CustomAccordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;