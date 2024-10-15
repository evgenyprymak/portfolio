import React, { useState } from 'react';
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import '../css/Task.css';

interface TaskProps {
    wrapperClassName?: string;
    className?: string;
    title: string;
    image: string;
    details_bg?: string;
    description?: JSX.Element | string;
}

const Task: React.FC<TaskProps> = ({ wrapperClassName, title, description, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={wrapperClassName} onClick={toggleDescription}>
            <div className="task">
                <div className={`task-content ${isExpanded ? 'expanded' : ''}`}>
                    <div className='task-image'><img src={image} alt={title} /></div>
                </div>
                <div className={`task-description ${isExpanded ? 'expanded' : ''}`}>
                <div className="task-title">{title}</div>
                    <div className={`task-description-text ${isExpanded ? 'expanded' : ''}`}> {description} </div>
                </div>
                <button className="task-button" onClick={toggleDescription}>
                    {isExpanded ? <IoRemoveSharp size={24} color="black" /> : <IoAddSharp size={24} color="black" />}
                </button>
            </div>
        </div>
    );
};

export default Task;