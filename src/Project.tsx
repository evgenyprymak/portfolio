import React from 'react';
import './css/Project.css';
import exampleImage from './assets/desktop_5.jpg';

interface ProjectProps {
  link?: URL;
  image?: string; 
  title: string;
  year: number;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
    image = exampleImage,
    link = './project_quasar.html',
    title,
    year,
    description,
  }) => {
    return (
      <div className='project_card'>
        {link && (
          <a href={link.toString()} target="_self" rel="noopener noreferrer">
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
          </a>
        )}
      </div>
    );
  };
  

export default Project;
