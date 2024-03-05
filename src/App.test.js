import { render, renderWithRouter, screen } from 'test-utils';
import App from './App';
import { userFake } from 'components/Header/Header';

describe('App', () => {
  it('renders', async () => {
    render(<App />);
    expect(screen.getByText(userFake.name)).toBeInTheDocument();
    expect(screen.getByText(userFake.role)).toBeInTheDocument();
  });

  it('render playground page', async () => {
    renderWithRouter('/playground');
    expect(screen.getByRole('heading', { name: /playground/i })).toBeInTheDocument();
  });
});
