import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    /* Color */
    --black-default: #000000;
    --grey-dark: #585858;
    --grey-normal: #898C8E;
    --grey-light: #DCDCDC;
    --grey-blur-light: #F6F6F6;
    --white-default: #ffffff;

    --blue-normal: #0E4A84;
    --blue-light: #AACEEC;
    --blue-blur-light: #DAEBF9;

    --yellow-money: #FFCB41;
    --red-caution: #FF6651;
    --green-success: #51D486;

    /* Font size */
    --font-huge: 32px;
    --font-large: 24px;
    --font-medium: 20px;
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
    background-color: #e3ecf2;
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

`;

export default GlobalStyle;
