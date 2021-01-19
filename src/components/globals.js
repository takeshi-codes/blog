import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Cabana from '../assets/Cabana.otf';
import FoxAndCat from '../assets/FoxAndCat.ttf';

/* Cabana font from https://adrien-coquet.com/ */

/* Fox & Cat font from https://www.graphicpear.com/fox-cat-typeface/ */

const Globals = createGlobalStyle`
  @font-face {
    font-family: Cabana;
    src: url(${Cabana});
  }
  @font-face {
    font-family: FoxAndCat;
    src: url(${FoxAndCat});
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
    height: 100%;
  }
  body {
    margin: 0;
    word-wrap: break-word;
    font-family: "FoxAndCat";
    font-size: 1.5rem;
    text-rendering: optimizeLegibility;
    color: #3c3c3c;
    background: #f8f6f9;
    height: 100%;
  }
  h1 {
    margin-bottom: 1.45rem;
    margin-top: 0;
    color: #945d60;
    font-family: "Cabana";
    font-weight: bold;
    font-size: 4.25rem;
    line-height: 1.1;
    letter-spacing: 0.1rem;
  }
  h2 {
    margin-bottom: 1.45rem;
    margin-top: 0;
    color: #945d60;
    font-family: "Cabana";
    font-weight: bold;
    font-size: 2.75rem;
    line-height: 1.1;
    letter-spacing: 0.1rem;
  }
  a {
    text-decoration: none;
    color: #945d60;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
  .screen-reader-only{
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px 1px 1px 1px); // IE 6 and 7
    clip: rect(1px,1px,1px,1px);
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    overflow: hidden !important;
  }
`;

const GlobalStyles = () => {
  return <Globals />;
};

export default GlobalStyles;
