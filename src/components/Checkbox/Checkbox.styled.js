import styled from 'styled-components';

export const StyledCheckbox = styled.span`
  position: relative;
  height: 14px;
  width: 14px;
  margin-left: var(--theme-space-12);
  margin-right: 3px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid var(--colors-spindle);
  transition: all 0.2s ease;
  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background-color: var(--colors-primary);
    transition: background-color 0.3s ease;
  }
`;

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 41px;
  letter-spacing: -0.1px;
  border: 1.5px solid var(--colors-spindle);
  border-radius: 12px;
  padding: var(--theme-space-8) var(--theme-space-12);
  cursor: pointer;
  transition:
    box-shadow,
    background 0.2s ease-in;
  ${({ theme }) => theme.typography.bodySmallMedium};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledLabel = styled.label`
  outline: none;
  & + & {
    margin-left: var(--theme-space-16);
  }
  &:hover ${CheckboxWrapper} {
    background-color: var(--colors-catskillWhite);
  }
  &:focus-within ${CheckboxWrapper}, &:active ${CheckboxWrapper}, &:focus ${CheckboxWrapper} {
    background: white;
    box-shadow:
      0px 0px 0px 1.5px white,
      0px 0px 0px 3px var(--colors-primary);
  }
  input:not(:checked) ~ ${CheckboxWrapper}:hover ${StyledCheckbox} {
    border-color: var(--colors-primary);
  }
  input:checked ~ ${CheckboxWrapper} ${StyledCheckbox} {
    background-color: white;
    &:after {
      display: block;
    }
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
