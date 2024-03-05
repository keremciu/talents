import { render, screen } from 'test-utils';
import PeopleTable from './PeopleTable';

describe('PeopleTable', () => {
  it('renders loading state correctly', () => {
    render(<PeopleTable loading={true} />);

    const loadingLogo = screen.getByTitle(/loading logo is shown/i);
    expect(loadingLogo).toBeInTheDocument();
  });

  it('renders empty state correctly', () => {
    render(<PeopleTable loading={false} people={[]} />);

    const emptyText = screen.getByText('No people found.');
    expect(emptyText).toBeInTheDocument();
  });

  it('renders people correctly', () => {
    const people = [
      {
        id: 1,
        name: 'John Doe',
        jobTitle: 'Developer',
        employment: 'Full-time',
        country: 'USA',
        currency: 'USD',
        salary: 5000,
      },
      {
        id: 2,
        name: 'Jane Smith',
        jobTitle: 'Designer',
        employment: 'Part-time',
        country: 'Canada',
        currency: 'CAD',
        salary: 3000,
      },
    ];

    render(<PeopleTable loading={false} people={people} />);

    const johnDoeName = screen.getByText('John Doe');
    const janeSmithName = screen.getByText('Jane Smith');

    expect(johnDoeName).toBeInTheDocument();
    expect(janeSmithName).toBeInTheDocument();
  });

  it('if currency is null do not render salary', () => {
    const people = [
      {
        id: 1,
        name: 'John Doe',
        jobTitle: 'Developer',
        employment: 'Full-time',
        country: 'USA',
        currency: null,
        salary: 5000,
      },
    ];

    render(<PeopleTable loading={false} people={people} />);

    const salaryElement = screen.getByLabelText('Salary');
    expect(salaryElement).toHaveTextContent('N/A');
  });

  it('if salary is null render N/A', () => {
    const people = [
      {
        id: 1,
        name: 'John Doe',
        jobTitle: 'Developer',
        employment: 'Full-time',
        country: 'USA',
        currency: 'USD',
        salary: null,
      },
    ];

    render(<PeopleTable loading={false} people={people} />);

    const salaryElement = screen.getByLabelText('Salary');
    expect(salaryElement).toHaveTextContent('N/A');
  });
});
