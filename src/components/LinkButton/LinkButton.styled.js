import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { commonButtonStyles } from 'components/Button/Button.styled';

export const StyledLink = styled(Link)`
  ${commonButtonStyles};
  padding-left: 20px;
  text-decoration: none;
`;
