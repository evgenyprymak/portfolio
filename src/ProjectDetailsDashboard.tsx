// @ts-ignore
import React, { useEffect } from 'react';

import Metric2 from './components/Metric2';
import Header from './components/Header';
import Divider from './components/Divider';
import PageHero from './components/PageHero';

import './css/ProjectDetails.css';
import Menu from './Menu';
import Footer from './components/Footer';
import Project from './Project';


const ProjectDetailsDashboard = () => {

  return (
    <div className="container-fluid px-0 justify-content-center">
      <Menu productDesign />
      <PageHero
        title={<span>Client Dashboard.<br />Enhancing Client Experience.</span>}
        description={<span>This project focused on improving communication between Lyte and its clients by reimagining solutions, enabling self-service capabilities, and delivering the best-in-class reporting for ticketing services on the market.</span>}
        wrapperclassName="container-fluid"
        imageMobile="/portfolio/assets/quasar/project_hero_quasar_960w.jpg"
        imageDesktop="/portfolio/assets/dashboard/project_hero_dashboard_2560w.jpg"
        color='var(--txt-light-1)'
        colorDescription='var(--txt-light-3)'
        logoUrl='/portfolio/assets/logos/product_logo=lyte.svg'
      />
      <div className='container-fluid ephasized_section mt-40 pt-40'>
        <div className='container-xxl px-4'>
          <div className='row row-gap-2'>
            <Metric2 className='col-6 col-lg-4 card-gap-2' above='My role' mainmetric='Lead Product Designer' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-4 card-gap-2' above='Timeline' mainmetric='Sep–Dec, 2019' color='var(--txt-dark-2)' />
            <Metric2 className='col-6 col-lg-4 card-gap-2' above='Design team size' mainmetric='1–2' color='var(--txt-dark-2)' />
          </div>
          <Divider />
          <Header
            wrapperclassName="container-xxl py-4 px-0"
            size="medium"
            title="Context"
            color='var(--txt-dark-2)'
            colorDescription='var(--txt-dark-3)'
          />
          <div className='row pb-40'>
            <div className='col-12 col-lg-6 role-description'>
              I joined the project soon after joining the company. The client dashboard already existed but required a complete redesign due to significant issues with data, design, and implementation. The project lacked a dedicated team or Project Manager, and the documentation was incomplete, so <strong>my initial focus was bringing clarity to the ambiguous state</strong>.
            </div>
            <div className='col-12 col-lg-6 role-description'>
              During my time on the project, I collaborated closely with the Head of Design to gather business requirements and worked alongside another designer to research needs from other key leaders within the company. I also <strong>conducted interviews with the Operations team</strong>, who interacted with clients, to <strong>gather their feedback</strong> and <strong>identify pain points</strong> in the existing dashboard. Additionally, I <strong>collaborated with developers</strong> to understand the technical possibilities and limitations, ensuring that <strong>the design was feasible</strong> without over-complicating the implementation.
            </div>
          </div>
          <img className='inline-image mb-80' src='/portfolio/assets/dashboard/dashboard_random.jpg'></img>
        </div>
      </div>

        <div className='dark_section'>
          <div className='container-xxl px-4'>
            <Header
              wrapperclassName="pt-80"
              size="medium"
              title="Dashboard Redesign Goals"
              description={<span>Based on my research and collaboration with my teammates, I identified the key goals for the dashboard redesign:</span>}
              color='var(--txt-light-2)'
              colorDescription='var(--txt-light-3)'
            />
            <div className='row row-gap-2 pb-40 pt-20'>
              <div className='col-12 col-lg-6 card-gap-2'>
                <div className='numbered-list'><div className='numbered-list-number'>1.</div><div><strong>Reduce operations time per client/event</strong> by implementing self-service options and a comprehensive help center.</div></div>
                <div className='numbered-list'><div className='numbered-list-number'>2.</div><div><strong>Minimize time spent by the Financial team</strong> on each client/event through improved reporting features.</div></div>
                <div className='numbered-list'><div className='numbered-list-number'>3.</div><div><strong>Ensure data accuracy for clients</strong>, providing them with reliable and actionable insights.</div></div>
                <div className='numbered-list'><div className='numbered-list-number'>4.</div><div><strong>Clarify information and data</strong> by aligning it with specific business terminology for better understanding.</div></div>
              </div>
              <div className='col-12 col-lg-6 card-gap-2'>
                <div className='numbered-list'><div className='numbered-list-number'>5.</div><div><strong>Enable mobile access</strong>, allowing users to work with the dashboard on-site via mobile devices.</div></div>
                <div className='numbered-list'><div className='numbered-list-number'>6.</div><div><strong>Empower clients to increase revenue per event</strong> while driving more fan engagement through win-win releases.</div></div>
                <div className='numbered-list'><div className='numbered-list-number'>7.</div><div><strong>Provide real-time data access</strong> so clients can take immediate action, whether through marketing or other methods.</div></div>
              </div>
            </div>
            <div>
              <Divider
                type='light'
              />
              <Header
                wrapperclassName="pb-40"
                size="medium"
                title=""
                description={<span>I performed desk research to find the best practices for operational dashboards. Once I had all the information, I grouped it based on what clients needed most and used that to create a new information structure for the dashboard. The navigation was a big pain point for clients, so I completely reworked it. The new version made it possible to reach any part of the dashboard in 3-4 clicks, with clear, consistent navigation elements that could easily scale as we added more features.</span>}
                color='var(--txt-light-2)'
                colorDescription='var(--txt-light-3)'
              />
              <div><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_navigation.jpg'></img></div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <Header
                wrapperclassName="pb-40"
                size="medium"
                title=""
                description={<span>I also came up with the idea to personalize dashboards based on the events each client was managing. By digging into the JSON files used by the front-end, I found all the tokens from different integrations and customizations, then mapped them out to create a consistent structure. This made it possible to give each client a dashboard tailored to the events they were working on, making it much clearer which event they were managing at any given time.</span>}
                color='var(--txt-light-2)'
                colorDescription='var(--txt-light-3)'
              />
              <div><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_customization.jpg'></img></div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <div className='row row-gap-10 align-items-center'>
                <Header
                  wrapperclassName="col-lg-6 col-sm-12 card-gap-10"
                  className='pe-4'
                  size="medium"
                  title=""
                  description={<span>Furthermore, I introduced the concept of transforming our business features into easy-to-use toggle components. This allowed clients to activate features independently, without needing to contact the operations team, enabling them to act quickly. Additionally, these components provided metrics that measured the success of each feature, potentially helping us evaluate the strength of our business relationships with clients.</span>}
                  color='var(--txt-light-2)'
                  colorDescription='var(--txt-light-3)'
                />
                <div className='col-lg-6 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_features.jpg'></img></div>
              </div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <Header
                wrapperclassName=""
                className=''
                size="medium"
                title=""
                description={<span>Since clients had previously complained about unclear information, I made it a priority to fix that, making sure everything was presented in a simple, easy-to-understand way. I also added elements that allowed clients to easily navigate to get help or leave feedback about what they felt was missing.</span>}
                color='var(--txt-light-2)'
                colorDescription='var(--txt-light-3)'
              />
              <div className='row row-gap-10 align-items-center'>
                <div className='col-lg-6 mt-40 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_help_1.jpg'></img></div>
                <div className='col-lg-6 mt-40 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_help_2.jpg'></img></div>
              </div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <Header
                wrapperclassName="pb-40"
                size="medium"
                title=""
                description={<span>I paid close attention to the design of the reporting system, as it was crucial for delivering an excellent client experience. Previously, reports were created manually, consuming significant time for both the financial and operations teams. The back-and-forth communication between our teams and clients often caused frustration on both sides. From the start, I identified a set of essential reports to be available at launch, leaving room for future expansion. I also proposed automated reporting based on a client-selected timeframe, along with introducing new types of reports that could provide additional value.</span>}
                color='var(--txt-light-2)'
                colorDescription='var(--txt-light-3)'
              />
              <div><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_reporting_1.jpg'></img></div>
              <div className='row row-gap-10 align-items-center'>
                <div className='col-lg-6 mt-40 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_reporting_3.jpg'></img></div>
                <div className='col-lg-6 mt-40 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_reporting_2.jpg'></img></div>
              </div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <div className='row row-gap-10 align-items-center'>
                <div className='col-lg-6 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_mobile_1.jpg'></img></div>
                <Header
                  wrapperclassName="col-lg-6 col-sm-12 card-gap-10"
                  className='ps-4'
                  size="medium"
                  title=""
                  description={<span>The new design was also fully adaptive, allowing clients to use the dashboard from anywhere, even on mobile. This was particularly helpful for clients working in the field, like at outdoor music festivals, where access to computers and reliable internet is often limited.</span>}
                  color='var(--txt-light-2)'
                  colorDescription='var(--txt-light-3)'
                />
              </div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <div className='row row-gap-10 align-items-center'>
                <Header
                  wrapperclassName="col-lg-6 col-sm-12 card-gap-10"
                  className='pe-4'
                  size="medium"
                  title=""
                  description={<span>On top of that, I designed flows for client self-service functionality, including event customization with options to upload images and select colors. Another key feature that could differentiate us in the market was the Late Releases functionality, allowing clients to issue additional tickets, sell them on our platform, and generate extra revenue.</span>}
                  color='var(--txt-light-2)'
                  colorDescription='var(--txt-light-3)'
                />
                <div className='col-lg-6 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_self_2.jpg'></img></div>
                <div className='col-12 pt-40'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_self_1.jpg'></img></div>
              </div>
            </div>

            <div>
              <Divider
                type='light'
              />
              <div className='row row-gap-10 align-items-center'>
                <div className='col-lg-6 mt-20 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_some_1.jpg'></img></div>
                <div className='col-lg-6 mt-20 col-sm-12 card-gap-10'><img className='inline-image' src='/portfolio/assets/dashboard/dashboard_some_2.jpg'></img></div>
              </div>
            </div>
            <Divider type='light' />
            <Project
                link='/project/8'
                image='assets/capital/project_capital.jpg'
                title="Capital.com Trading Platform"
                year={<span>2018 · B2C</span>}
                description="Developing the platform from scratch and enhancing the trading experience through user-centered design."
                isNextProject
              />

            <Footer />

          </div>
        </div>




    </div>
  );
};

export default ProjectDetailsDashboard;