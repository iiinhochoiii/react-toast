import { css, Global } from "@emotion/react";

const styles = css`
  body {
    margin: 0;
    min-height: 100vh;
  }

  p,
  span {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

const GlobalStyles = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
