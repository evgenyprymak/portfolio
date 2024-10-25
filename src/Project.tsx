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
  comingsoon?: boolean;
}

const Project: React.FC<ProjectProps> = ({
    link,
    image,
    title,
    year,
    description,
    comingsoon,
  }) => {
    return (
      <div className={`project_card container-xxl `}>
          <Link to={link.toString()} className={`a.project_card ${comingsoon ? 'coming_soon' : ''}`}>
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
