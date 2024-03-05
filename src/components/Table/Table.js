import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0;
  ${({ theme }) => theme.typography.bodySmall};
  color: var(--colors-bayoux);
`;

export const TableRow = styled.tr``;

export const TableThCell = styled.th`
  white-space: nowrap;
  padding: 17px 0 17px 20px;
  text-align: left;
  font-size: 0.6875rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--colors-darkBlue);
  background-color: var(--colors-catskillWhite);
  text-align: ${({ $align }) => $align};

  &:last-child {
    padding-right: 20px;
  }
`;

TableThCell.defaultProps = {
  $align: 'left',
};

export const TableCell = styled.td`
  height: 54px;
  padding: 6px 0 8px 20px;
  border-top: 1px solid var(--colors-mischka);
  text-align: ${({ $align }) => $align};
  border-radius: 0;
  background-color: var(--colors-blank);

  &:last-child {
    padding-right: 20px;
  }

  ${TableRow}:hover & {
    background-color: var(--colors-linkWater);
  }

  ${TableRow}:first-child & {
    border-top: 0;
  }

  ${TableRow}:last-child & {
    &:first-child {
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`;

TableCell.defaultProps = {
  $align: 'left',
};
