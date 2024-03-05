import { StyledLink } from './LinkButton.styled';

export default function LinkButton({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>;
}
