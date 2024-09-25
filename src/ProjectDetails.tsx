// @ts-ignore
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID проекта из URL

  // Здесь ты можешь использовать id для загрузки данных о проекте
  // Например, из массива объектов или API

  return (
    <div className="bg-primary">
      <h1>Project Details for {id}</h1>
      {/* Здесь можно отобразить дополнительные данные о проекте */}
    </div>
  );
};

export default ProjectDetails;