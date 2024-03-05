import { Form, useSubmit, useSearchParams } from 'react-router-dom';

import useDebouncedCallback from 'hooks/useDebouncedCallback';
import SearchField from 'components/SearchField';
import Checkbox from 'components/Checkbox';
import Flex from 'components/Flex';

import { FilterWrapper } from './PeopleFilters.styled';
import { TEXTS } from '../People.texts';

const SEARCH_DEBOUNCE_DELAY = 500;

export default function PeopleFilters() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const debouncedSubmit = useDebouncedCallback(submit, SEARCH_DEBOUNCE_DELAY);
  const handleFormChange = (event) => {
    if (event.target.name === 'name_like') {
      debouncedSubmit(event.currentTarget);
    } else {
      submit(event.currentTarget);
    }
  };

  return (
    <FilterWrapper>
      <Form method="get" action="/people" onChange={handleFormChange}>
        <Flex $alignItems="center" $justifyContent="space-between">
          <SearchField
            name="name_like"
            placeholder={TEXTS.searchFilterPlaceHolder}
            defaultValue={searchParams.get('name_like')}
          />
          <div>
            <Checkbox
              aria-label="Filter by contractors"
              name="employment"
              label="Contractor"
              value="contractor"
              defaultChecked={searchParams.get('employment') === 'contractor'}
            />
            <Checkbox
              aria-label="Filter by employees"
              name="employment"
              label="Employee"
              value="employee"
              defaultChecked={searchParams.get('employment') === 'employee'}
            />
          </div>
        </Flex>
      </Form>
    </FilterWrapper>
  );
}
