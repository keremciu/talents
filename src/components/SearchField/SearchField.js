import { StyledLabel, Input, StyledIconSearch } from './SearchField.styled';

export default function SearchField({ ...props }) {
  return (
    <StyledLabel>
      <StyledIconSearch />
      <Input {...props} />
    </StyledLabel>
  );
}

SearchField.defaultProps = {
  type: 'text',
};
