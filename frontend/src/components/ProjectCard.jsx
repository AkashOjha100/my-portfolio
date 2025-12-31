import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  );
};

export default ProjectCard;