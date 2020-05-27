import { css } from '@emotion/core';

export const { sm, md, lg, xl } = {
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
};

export const { color } = {
  color: {
    blueColor: '#3498db',
    greyColor: '#7f8c8d',
  },
};

export const theme = css`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input,
  button {
    &:focus,
    &:active {
      outline: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Maven Pro', sans-serif;
  }
`;
