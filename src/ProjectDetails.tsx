// @ts-ignore
import React from 'react';
// import { useParams } from 'react-router-dom';
import Menu from './Menu';
import Metric1 from './components/Metric1';
import './css/ProjectDetails.css';


const ProjectDetails = () => {
  // const { id } = useParams<{ id: string }>(); // Получаем ID проекта из URL

  // Здесь ты можешь использовать id для загрузки данных о проекте
  // Например, из массива объектов или API

  return (
    <div className="container-fluid px-4">
      <section id='menu' className='container-xxl py-4'><Menu /></section>
      <section id='header' className='container-xxl py-4'>
        <h1 className='pd-title'>Quasar</h1>
        <p className='pd-description'>The goal of the Quasar project was to create the best fan experience in the ticketing world. The project supported various event states, such as Demand Aggregation, On Sale, Exchange, P2P exchanges, and more. Each flow had its own unique and shared features, which posed a design challenge in creating a scalable product and delivering a great user experience.</p>
        <div className='row gap-4 px-3'>
          <Metric1 className='col' above='Up to' mainmetric='73%' color='var(--project-quasar)' below='Conversion Rate'/>
          <Metric1 className='col' above='Around' mainmetric='5.7M+' color='var(--project-quasar)' below='Avg. tickets Sold per a year'/>
          <Metric1 className='col' above='Nearly' mainmetric='$15M' color='var(--project-quasar)' below='Fan Savings from secondary sales'/>
        </div>
      
      </section>
    </div>
  );
};

export default ProjectDetails;