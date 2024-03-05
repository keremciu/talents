import { HiddenInput, StyledCheckbox, CheckboxWrapper, StyledLabel } from './Checkbox.styled';

export default function Checkbox({ label, ...props }) {
  return (
    <StyledLabel>
      <HiddenInput tabIndex={0} type="checkbox" {...props} />
      <CheckboxWrapper>
        {label}
        <StyledCheckbox />
      </CheckboxWrapper>
    </StyledLabel>
  );
}
