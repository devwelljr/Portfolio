import React from 'react';
import crud from '../images/movie-crud.png';
import pixel from '../images/pixel-art.png';
import shopping from '../images/shopping-cart.png';
import trybewallet from '../images/trybewallet.png';
import trivia from '../images/trivia.png';
import ContainerSection from '../styles/sectionStyle';

function allProjects() {
  return (
    <div id="divProjects">
      <ContainerSection>
        <div id="divInfo">
          <h2 className="fs-3 font-monospace text-white text-decoration-underline">
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
            <li>Delete a movie from the list - DELETE;</li>
          </ul>
          <ul
            type="none"
            className="font-monospace text-white list-group list-inline ulLinks"
          >
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://devwelljr.github.io/movie-crud/"
              >
                {'DEMO ->'}
              </a>
            </li>
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://github.com/devwelljr/movie-crud"
              >
                {'REPOSITORY ->'}
              </a>
            </li>
          </ul>
        </div>
        <img className="imgsProject" src={crud} alt="print movie crud" />
      </ContainerSection>
      <ContainerSection>
        <img className="imgsProject" src={trivia} alt="print trivia" />
        <div id="divInfo">
          <h2 className="fs-3 font-monospace text-white text-decoration-underline">
            TRIVIA
          </h2>
          <p className="font-monospace text-white">
            This project is a quiz game based on the Trivia game, using React and Redux.
            You can perform the following operations on this project:
          </p>
          <ul className="font-monospace text-white">
            <li>
              Log in to the game and, if the email is registered on the Gravatar website,
              have your photo associated with the user profile;
            </li>
            <li>
              Access the page referring to the game, where you must choose one of the answers
              available for each of the questions presented.
              The answer must be marked before the timer reaches zero,
              otherwise the answer must be considered wrong;
            </li>
            <li>
              Be redirected, after 5 answered questions, to the score screen,
              where the text shown depends on the number of correct answers;
            </li>
          </ul>
          <ul
            type="none"
            className="font-monospace text-white list-group list-inline ulLinks"
          >
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://devwelljr.github.io/trivia/"
              >
                {'DEMO ->'}
              </a>
            </li>
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://github.com/devwelljr/trivia"
              >
                {'REPOSITORY ->'}
              </a>
            </li>
          </ul>
        </div>
      </ContainerSection>
      <ContainerSection>
        <img className="imgsProject" src={trybewallet} alt="print trybewallet" />
        <div id="divInfo">
          <h2 className="fs-3 font-monospace text-white text-decoration-underline">
            TRYBEWALLET
          </h2>
          <p className="font-monospace text-white">
            This project is a personal expense control using react and redux for state management.
            You can perform the following operations on this project:
          </p>
          <ul className="font-monospace text-white">
            <li>
              Login verifying that the email is valid and the password is longer than 6 characters;
            </li>
            <li>
              Add new expense by adding the following information:
              amount, description, type, currency and payment method.
            </li>
            <li>Delete a expense from the table;</li>
          </ul>
          <ul
            type="none"
            className="font-monospace text-white list-group list-inline ulLinks"
          >
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://devwelljr.github.io/trybewallet/"
              >
                {'DEMO ->'}
              </a>
            </li>
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://github.com/devwelljr/trybewallet"
              >
                {'REPOSITORY ->'}
              </a>
            </li>
          </ul>
        </div>
      </ContainerSection>
      <ContainerSection>
        <div id="divInfo">
          <h2 className="fs-3 font-monospace text-white text-decoration-underline">
            SHOPPING CART
          </h2>
          <p className="font-monospace text-white">
            This project contains a shopping cart where you can perform the following operations
            In this project:
          </p>
          <ul className="font-monospace text-white">
            <li>Add an item to cart;</li>
            <li>Remove an item from the cart;</li>
            <li>Total sum of cart;</li>
          </ul>
          <ul
            type="none"
            className="font-monospace text-white list-group list-inline ulLinks"
          >
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://devwelljr.github.io/shopping-cart/"
              >
                {'DEMO ->'}
              </a>
            </li>
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://github.com/devwelljr/shopping-cart"
              >
                {'REPOSITORY ->'}
              </a>
            </li>
          </ul>
        </div>
        <img className="imgsProject" src={shopping} alt="print shopping cart" />
      </ContainerSection>
      <ContainerSection>
        <img className="imgsProject" src={pixel} alt="print pixel art" />
        <div id="divInfo">
          <h2 className="fs-3 font-monospace text-white text-decoration-underline">
            PIXEL ART
          </h2>
          <p className="font-monospace text-white">
            This project contains a functional color palette that can be used
            to create pixel drawings. You can perform the following operations
            on this project:
          </p>
          <ul className="font-monospace text-white">
            <li>Draw a picture and pixel;</li>
            <li>Change the drawing frame size;</li>
            <li>Generate random colors on each load;</li>
          </ul>
          <ul
            type="none"
            className="font-monospace text-white list-group list-inline ulLinks"
          >
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://devwelljr.github.io/pixels-art/"
              >
                {'DEMO ->'}
              </a>
            </li>
            <li className="liUl">
              <a
                className="ulLinks"
                target="_blanck"
                href="https://github.com/devwelljr/pixels-art"
              >
                {'REPOSITORY ->'}
              </a>
            </li>
          </ul>
        </div>
      </ContainerSection>
    </div>
  );
}

export default allProjects;
