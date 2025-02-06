import { css, Global } from "@emotion/react";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
  }

  .box-sizing-none {
    *,
    *::before,
    *::after {
      box-sizing: unset;
    }
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  span,
  div,
  ul,
  li,
  img,
  a,
  table {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-spacing: 0;
  }
`;

const GlobalStyles = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
