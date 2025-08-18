import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    /* background-color: #f8f6f0; */
    margin: 0;
    padding: 0;
    font-family: "League Spartan", sans-serif;
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p, span, div, a, button {
    font-family: "League Spartan", sans-serif;
    font-weight: 300;
  }
`;
