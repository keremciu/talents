import styled, { keyframes } from 'styled-components';

const logoAnimation = keyframes`
  0%, 25% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 650px;
  }
`;

const LoaderWrapper = styled.div`
  width: 36px;

  svg .logo {
    stroke-dashoffset: 0;
    stroke-dasharray: 200px;
    animation: ${logoAnimation} 0.9s infinite alternate;
    animation-timing-function: ease-in;
  }
`;

const LogoLoader = (props) => (
  <LoaderWrapper {...props}>
    <svg viewBox="0 0 231 310" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Loading logo is shown</title>
      <path
        d="M100 100V200H130V100H170V80H100V100Z"
        stroke="var(--colors-primary)"
        strokeWidth="76"
        className="logo"
      />
    </svg>
  </LoaderWrapper>
);

export default LogoLoader;
