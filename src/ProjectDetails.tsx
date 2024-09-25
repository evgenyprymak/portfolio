// @ts-ignore
import React from 'react';
// import { useParams } from 'react-router-dom';
import Menu from './Menu';
import Metric1 from './components/Metric1';
import './css/ProjectDetails.css';
import ExpandableCard from './components/ExpandableCard';


const ProjectDetails = () => {
  return (
    <div className="container-fluid px-4">
      <section id='menu' className='container-xxl py-4'><Menu /></section>
      <section id='header' className='container-xxl py-4'>
        <h1 className='pd-title'>Quasar</h1>
        <p className='pd-description'>The goal of the Quasar project was to create the best fan experience in the ticketing world. The project supported various event states, such as Demand Aggregation, On Sale, Exchange, P2P exchanges, and more. Each flow had its own unique and shared features, which posed a design challenge in creating a scalable product and delivering a great user experience.</p>
        <div className='row gap-4 px-3'>
          <Metric1 className='col' above='Up to' mainmetric='73%' color='var(--project-quasar)' below='Conversion rate' />
          <Metric1 className='col' above='Around' mainmetric='5.7M+' color='var(--project-quasar)' below='Average tickets sold per year' />
          <Metric1 className='col' above='Nearly' mainmetric='$15M' color='var(--project-quasar)' below='Yearly Fan savings from secondary sales' />
        </div>

      </section>
      <section id='design activities' className='container-xxl py-4'>
        <h3>Design Activities Performed</h3>
        <div className='row gap-4 px-3'>
          <ExpandableCard
            title="Reviewing user patterns and behaviors to identify issues or areas for improvement."
            description="Performed by observing user behaviors through screen recordings in Clarity and FullStory, analyzing how users interact with the product. Reviewing analytics data in Mixpanel and Looker to find drop-off points or areas with low engagement."
          />
          <ExpandableCard
            title="Collecting data through collaboration with the Data team."
            description="Это текст, который появится при разворачивании карточки."
          />
          <ExpandableCard
            title="Constant collaboration with Product Managers (PMs)."
            description="Это текст, который появится при разворачивании карточки."
          />
        </div>
        <div className='row gap-4 px-3'>
          <ExpandableCard
            title="User journey mapping to identify pain points and opportunities."
            description="Performed by observing user behaviors through screen recordings in Clarity and FullStory, analyzing how users interact with the product. Reviewing analytics data in Mixpanel and Looker to find drop-off points or areas with low engagement."
          />
          <ExpandableCard
            title="Competitor analysis to identify strengths and weaknesses."
            description="Это текст, который появится при разворачивании карточки."
          />
          <ExpandableCard
            title="Conducting design ideation sprints to generate collaborative ideas."
            description="Это текст, который появится при разворачивании карточки."
          />
          <ExpandableCard
            title="Stakeholder interviews to understand needs and expectations."
            description="Это текст, который появится при разворачивании карточки."
          />
        </div>


        <ul>
          <li>Formulating and redefining problem statements.</li>
          <li>Clustering and grouping problem statements.</li>
          <li>Developing use cases.</li>
          <li>Creating a design system to ensure consistency across products.</li>
          <li>Creating feature backlog from a design perspective and insights.</li>
        </ul>

        <ul>
          <li>Creating low-fidelity prototypes.</li>
          <li>Creating production-ready design screens.</li>
          <li>Conducting user interviews and user testing.</li>
          <li>Performing unmoderated user testing.</li>
          <li>Holding sessions with developers to assess the feasibility of particular solutions.</li>
          <li>Collaborating with Quality Assurance (QA) to identify edge cases and provide design support and Design QA.</li>
          <li>Working with other designers to create required assets.</li>
          <li>Creating interface animations by collaborating with developers and on my own using Lottie & AE.</li>
          <li>Identifying A/B testing opportunities.</li>
        </ul>

        <ul>
          <li>Conducting design reviews to gather feedback and improve design quality.</li>
          <li>Creating interactive prototypes to simulate user interactions.</li>
          <li>Establishing feedback loops for ongoing user and stakeholder input.</li>
          <li>Determining data to collect for analysis.</li>
          <li>Collaborating with content creators to ensure alignment between design and content.</li>
          <li>Creating guides for clients for event customizations.</li>
        </ul>

      </section>
    </div>
  );
};

export default ProjectDetails;