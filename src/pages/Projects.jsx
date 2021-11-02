import React from 'react';
import '../styles/Projects.css';
import crud from '../images/movie-crud.png';
import ContainerSection from '../styles/sectionStyle';

function Projects() {
  return (
    <div id="mainDivPro">
      <h1 className="fs-3 font-monospace text-white">Projects</h1>
      <div id="divProjects">
        <ContainerSection>
          <div id="divInfo">
            <h2 className="fs-3 font-monospace text-white">
              MOVIE CARD LIBRARY CRUD
            </h2>
            <p className="font-monospace text-white">
              This project is a CRUD of film cards in React. You can perform the
              following operations on this project:
            </p>
            <ul className="font-monospace text-white">
              <li>Add a new movie to the list - CREATE;</li>
              <li>
                List all registered movies, with a summary information page
                about each movie and a detailed information page for a selected
                movie - READ;
              </li>
              <li>Edit a movie from the list - UPDATE;</li>
              <li>And delete a movie from the list - DELETE;</li>
            </ul>
            <ul
              type="none"
              className="font-monospace text-white list-group list-inline ulLinks"
            >
              <li>
                <a className="ulLinks" target="_blanck" href="https://devwelljr.github.io/movie-crud/">
                  {'DEMO ->'}
                </a>
              </li>
              <li>
                <a className="ulLinks" target="_blanck" href="https://github.com/devwelljr/movie-crud">
                  {'REPOSITORY ->'}
                </a>
              </li>
            </ul>
          </div>
          <img className="imgsProject" src={crud} alt="print movie crud" />
        </ContainerSection>
      </div>
    </div>
  );
}

export default Projects;
