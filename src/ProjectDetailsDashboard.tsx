// @ts-ignore
import React, { useEffect } from 'react';

import Metric1 from './components/Metric1';
import Metric2 from './components/Metric2';
import Header from './components/Header';
import Divider from './components/Divider';
import PageHero from './components/PageHero';
import { Link } from 'react-router-dom';


import './css/ProjectDetails.css';


const ProjectDetailsDashboard = () => {

  return (
    <div className="container-fluid px-0 justify-content-center">
      <PageHero
        title={<span>Client Dashboard.<br />Enhancing Client Experience.</span>}
        description={<span>This project focused on improving communication between Lyte and its clients by reimagining solutions, enabling self-service capabilities, and delivering the best-in-class reporting for ticketing services on the market.</span>}
        wrapperclassName="container-fluid"
        imageMobile="/portfolio/assets/quasar/project_hero_quasar_960w.jpg"
        imageDesktop="/portfolio/assets/dashboard/project_hero_dashboard_2560w.jpg"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
      />
      <div className='container-xxl px-4'>
        <div className='row row-gap-2'>
          <Metric1 className='col-6 col-lg-4 card-gap-2' above='Around' mainmetric='5,700' color='rgba(255,255,255,1)' below='Music events used the platform' />
          <Metric1 className='col-6 col-lg-4 card-gap-2' above='More than' mainmetric='$750M' color='rgba(255,255,255,1)' below='Secured in ticket reservations' />
          <Metric1 className='col-6 col-lg-4 card-gap-2' above='Up to' mainmetric='75%' color='rgba(255,255,255,1)' below='Conversion Rate (secondary sales)' />
        </div>
      </div>
      <div className='container-fluid ephasized_section mt-40 pt-40 px-0'>
        <div className='container-xxl px-4'>
          <div className='row row-gap-2'>
            <Metric2 className='col-6 col-lg-4 card-gap-2' above='My role' mainmetric='Lead Product Designer' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-4 card-gap-2' above='Timeline' mainmetric='Sep–Dec, 2019' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-4 card-gap-2' above='Design team size' mainmetric='1–2' color='var(--txt-dark-2)' />
          </div>
        </div>
        <Divider className='container-xxl px-4' />
        <div className='container-xxl px-4'>
          <Header
            wrapperclassName="container-xxl py-4 px-0"
            size="medium"
            title="Context"
            color='var(--txt-dark-2)'
            colorDescription='var(--txt-dark-3)'
          />
          <div className='row pb-80'>
            <div className='col-12 col-lg-6 role-description'>
              I joined the project soon after joining the company. The client dashboard already existed but required a complete redesign due to significant issues with data, design, and implementation. The project lacked a dedicated team or Project Manager, and the documentation was incomplete, so <strong>my initial focus was bringing clarity to the ambiguous state</strong>.
            </div>
            <div className='col-12 col-lg-6 role-description'>
              During my time on the project, I collaborated closely with the Head of Design to gather business requirements and worked alongside another designer to research needs from other key leaders within the company. I also <strong>conducted interviews with the Operations team</strong>, who interacted with clients, to <strong>gather their feedback</strong> and <strong>identify pain points</strong> in the existing dashboard. Additionally, I <strong>collaborated with developers</strong> to understand the technical possibilities and limitations, ensuring that <strong>the design was feasible</strong> without over-complicating the implementation.
            </div>
          </div>
        </div>
        <div className='dark_section'>
          <div className='container-xxl'>
            <Header
              wrapperclassName="pt-80 d-flex flex-column justify-content-center"
              size="medium"
              title=""
              description="Since joining the product team, I have contributed to the development of numerous features, creating some from scratch and enhancing many others. My approach consistently balances time to market, feasibility, and the win-win-win principle (client, business, and user), ensuring optimal design solutions that benefit all stakeholders."
              color='var(--txt-light-2)'
              colorDescription='var(--txt-light-3)'
            />
            <div className='col-12 col-lg-9 role-description'>
              Based on my research and collaboration with my teammates, I identified the <strong>key goals</strong> for the dashboard redesign:
            </div>
            <div className='column'>
              <div className='col-12 col-lg-6 role-description'>
                <div className='levels'><div className='list-number'>1.</div><div><strong>Reduce operations time per client/event</strong> by implementing self-service options and a comprehensive help center.</div></div>
                <div className='levels'><div className='list-number'>2.</div><div><strong>Minimize time spent by the Financial team</strong> on each client/event through improved reporting features.</div></div>
                <div className='levels'><div className='list-number'>3.</div><div><strong>Ensure data accuracy for clients</strong>, providing them with reliable and actionable insights.</div></div>
                <div className='levels'><div className='list-number'>4.</div><div><strong>Clarify information and data</strong> by aligning it with specific business terminology for better understanding.</div></div>
                <div className='levels'><div className='list-number'>5.</div><div><strong>Enable mobile access</strong>, allowing users to work with the dashboard on-site via mobile devices.</div></div>
                <div className='levels'><div className='list-number'>6.</div><div><strong>Empower clients to increase revenue per event</strong> while driving more fan engagement through win-win releases.</div></div>
                <div className='levels'><div className='list-number'>7.</div><div><strong>Provide real-time data access</strong> so clients can take immediate action, whether through marketing or other methods.</div></div>
              </div>
            </div>
            <div><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_navigation.png'></img></div>
          </div>
        </div>
      </div>

      <Divider />
      <Link to="/" className='return-home'>Return Home</Link>
    </div>
  );
};

export default ProjectDetailsDashboard;