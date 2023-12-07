// .App {
//   text-align: center;
// }

// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-spin infinite 20s linear;
//   }
// }

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

// .App-link {
//   color: #61dafb;
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// * {
//   margin: 0;
//   padding: 0;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }

// *:before,
// *:after {
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }

// a,
// a:visited {
//   text-decoration: none;
//   font-family: "StratosSkyeng", sans-serif;
//   cursor: pointer;
// }

// button,
// ._btn {
//   cursor: pointer;
// }

// ul li {
//   list-style: none;
// }

// @font-face {
//   font-family: "StratosSkyeng";
//   /* src: local("StratosSkyeng"), local("StratosSkyeng"),
//     url("./public/fonts/StratosSkyeng.woff2") format("woff2"),
//     url("public/fonts/StratosSkyeng.woff") format("woff"); */
//   font-weight: 400;
//   font-style: normal;
// }
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
  }

  body {
  background-color: #fafafa;
  // background-color: #271A58;
  }

  @font-face {
    font-family: "StratosSkyeng", sans-serif;
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../../../../public/fonts/StratosSkyeng.woff2") format("woff2"),
      url("../../../../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  } 
  
`;