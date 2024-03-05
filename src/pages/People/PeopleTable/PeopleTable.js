import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import Flex from 'components/Flex';
import LoadingLogo from 'components/LoadingLogo';

const formatters = {};

export const formatWithCurrency = (currency, amount) => {
  if (!amount) {
    return 'N/A';
  }

  if (!formatters[currency]) {
    formatters[currency] = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency,
      currencyDisplay: 'narrowSymbol',
    });
  }

  return formatters[currency].format(amount);
};

export const EmploymentLabel = {
  employee: 'Employee',
  contractor: 'Contractor',
};

export default function PeopleTable({ loading, people = [] }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableThCell>Name</TableThCell>
          <TableThCell>Role</TableThCell>
          <TableThCell>Type</TableThCell>
          <TableThCell>Country</TableThCell>
          <TableThCell $align="right">Salary</TableThCell>
        </tr>
      </thead>
      <tbody aria-live="polite">
        {loading ? (
          <TableRow>
            <TableCell colSpan="5" $align="center">
              <Flex $justifyContent="center" $py={64}>
                <LoadingLogo />
              </Flex>
            </TableCell>
          </TableRow>
        ) : people.length ? (
          people.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.jobTitle}</TableCell>
              <TableCell>{EmploymentLabel[person.employment]}</TableCell>
              <TableCell>{person.country}</TableCell>
              <TableCell $align="right" aria-label="Salary">
                {person.currency
                  ? person.currency + ' ' + formatWithCurrency(person.currency, person.salary)
                  : 'N/A'}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan="5" $align="center">
              No people found.
            </TableCell>
          </TableRow>
        )}
      </tbody>
    </Table>
  );
}
