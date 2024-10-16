import React, { useState } from 'react';
import '../css/Task.css';

interface TaskProps {
    wrapperClassName?: string;
    className?: string;
    title: string;
    image: string;
    details_bg?: string;
    description?: JSX.Element | string;
    bgColor?: string;
    // tag1?: string;
    // tag2?: string;
}

const Task: React.FC<TaskProps> = ({ wrapperClassName, title, description, image, bgColor="#7b92cb"}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={wrapperClassName} onClick={toggleDescription}>
            <div className={`task ${isExpanded ? 'expanded' : ''}`}>
                <div className={`task-content ${isExpanded ? 'expanded' : ''}`}>
                    <div className='task-image' style={{ backgroundColor: bgColor }}><img src={image} alt={title} /></div>
                </div>
                <div className={`task-description ${isExpanded ? 'expanded' : ''}`}>
                    <div className="task-title">{title}</div>
                    <div className={`task-description-text ${isExpanded ? 'expanded' : ''}`}> {description} </div>
                </div>
                <button className="task-btn" onClick={toggleDescription}>
                    <img src='/portfolio/assets/icons/icon_close.svg' alt="Close" className={`icon ${isExpanded ? 'expanded' : ''}`} />
                </button>
                {/* <div className='tags'><span>{tag1}</span><span>{tag2}</span></div> */}
            </div>
        </div>
    );
};

export default Task;