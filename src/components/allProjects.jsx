import React from 'react';
import crud from '../images/movie-crud.png';
import pixel from '../images/pixel-art.png';
import shopping from '../images/shopping-cart.png';
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
            <li>And delete a movie from the list - DELETE;</li>
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
