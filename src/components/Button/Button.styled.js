import styled, { css, keyframes } from 'styled-components';

export const commonButtonStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border-radius: 24px;
  transition:
    background 250ms,
    box-shadow 250ms;

  background: var(--colors-primary);
  color: var(--colors-blank);
  box-shadow:
    0px 0px 0px 0px var(--colors-primaryHover, rgb(47, 47, 55)),
    inset 0px 2px 4px 0px rgba(255, 255, 255, 0.25),
    inset 0px 1px 1px 0px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow:
      0px 0px 0px 6px var(--colors-primaryHover, rgb(47, 47, 55)),
      inset 0px 2px 4px 0px rgba(255, 255, 255, 0.25),
      inset 0px 1px 1px 0px rgba(255, 255, 255, 0.15);
  }
  &:focus-visible,
  &:focus-within,
  &:focus {
    outline: none;
    box-shadow:
      0px 0px 0px 3px var(--colors-primaryHover, rgb(47, 47, 55)),
      inset 0px 2px 4px 0px rgba(0, 0, 0, 0.25),
      inset 0px 1px 1px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const ButtonStyled = styled.button`
  ${commonButtonStyles};
  border: none;
`;

export const Text = styled.span`
  transition: color 250ms;

  ${({ isLoading }) =>
    isLoading &&
    css`
      color: transparent;
    `}
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.span`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  border-width: 2px;
  border-color: inherit;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-radius: 50%;
  animation: ${spin} 0.45s linear infinite;
`;
