import { renderWithRouter, screen, within, waitFor, createTextContentMatcher } from 'test-utils';
import userEvent from '@testing-library/user-event';
import db from 'server/db.json';
import { TEXTS } from './People.texts';
import { EmploymentLabel, formatWithCurrency } from './PeopleTable/PeopleTable';
import { countWithPluralAddon } from './PeopleHeader/PeopleHeader';
import { peopleURLObject } from './People';

import { server } from 'mocks/server';
import { http, HttpResponse } from 'msw';

describe('People', () => {
  describe('people page header', () => {
    it('renders page title and add member button', async () => {
      renderWithRouter('/people');
      await waitFor(() => screen.findByRole('link', { name: new RegExp(TEXTS.addMember) }));
      expect(
        screen.getByRole('heading', { level: 2, name: new RegExp(TEXTS.title) }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(countWithPluralAddon(db.people.length, 'member'))),
      ).toBeInTheDocument();
    });

    describe('when user clicks add member button', () => {
      it('goes to people/new page', async () => {
        renderWithRouter('/people');
        await waitFor(() => screen.findByRole('link', { name: new RegExp(TEXTS.addMember) }));
        await userEvent.click(screen.getByRole('link', { name: new RegExp(TEXTS.addMember) }));
        expect(screen.getByRole('heading', { level: 1, name: /add people/i })).toBeInTheDocument();
      });
    });
  });

  describe('people table', () => {
    const assertPeopleTable = (data) =>
      data.forEach((person) => {
        const row = screen.getByRole('cell', { name: person.name }).closest('tr');
        expect(within(row).getByText(person.jobTitle)).toBeInTheDocument();
        expect(within(row).getByText(person.country)).toBeInTheDocument();
        expect(
          within(row).getByText(
            createTextContentMatcher(
              `${person.currency} ${formatWithCurrency(person.currency, person.salary)}`,
            ),
          ),
        ).toBeInTheDocument();
        expect(within(row).getByText(EmploymentLabel[person.employment])).toBeInTheDocument();
      });

    it('renders error message when GET /people request fails', async () => {
      server.use(
        http.get(
          peopleURLObject.toString(),
          () => {
            return HttpResponse.error();
          },
          { once: true },
        ),
      );
      renderWithRouter('/people');
      await waitFor(() => screen.findByText(/something went wrong. couldn't load people!/i));
    });

    it('renders people table with headers and right data', async () => {
      renderWithRouter('/people');
      await waitFor(() =>
        screen.findByRole('heading', { level: 2, name: new RegExp(TEXTS.title) }),
      );
      expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: 'Role' })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: 'Type' })).toBeInTheDocument();
      assertPeopleTable(db.people);
    });

    describe('when user changes search filter input', () => {
      describe('when there is no match with input value', () => {
        it('empty state is shown', async () => {
          renderWithRouter('/people');
          await waitFor(() =>
            screen.findByRole('heading', { level: 2, name: new RegExp(TEXTS.title) }),
          );
          const searchInput = screen.getByPlaceholderText(TEXTS.searchFilterPlaceHolder);
          expect(searchInput).toBeInTheDocument();
          await userEvent.type(searchInput, 'no person data');
          await screen.findByText(/no people found./i);
        });
      });

      describe('when there is a match with input value', () => {
        it('only relevant data is shown', async () => {
          renderWithRouter('/people');
          await waitFor(() =>
            screen.findByRole('heading', { level: 2, name: new RegExp(TEXTS.title) }),
          );
          const searchInput = screen.getByPlaceholderText(TEXTS.searchFilterPlaceHolder);
          expect(searchInput).toBeInTheDocument();

          const firstPersonName = db.people[0].name;
          await userEvent.type(searchInput, firstPersonName);

          await screen.findByText(/1 member/i);

          const filteredPeople = [db.people[0]];
          assertPeopleTable(filteredPeople);
        });
      });
    });

    describe('when user clicks employment filter', () => {
      it('relevant data is shown', async () => {
        renderWithRouter('/people');
        await waitFor(() =>
          screen.findByRole('heading', { level: 2, name: new RegExp(TEXTS.title) }),
        );

        const contractorCheckbox = screen.getByLabelText(/filter by contractors/i);
        expect(contractorCheckbox).toBeInTheDocument();

        await userEvent.click(contractorCheckbox);

        const contractorPeople = [...db.people].filter(
          (person) => person.employment === 'contractor',
        );
        await screen.findByText(new RegExp(`${contractorPeople.length} members`));
        assertPeopleTable(contractorPeople);
      });
    });
  });
});
