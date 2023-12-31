import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global */
  :root {
    /* Color */
    --color-white: #ffffff;
    --color-blur-white: #DCDCDC;
    --color-dark-white: #f6f6f6;

    --color-black: #000000;
    --color-light-black: #333333;

    --color-grey: #939393;
    --color-light-grey: #959595;
    --color-dark-grey: #585858;

    --color-blue: #00457E;
    --color-light-blue: #4D7DA5;
    --color-blur-blue: #AACEEC;

    --color-orange: #F08100;
    --color-yellow: #FFCB41;
    --color-light-yellow: #FFEAB5;

    --color-system-error: #FF6651;
    --color-system-success: #51D486;

    /* Font size */
    --font-huge: 60px;
    --font-large: 22px;
    --font-medium: 18px;
    --font-regular: 16px;
    --font-small: 14px;
    --font-micro: 12px;
    --font-minor: 10px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 500;
    --weight-thin: 400;

    /* Animation Duration */
    --animation-duration: 300ms;

    /* Responsive Width */
    --responsive-width: 764px;
  }

  /* Universal tags */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #DCE9F3;
    margin : 0;
    padding : 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-left: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  hr {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;

    width: 100%;
    height: 4px;
    background-color: var(--color-dark-white);
  }

  /* Typography */
h2 {
  font-size: var(--font-large);
  font-weight: var(--weight-regular);
  font-display: swap;
  margin: 0px 0px;
}

h3 {
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  font-display: swap;
  margin: 0px 0px;
}
`;

export default GlobalStyle;
