import React from 'react';

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gery-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the Sonik</p>
        <p className="grey-text">3rd of March, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary;