import styled from 'styled-components';

import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

export const StyledLabel = styled.label`
  height: 41px;
  min-width: 220px;
  display: inline-flex;
  align-items: center;
  background: none;
  border-radius: 24px;
  padding: var(--theme-space-8);
  &:hover {
    background: var(--colors-linkWater);
  }
  &:focus-within {
    box-shadow:
      0px 0px 0px 1.5px white,
      0px 0px 0px 3px var(--colors-blueGray);
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color: var(--colors-darkBlue);
  ${({ theme }) => theme.typography.bodySmall};
  &::placeholder {
    color: var(--colors-lynch);
  }
  &:focus::placeholder {
    color: var(--colors-bayoux);
  }
`;

export const StyledIconSearch = styled(IconSearch)`
  margin-right: 2px;
  height: 16px;
  fill: var(--colors-lynch);
`;
