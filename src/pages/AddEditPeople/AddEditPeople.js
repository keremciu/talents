import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export default function AddEditPeople() {
  return (
    <Container>
      <h1>Add People</h1>
      <p>Form goes here</p>
      <Link to="/people">Back to main page</Link>
    </Container>
  );
}
