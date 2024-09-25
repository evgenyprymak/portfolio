//@ts-ignore
//@ts-nocheck 

import React from 'react';
import './css/Project.css';

import { Link } from 'react-router-dom';

interface ProjectProps {
  link?: string;
  image?: string; 
  title: string;
  year: number;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
    link,
    image,
    title,
    year,
    description,
  }) => {
    return (
      <div className='project_card container-xxl'>
          <Link to={link.toString()} className='a.project_card'>
            <div className='project_image_wrapper'>
              <img
                src={image}
                alt={title}
                className='project_image'
              />
            </div>
            <p className='project_title'>{title}</p>
            <p className='project_description'>{description}</p>
            {/* <p className='project_year'>{year}</p> */}
      </Link>
      </div>
    );
  };
  

export default Project;
