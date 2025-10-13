// @ts-ignore
import React, { useEffect } from 'react';

import Task from './components/Task'
import Header from './components/Header';
import Divider from './components/Divider';
import PageHero from './components/PageHero';


import './css/ProjectDetails.css';
import Menu from './Menu';
import Footer from './components/Footer';
// import NDABlock from './components/NDABlock';
import Project from './Project';
import ResultsSummary from './components/ResultsSummary';
import { motion } from 'framer-motion';


const ProjectDetails = () => {

  const sectionColorChange = ({ bgfrom = '#000000', bgto = '#000000' } = {}) => ({
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { margin: "0px 0px -50% 0px" },
    variants: {
      offscreen: {
        backgroundColor: bgfrom,
      },
      onscreen: {
        backgroundColor: bgto,
        transition: {
          type: "easeIn",
          duration: 0.5,
        },
      },
    },
  });


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

  return (
    <div className="container-fluid px-0 justify-content-center">
      <Menu productDesign />
      <PageHero
        title={<span>Quasar. <br />The Ticketing Platform.</span>}
        description={<span>The Quasar project focused on creating a top-tier fan experience in ticketing, supporting diverse event states like Demand Aggregation, On Sale, and P2P exchanges. Adopted by major clients such as Coachella and Burning Man, it boosted sales and fan satisfaction.</span>}
        wrapperclassName="container-fluid"
        headerwrapper=''
        imageMobile="/portfolio/assets/quasar/project_hero_quasar_960w.jpg"
        imageDesktop="/portfolio/assets/quasar/project_hero_quasar_2560w.jpg"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
      />
      <ResultsSummary />
      <div className='container-fluid ephasized_section pt-40 px-0'>
        <div className='container-xxl px-3'>
          <Header
            wrapperclassName="py-4"
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

          <motion.div {...sectionColorChange({ bgfrom: '#FFF', bgto: '#1B0431' })} className='f-width my-40'>
            <div className='container-xxl my-40 py-40 px-1'>
              <div className='row'>
                <motion.div {...imageSlide()} className='d-flex justify-content-center px-0'>
                  <img src='/portfolio/assets/quasar/tickets_edited2.jpg' className='col-12 inline-image quasar-image-1' />
                </motion.div>
                <motion.div {...imageSlide({ delay: 0.12 })} className='col-sm-12 col-md-6 col-lg-7 px-0 quasar-image-2'>
                  <img src='/portfolio/assets/quasar/tickets_2.jpg' className='inline-image' />
                </motion.div>
                <motion.div {...imageSlide({ delay: 0.24 })} className='col-sm-12 col-md-6 col-lg-5 px-0 quasar-image-3'>
                  <img src='/portfolio/assets/quasar/tickets_3_2.jpg' className='inline-image' />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <Header
            wrapperclassName="pt-4"
            size="medium"
            description="During my time on the project, I had the pleasure of tackling various challenges, each with its own unique constraints. Below is a quick snapshot of the key activities I worked on, organized by the different phases of the design process. While this isn't an exhaustive list, it gives you a good sense of the most impactful work I contributed to:"
            title="Design activities"
            color='var(--txt-dark-2)'
            colorDescription='var(--txt-dark-2)'
          />
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
                <div className='design-activity'>User Research</div>
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
                <div className='design-activity'>Determining data to collect for analysis</div>
                <div className='design-activity'>Conducting design reviews to gather feedback and improve </div>
                <div className='design-activity'>Collaborating with content creators</div>
                <div className='design-activity'>Performed pre-production reviews</div>
                <div className='design-activity'>Company & team wide features presentation</div>
                <div className='design-activity'>Creating necessary admin tools or pass to another team</div>
                <div className='design-activity'>Creating guides for clients for event customizations</div>
              </div>
            </div>
          </div>
        </div>
        <motion.div {...sectionColorChange({ bgfrom: '#000', bgto: '#FFF' })} className='f-width'>
          <div className='container-xxl my-40 py-40 px-3'>
            <div className='row row-gap-10 pt-40'>
              <motion.div {...imageSlide()} className='col-12 card-gap-10'>
                <img src='/portfolio/assets/quasar/Activation.jpg' className='col-12 inline-image' />
              </motion.div>
              <motion.div {...imageSlide({ delay: 0.12 })} className='col-lg-4 col-sm-12 col-md-6 mt-20 card-gap-10'>
                <div
                  className="inline-image-3"
                  style={{ backgroundImage: `url('/portfolio/assets/quasar/printable.jpg')` }}
                >
                </div>                
              </motion.div>
              <motion.div {...imageSlide({ delay: 0.24 })} className='col-lg-8 col-sm-12 col-md-6 mt-20 card-gap-10'>
                <div
                  className="inline-image-3"
                  style={{ backgroundImage: `url('/portfolio/assets/quasar/403-02.jpg')` }}                
                
                >

                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="features dark_section container-xxl px-3" id='features'>
        {/* <Header
          wrapperclassName="pt-160 d-flex flex-column justify-content-center"
          size="medium"
          title="Projects, features & flows delivered"
          description="Since joining the product team, I have contributed to the development of numerous features, creating some from scratch and enhancing many others. My approach consistently balances time to market, feasibility, and the win-win-win principle (client, business, and user), ensuring optimal design solutions that benefit all stakeholders."
          color='var(--txt-light-2)'
          colorDescription='var(--txt-light-3)'
          alignment='center'
        /> */}
        {/* <NDABlock /> */}
        <div className='pt-40' style={{ height: 'auto' }} >
          <div className='row row-gap-10 pt-80'>
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#19191a'
              title='Driving Conversion Growth via Checkout Optimization'
              description={<span>Our goal was to become the leading ticketing platform. Together with our Head of Product and Product Manager, we conducted a <strong>competitor analysis</strong>, and identified opportunities for improvement at some steps in User Flows. I created <strong>interactive prototypes</strong> in <strong>Protopie</strong> and <strong>Figma</strong>, tested them with users via <strong>Useberry</strong>, and after minor changes we processed to development. <strong>I worked closely with developers</strong> to launch the MVP quickly. The result was a smoother ticket purchase process with fewer forms and less personal information, leading to a <strong>38% increase in conversion</strong>. The feature gained <strong>significant interest from other clients</strong>, even before its global release.</span>}
              image='/portfolio/assets/quasar/quasar_fastcheckout_v3.jpg'
              tag1='Competitor Analysis'
              tag2='User Testing'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#19191a'
              title='Increasing Adoption of Layaway Plans'
              description={<span>Our in-house Layaway Plans generated significant revenue for the business, prompting us to explore ways to increase their adoption rate. To achieve this, I conducted a thorough <strong>analysis of competitors and industry trends</strong> to understand how Buy Now, Pay Later (BNPL) and Layaway Plans are currently implemented by popular services. I planned <strong>user testing</strong> with interactive prototypes and surveys to gather feedback, while also developing a comprehensive vision for the feature and <strong>identifying a MVP</strong> to facilitate a quick launch. By implementing <strong>A/B testing</strong> that offered Layaway Plans as the default payment method, <strong>we ultimately achieved a higher adoption rate</strong> through targeted design decisions.</span>}
              image='/portfolio/assets/quasar/quasar_lp_v3.jpg'
              tag1='User, A/B Testing'
              tag2='MVP'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#19191a'
              title='Leveraging Returnable Tickets to Drive Business Growth'
              description={<span>Returnable tickets, one of our <strong>core win-win solutions</strong>, required design improvements to key touchpoints. After gathering <strong>fan feedback</strong> from the initial release, we identified several areas for enhancement. Recognizing the value this feature brought to both fans and the business, we decided to further leverage its usage. The redesigned solution introduced Returnable tickets at multiple points during the fan journey, resulting in a <strong>20% increase in adoption</strong> of the <strong>MVP</strong> version. Some of these improvements were added to the product roadmap, with the potential to boost adoption even further.</span>}
              image='/portfolio/assets/quasar/quasar_returnable_v3.jpg'
              tag1='User Feedback'
              tag2='Information Architecture'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#404970'
              title='Streamlining User Navigation from Client to Ticket Purchase'
              description={<span>After switching to primary sales, we realized that the event Landing page in fan navigation from the client site to Lyte no longer served its intended purpose. Additionally, we received feedback and requirements for improvements to the Landing page, as it lacked functionality to display key information. I conducted <strong>desk research</strong>, <strong>competitor analysis</strong>, and <strong>user flow reviews</strong>. I proposed rethinking how we and our clients navigate fans to the ticket purchase. This <strong>solution was highly adopted by clients</strong> and <strong>significantly improved the overall fan experience</strong>.</span>}
              image='/portfolio/assets/quasar/quasar_menu.png'
              tag1='User Flow'
              tag2='Information Architecture'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              title='Multistep Checkout Experience'
              description={<span>We addressed both technical challenges and design needs by restructuring a complex checkout process into multiple steps. Using the <strong>Chunking UX principle</strong>, we designed a flow that minimized <strong>cognitive load</strong>, ensuring a <strong>smoother and more effective checkout experience</strong>, which played a <strong>critical role in boosting conversion</strong>. The new design was also built with <strong>scalability in mind</strong>, allowing for the <strong>easy addition of future features</strong> without requiring significant development or design time for future improvements.<br /><br /><br /></span>}
              image='/portfolio/assets/quasar/quasar_multistep_checkout.png'
              tag1='Chunking UX'
              tag2='Scalability'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#6493B5'
              title='Evolving UX of Complex Products'
              description={<span>The business tasked us with <strong>unlocking sales for a complex product</strong> for a specific client. Based on our insights, <strong>I redefined the problem</strong>, identifying broader issues with complex products. I shifted the focus from addressing a single client’s needs to developing a <strong>platform-wide solution</strong>. This redesign addressed UI challenges, met new business requirements, and provided fans with clearer information about tickets availability, taking into account how option selection impacted by availability. The feature saw <strong>high adoption</strong> among clients and received <strong>very positive feedback</strong>.</span>}
              image='/portfolio/assets/quasar/quasar_products_2.png'
              tag1='Problem Redefinition'
              tag2='Interface Animation'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor="#19191a"
              title='Unlocking Sales with Restricted Payment Methods'
              description={<span>We enabled clients to sell specific ticket types on our platform by updating ticket cards with appropriate imagery that clearly showed any restrictions. Additionally, we enhanced the info section on the ticket selection page and updated the checkout functionality to support this feature. The feature was delivered under a tight deadline, significantly improving communication with the client and <strong>securing more contracts</strong> for the company.</span>}
              image='/portfolio/assets/quasar/quasar_restricted_payments_v3.jpg'
              tag1='Growth-Focused Design'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#6E3C5D'
              title='Increasing Conversion by Abandoned Cart emails'
              description={<span>I defined when, how, and what to send to fans who abandoned their carts. We explored multiple <strong>campaign title options</strong> and <strong>call-to-action strategies</strong> to increase conversion. I also developed a plan for future design improvements aimed at enhancing engagement with fans who abandoned their carts.</span>}
              image='/portfolio/assets/quasar/quasar_abandoned_cart.png'
              tag1='Conversion Optimization'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#030A65'
              title='Boost Sales with New Promotions on the Platform'
              description={<span>I unlocked the power of <strong>promotions</strong> for both the business and clients, enabling them to boost sales through a variety of promotion types. I conducted desk research, analyzed user flows, and collaborated with PMs and developers to handle edge cases. The improved design incorporated <strong>various states</strong> and high levels of customization, updating the <strong>design system</strong>. The feature was highly adopted by clients and internally, leading to a <strong>significant increase in sales</strong>.</span>}
              image='/portfolio/assets/quasar/quasar_promotions.png'
              tag1='User Flow'
              tag2='Client Activation'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#5F7D4C'
              title='Streamlining Ticket Activation for Improved User Experience'
              description={<span>We were tasked with enabling the Ticket Activation process for the Australian market, as it was crucial for our clients there. I conducted desk research, identified multiple approaches, and <strong>collaborated with the team</strong> to assess feasibility and design the process for this feature. By uniquely combining existing patterns with new functionality, we were able to <strong>deliver the feature under a tight deadline</strong>. The feature was <strong>highly adopted by clients</strong> and secured more contracts for the following year.</span>}
              image='/portfolio/assets/quasar/quasar_activation.png'
              tag1='Clients Activation'
              tag2=''
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#EA8D85'
              title='My Tix Pages on the Platform'
              description={<span><strong>We identified a gap</strong> in the fan journey when it came to managing their tickets. <strong>I conducted extensive research</strong> and identified the best possible solution within the constraints of feasibility. This section also <strong>unlocked the power of our platform</strong> by displaying integrated tickets from various ticketing platforms, giving us the <strong>opportunity to upsell our service</strong> for events where fans hadn’t initially planned to use it. Additionally, the design supported cases where users could navigate to closed events to view the status of their returns, which was previously inaccessible but essential for certain user groups.</span>}
              image='/portfolio/assets/quasar/quasar_my_tickets.png'
              tag1='Information Architecture'
              tag2='Business Growth'
            />
            <Task
              wrapperClassName='col-md-6 col-xl-4 card-gap-10'
              bgColor='#F0E2CC'
              title='Enhancing Fan-to-Fan Exchanges'
              description={<span>As our platform evolved, the Fan-to-Fan exchanges required a redesign that could be <strong>implemented with low costs</strong>. <strong>I identified weak points and dead ends</strong> in the current process and <strong>turned these into opportunities</strong> to <strong>increase sales</strong>. We also conducted <strong>A/B testing</strong> on specific design solutions, identifying the most effective ones. The new design provided <strong>greater clarity for users</strong>, addressing previously reported issues with how information was presented.</span>}
              image='/portfolio/assets/quasar/quasar_private_exchange.png'
              tag1='User Centered Design'
              tag2='User Flow'
            />
          </div>
          <Divider type='light' />
          <Project
            link='/project/2'
            image='assets/project_dashboard.jpg'
            title="Lyte Client Dashboard"
            year={<span>2019 · B2B</span>}
            description="Unlocking data and events management for clients through intuitive product design and a comprehensive UI kit for the web."
            isNextProject
          />
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;