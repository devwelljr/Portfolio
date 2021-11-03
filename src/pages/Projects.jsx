import React from 'react';
import '../styles/Projects.css';
import allProjects from '../components/allProjects';

function Projects() {
  return (
    <div id="mainDivPro">
      <h1
        id="title"
        className="font-monospace text-white text-decoration-underline"
      >
        Projects
      </h1>
      { allProjects() }
    </div>
  );
}

export default Projects;
