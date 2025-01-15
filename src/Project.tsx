//@ts-ignore
//@ts-nocheck 

import React from 'react';
import './css/Project.css';

import { Link } from 'react-router-dom';
import Header from './components/Header';


interface ProjectProps {
  link?: string;
  image?: string;
  title?: string;
  year?: JSX.Element | string;
  description?: string;
  comingsoon?: boolean;
  noHeader?: boolean;
  projectNDA?: boolean;
  isNextProject?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  link,
  image,
  title,
  year,
  description,
  comingsoon,
  noHeader,
  projectNDA,
  isNextProject,
}) => {
  return (
    <div>
      <Header
        wrapperclassName={`${isNextProject ? 'nextProjectSubtitle' : 'd_none'}`}
        title='See next project'
        size='small'
      />
      <div className={`project_card container-xxl ${isNextProject ? 'nextProject' : ''}`}>
        <img src='/portfolio/assets/icons/project_NDA.svg' className={`project_NDA ${projectNDA ? '' : 'd_none'}`}></img>
        <Link to={link.toString()} className={`a.project_card ${comingsoon ? 'coming_soon' : ''}`}>
          <div className={`project_image_wrapper`}>
            <img
              src={image}
              alt={title}
              className='project_image'
            />
          </div>
          <div className={`titlesWrapper ${noHeader ? 'project_header' : ''}`}>
            <p className='project_title'>{title}</p>
            <p className='project_description flex-grow-1'>{description}</p>
            <p className='project_year'>{year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Project;
