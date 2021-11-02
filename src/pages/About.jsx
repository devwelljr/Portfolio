import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div id="divAbout">
      <p id="abText" className="text-white text-center">
        I am a Full Stack developer, currently specializing in ReactJS. I am 22
        years old and currently live in Minas Gerais - Brazil. I am Studying Web
        Software Development since April 2021 at Trybe.
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.betrybe.com/"
        >
          <img
            src="https://avatars.githubusercontent.com/u/51808343?s=280&v=4"
            alt="Logo da Trybe"
            width="30px"
          />
        </a>
      </p>
      <ul id="ulHS" className="text-white text-center list-inline" type="none">
        <h3>Hard Skills</h3>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="CSS3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="HTML5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        </li>
        <hr />
        <li className="list-inline-item">
          <img
            width="60px"
            alt="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="Bootstrap"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="Redux"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
        </li>
        <hr />
        <li className="list-inline-item">
          <img
            width="60px"
            alt="Jest"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="RTL"
            src="https://testing-library.com/img/octopus-128x128.png"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="80px"
            alt="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          />
        </li>
        <hr />
        <li className="list-inline-item">
          <img
            width="80px"
            alt="mySQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="60px"
            alt="mongoDB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
        </li>
        <li className="list-inline-item">
          <img
            width="80px"
            alt="nodeJS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          />
        </li>
      </ul>
    </div>
  );
}

export default About;
