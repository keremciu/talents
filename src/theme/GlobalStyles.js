import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { spaceCssVariables } from './space';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  :root {
    ${colors}
    ${spaceCssVariables}

    --font-primary: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    --layout-width: 1100px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    ${({ theme }) => theme.typography.body};
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--colors-darkBlue);
    background-color: var(--colors-linkWater);
  }
`;

export default GlobalStyles;
