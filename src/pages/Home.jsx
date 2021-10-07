import React from 'react';
import '../styles/Home.css';
import eu from '../images/eu.jpeg';

function Home() {
  return (
    <main id='divHome'>
      <div id='textosHome'>
        <p className='fs-3 font-monospace text-white'>Hello, I am</p>
        <p className='fs-1' id='name'>
          WELLINGTON GREGORIO
        </p>
        <h1
          className='fs-2 font-monospace text-white'
          id='pAni'
        >{`{ I'm Web Developer }`}</h1>
        <button type='button' id='bCV' className='btn btn-light'>
          <a
            href='https://github.com/devwelljr/portfolio/blob/master/src/images/WellingtonCurr%C3%ADculo.pdf'
            target="_blank"
            download='WellingtonCurrículo'
            className='btn text-dark'
            rel="noreferrer"
          >
            Download CV
          </a>
        </button>
      </div>
      <div id='imagemHome'>
        <img
          src={eu}
          alt='Wellington com blusa de frio preta'
          id='foto-minha'
        />
      </div>
    </main>
  );
}

export default Home;
