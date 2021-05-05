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
    color: #f8f6f9;
    height: 100%;
    background-color: #2c2f37;
    
    /* background by SVGBackgrounds.com */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23373b45' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23626e60'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  }
  h1 {
    margin-bottom: 1.45rem;
    margin-top: 0;
    color: #dfdfe1;
    font-family: "Cabana";
    font-weight: bold;
    font-size: 4.25rem;
    line-height: 1.1;
    letter-spacing: 0.1rem;
  }
  h2 {
    margin-bottom: 1.45rem;
    margin-top: 0;
    color: #dfdfe1;
    font-family: "Cabana";
    font-weight: bold;
    font-size: 2.75rem;
    line-height: 1.1;
    letter-spacing: 0.1rem;
  }
  a {
    color: #dfdfe1;
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
