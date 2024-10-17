// @ts-ignore
import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Menu from './Menu';
import Metric1 from './components/Metric1';
import Metric2 from './components/Metric2';
import Task from './components/Task'

import Header from './components/Header';
import Divider from './components/Divider';



import './css/MUI-tabs.css'
import './css/ProjectDetails.css';


// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectDetails = () => {
  // useEffect(() => {
  //   ScrollTrigger.normalizeScroll(true);

  //   // const smoothScroll = () => {
  //   //   gsap.to(window, {
  //   //     scrollTo: { y: ".box-c", autoKill: false },
  //   //     duration: 1,
  //   //     ease: "power2.inOut"
  //   //   });
  //   // };

  //   // const button = document.querySelector('button');
  //   // if (button) {
  //   //   button.addEventListener('click', smoothScroll);
  //   // }

  //   // Анимация карточек с задержкой
  //   gsap.fromTo('.expandable-card',
  //     { opacity: 0, y: 150 }, // Начальное состояние
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       delay: 0.3,
  //       ease: 'back.out(1.2)',
  //       stagger: 0.1, // Задержка между анимациями карточек
  //       scrollTrigger: {
  //         trigger: '#double_diamond',
  //         start: 'top bottom', // Когда элемент #double_diamond касается нижней части экрана
  //         end: 'bottom center',
  //         toggleActions: 'play none none reverse',
  //         markers: false, // Можно включить markers: true для отладки
  //       }
  //     }
  //   );

  //   return () => {
  //     // if (button) {
  //     //   button.removeEventListener('click', smoothScroll);
  //     // }
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  return (
    <div className="container-fluid px-0 justify-content-center">
      <Menu />
      {/* <button className="scroll-button">Scroll to Box</button> */}
      <div className='container-xxl px-4 project_title_image'>
        <div className='title_image'>
          <img 
            src='/portfolio/assets/quasar/quasar_main_image_desktop.jpg'
            srcSet="/portfolio/assets/quasar/quasar_main_image_desktop.jpg 1200w, /portfolio/assets/quasar/quasar_main_image_mobile.jpg 600w" 
            sizes="(max-width: 600px) 100vw, 1200px"
            alt="Quasar. The ticketing platform."
            />
          <div className="shadow blue-shadow"></div> 
          <div className="shadow red-shadow"></div> 
        </div>
      </div>
      <Header
        wrapperclassName="header container-xxl pt-80 pb-40 px-4 "
        alignment='left'
        size="large"
        title="Quasar"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
        description={<span>The Quasar project aimed to create the best fan experience in the ticketing world. It supported various event states, including Demand Aggregation, Pre-Registration, On Sale, Exchange, and P2P exchanges. Each flow had unique and shared features, posing a design challenge in creating a scalable product while delivering a great user experience. The product was highly adopted by clients to boost their sales and enhance fan experiences. Well-known clients included BottleRock Napa Valley Festival, Coachella, Burning Man, and Lost Paradise, among many others.</span>} />
      <div className='container-xxl px-4'>
        <div className='row row-gap-10'>
          <Metric1 className='col-6 col-lg-4 card-gap-10' above='Around' mainmetric='5,700' color='rgba(255,255,255,1)' below='Music events used the platform' />
          <Metric1 className='col-6 col-lg-4 card-gap-10' above='More than' mainmetric='$750M' color='rgba(255,255,255,1)' below='Secured in ticket reservations' />
          <Metric1 className='col-6 col-lg-4 card-gap-10' above='Up to' mainmetric='75%' color='rgba(255,255,255,1)' below='Conversion Rate (secondary sales)' />
        </div>
      </div>
      <div className='container-fluid ephasized_section mt-40 pt-40 px-0'>
        <div className='container-xxl px-4'>
          <div className='row row-gap-10'>
            <Metric2 className='col-6 col-lg-4 card-gap-10' above='My role' mainmetric='Product Designer' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-4 card-gap-10' above='Timeline' mainmetric='2020–2024' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-4 card-gap-10' above='Dev team size' mainmetric='5–10' color='var(--txt-dark-2)' />
          </div>
        </div>
        <Divider className='container-xxl px-4' />
        <div className='container-xxl px-4'>
          <Header
            wrapperclassName="container-xxl py-4 px-0"
            size="medium"
            title="Long story short"
            color='var(--txt-dark-2)'
            colorDescription='var(--txt-dark-3)'
          />
          <div className='row'>
            <div className='col-12 col-lg-6 role-description'>
              I joined the project in 2020. During my tenure, I had the pleasure of <strong>collaborating</strong> with an exceptional team, including a Product Manager and talented Frontend, Backend, and QA engineers. We frequently engaged with other departments, such as Data, Marketing, and Fan Experience, to ensure <strong>seamless cross-functional communication</strong>. The Quasar project was built using the Xenolyte Design System, which primarily focused on fan-facing interfaces. I took responsibility for <strong>managing this design system</strong>, ensuring it met the project's evolving needs.
            </div>
            <div className='col-12 col-lg-6 role-description'>
              In addition, I <strong>interviewed and onboarded</strong> new designers, creating and maintaining a "Design Club" space in Notion to streamline the process. This resource helped ensure a smooth onboarding experience and served as a regularly updated repository of information and resources. Through our team efforts, we <strong>significantly increased conversion rates</strong>, <strong>boosted the adoption rate of key business features</strong>, and successfully delivered numerous features to the market <strong>under tight deadlines</strong>.
            </div>
          </div>
        </div>
        <Divider className='container-xxl px-4' />
        <Header
          wrapperclassName="container-xxl px-4 pt-4"
          size="medium"
          description="During my time on the project, I had the pleasure of tackling various challenges, each with its own unique constraints. Below is a quick snapshot of the key activities I worked on, organized by the different phases of the design process. While this isn't an exhaustive list, it gives you a good sense of the most impactful work I contributed to:"
          title="Design activities"
          color='var(--txt-dark-2)'
          colorDescription='var(--txt-dark-2)'
        />
        <div className='container-xxl px-4'>
          <div className='row row-gap-10 DD'>
            <div className='col-md-6 col-lg-3 card-gap-10 DD-phase'>
              <div className='DD-wrapper'>
                <div className='DD-header'>
                  <img src='/portfolio/assets/icons/DD-icon-1.svg'></img>
                  <div>Discover</div>
                </div>
                <div className='design-activity'>Data-Driven Design Decisions</div>
                <div className='design-activity'>Understanding patterns and behaviors of fans</div>
                <div className='design-activity'>Competitor analysis</div>
                <div className='design-activity'>Unmoderated User Research</div>
                <div className='design-activity'>Design ideation sprints</div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 card-gap-10 DD-phase'>
              <div className='DD-wrapper'>
                <div className='DD-header'>
                  <img src='/portfolio/assets/icons/DD-icon-2.svg'></img>
                  <div>Define</div>
                </div>
                <div className='design-activity'>Formulating and redefining problem statements</div>
                <div className='design-activity'>Clustering and grouping problem statements</div>
                <div className='design-activity'>Developing use cases</div>
                <div className='design-activity'>Maintaining feature backlog from a design perspective and insights</div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 card-gap-10 DD-phase'>
              <div className='DD-wrapper'>
                <div className='DD-header'>
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
            </div>
            <div className='col-md-6 col-lg-3 card-gap-10 DD-phase'>
              <div className='DD-wrapper'>

                <div className='DD-header'>
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
      </div>
      <div style={{ backgroundColor: '#070707', paddingBottom: '100px' }} className="features px-0" id='features'>
        <Header
          wrapperclassName="container-xxl px-4 pt-160 d-flex flex-column justify-content-center"
          size="medium"
          title="Projects, features & flows delivered"
          description="Since my join the product I contributed in developing about 53 features created from scratch and improved 10 of them as well. With dependency on time to market, feasibility, "
          color='var(--txt-light-2)'
          colorDescription='var(--txt-light-3)'
          alignment='center'
        />
        <div className='container-xxl px-4 py-4'>
          <div className='nda'>
            <div><img src='/portfolio/assets/icons/nda.png'></img>I am restricted in publicly displaying extra design files from this work and can only share non-proprietary project and product details.</div>
          </div>
        </div>
        <div className='container-xxl px-4' style={{ height: 'auto' }} >
          <div className='row row-gap-10 pt-40'>
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#4B3061'
              title='Driving Conversion Growth via Checkout Optimization'
              description={<span>Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a <strong>competitor analysis</strong>, and identified opportunities for improvement at some steps in User Flows. I created <strong>interactive prototypes</strong> in <strong>Protopie</strong> and <strong>Figma</strong>, tested them with users via <strong>Useberry</strong>, and after minor changes we processed to development. <strong>I worked closely with developers</strong> to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a <strong>38% increase in conversion</strong>. The feature gained <strong>significant interest from other clients</strong>, even before its global release.</span>}
              image='/portfolio/assets/quasar/fastcheckout3.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#467653'
              title='Increasing Adoption of Layaway Plans'
              description={<span>Our in-house Layaway Plans generated significant revenue for the business, prompting us to explore ways to increase their adoption rate. To achieve this, I conducted a thorough <strong>analysis of competitors and industry trends</strong> to understand how Buy Now, Pay Later (BNPL) and Layaway Plans are currently implemented by popular services. I planned <strong>user testing</strong> with interactive prototypes and surveys to gather feedback, while also developing a comprehensive vision for the feature and <strong>identifying a MVP</strong> to facilitate a quick launch. By implementing <strong>A/B testing</strong> that offered Layaway Plans as the default payment method, <strong>we ultimately achieved a higher adoption rate</strong> through targeted design decisions.</span>}
              image='/portfolio/assets/quasar/quasar_lp_2.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#978D54'
              title='Leveraging Returnable Tickets to Drive Business Growth'
              description={<span>Returnable tickets, one of our <strong>core win-win solutions</strong>, required design improvements to key touchpoints. After gathering <strong>fan feedback</strong> from the initial release, we identified several areas for enhancement. Recognizing the value this feature brought to both fans and the business, we decided to further leverage its usage. The redesigned solution introduced Returnable tickets at multiple points during the fan journey, resulting in a <strong>20% increase in adoption</strong> of the <strong>MVP</strong> version. Some of these improvements were added to the product roadmap, with the potential to boost adoption even further.</span>}
              image='/portfolio/assets/quasar/quasar_returnable.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#404970'
              title='Improving the Ticket Selection Page by Skipping the Landing Page'
              description={<span>After switching to primary sales, we realized that the event Landing page in fan navigation from the client site to Lyte no longer served its intended purpose. Additionally, we received feedback and requirements for improvements to the Landing page, as it lacked functionality to display key information. I conducted <strong>desk research</strong>, <strong>competitor analysis</strong>, and <strong>user flow reviews</strong>. I proposed rethinking how we and our clients navigate fans to the ticket purchase. This <strong>solution was highly adopted by clients</strong> and <strong>significantly improved the overall fan experience</strong>.</span>}
              image='/portfolio/assets/quasar/quasar_menu.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              title='Multistep Checkout Experience'
              description={<span>We addressed both technical challenges and design needs by restructuring a complex checkout process into multiple steps. Using the <strong>Chunking UX principle</strong>, we designed a flow that minimized <strong>cognitive load</strong>, ensuring a <strong>smoother and more effective checkout experience</strong>, which played a <strong>critical role in boosting conversion</strong>. The new design was also built with <strong>scalability in mind</strong>, allowing for the <strong>easy addition of future features</strong> without requiring significant development or design time for future improvements.<br /><br /><br /></span>}
              image='/portfolio/assets/quasar/quasar_multistep_checkout.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#6493B5'
              title='Evolving UX of Complex Products'
              description={<span>I <strong>redefined the problem</strong>, shifting from addressing specific client needs to creating a <strong>platform-wide solution</strong>. This redesign aimed to solve UI issues, <strong>meet new business requirements</strong>, and provide fans with clearer information about content and availability. We also considered how availability was dependent on option selection.<br /><br /><br /><br /><br /><br /><br /></span>}
              image='/portfolio/assets/quasar/quasar_products_2.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor="#AE895C"
              title='Restricted Payment Methods'
              description='Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a competitor analysis, and identified opportunities for improvement at some steps in User Flows. I created interactive prototypes in Protopie and Figma, tested them with users via Useberry, and after minor changes we processed to development. I worked closely with developers to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a 38% increase in conversion. The feature gained significant interest from other clients, even before its global release.'
              image='/portfolio/assets/quasar/quasar_restricted_payments.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#6E3C5D'
              title='Increasing Conversion by Abandoned Cart emails'
              description='Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a competitor analysis, and identified opportunities for improvement at some steps in User Flows. I created interactive prototypes in Protopie and Figma, tested them with users via Useberry, and after minor changes we processed to development. I worked closely with developers to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a 38% increase in conversion. The feature gained significant interest from other clients, even before its global release.'
              image='/portfolio/assets/quasar/quasar_abandoned_cart.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#030A65'
              title='Design of Promotions'
              description='Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a competitor analysis, and identified opportunities for improvement at some steps in User Flows. I created interactive prototypes in Protopie and Figma, tested them with users via Useberry, and after minor changes we processed to development. I worked closely with developers to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a 38% increase in conversion. The feature gained significant interest from other clients, even before its global release.'
              image='/portfolio/assets/quasar/quasar_promotions.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#5F7D4C'
              title='Ticket Activation'
              description='Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a competitor analysis, and identified opportunities for improvement at some steps in User Flows. I created interactive prototypes in Protopie and Figma, tested them with users via Useberry, and after minor changes we processed to development. I worked closely with developers to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a 38% increase in conversion. The feature gained significant interest from other clients, even before its global release.'
              image='/portfolio/assets/quasar/quasar_activation.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#EA8D85'
              title='My Tix'
              description='Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a competitor analysis, and identified opportunities for improvement at some steps in User Flows. I created interactive prototypes in Protopie and Figma, tested them with users via Useberry, and after minor changes we processed to development. I worked closely with developers to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a 38% increase in conversion. The feature gained significant interest from other clients, even before its global release.'
              image='/portfolio/assets/quasar/quasar_my_tickets.png'
            />
            <Task
              wrapperClassName='col-md-6 col-lg-4 card-gap-10'
              bgColor='#F0E2CC'
              title='Private Exchange'
              description='Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a competitor analysis, and identified opportunities for improvement at some steps in User Flows. I created interactive prototypes in Protopie and Figma, tested them with users via Useberry, and after minor changes we processed to development. I worked closely with developers to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a 38% increase in conversion. The feature gained significant interest from other clients, even before its global release.'
              image='/portfolio/assets/quasar/quasar_private_exchange.png'
            />
          </div>
        </div>
        <Divider />
        <Header
          wrapperclassName="container-xxl px-4 pt-80"
          size="medium"
          title="Projects, features & flows delivered"
          description="Since my join the product I contributed in developing about 53 features created from scratch and improved 10 of them as well. With dependency on time to market, feasibility, "
          color='var(--txt-dark-2)'
          colorDescription='var(--txt-dark-2)'
        />
      </div>
    </div>
  );
};

export default ProjectDetails;