import './css/Project.css';
import exampleImage from './assets/desktop_5.jpg';

interface ProjectProps {
  image?: string; 
  title: string;
  year: number;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ image = exampleImage, title, year, description }) => {
  return (
    <div className='project_card'>
      <img src={image} alt={title} className='project_image' />
      <p className='project_title'>{title}</p>
      <p className='project_desciption'>{description}</p>
      <p className='project_year'>{year}</p>
    </div>
  );
};

export default Project;
