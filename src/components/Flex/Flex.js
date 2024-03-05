import styled from 'styled-components';

const flexboxStyles = ({ $alignItems, $justifyContent, $flexWrap, $flexDirection }) => `
  display: flex;
  ${$alignItems ? `align-items: ${$alignItems};` : ''}
  ${$justifyContent ? `justify-content: ${$justifyContent};` : ''}
  ${$flexWrap ? `flex-wrap: ${$flexWrap};` : ''}
  ${$flexDirection ? `flex-direction: ${$flexDirection};` : ''}
`;

const Flex = styled.div`
  ${flexboxStyles}
  ${({ theme }) => theme.space}
`;

export default Flex;
