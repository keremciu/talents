import { Suspense } from 'react';
import { Await, useLoaderData, defer, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

import PeopleTable from './PeopleTable';
import PeopleHeader from './PeopleHeader';
import PeopleFilters from './PeopleFilters';
import LinkPlayground from 'components/LinkPlayground';

const Container = styled.main`
  margin: 40px auto;
  padding: 0 16px;
  width: 100%;
  max-width: var(--layout-width);
`;

export const peopleURLObject = new URL('people', process.env.REACT_APP_API_URL);

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const copySearchParams = Array.from(searchParams);
  for (const [key, value] of copySearchParams) {
    if (value === '') {
      searchParams.delete(key);
    }
  }
  const updatedURLObject = new URL(peopleURLObject.toString());
  updatedURLObject.search = searchParams;
  return defer({
    peopleData: fetch(updatedURLObject.toString(), { signal: request.signal }).then((response) => {
      if (!response.ok) {
        throw new Error('GET /people Network response failed!');
      }
      return response.json();
    }),
  });
}

export default function People() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const busy = navigation.state === 'loading';
  return (
    <Container>
      <Suspense fallback={<PeopleHeader />}>
        <Await resolve={data.peopleData} errorElement={<PeopleHeader />}>
          {(resolvedData) => <PeopleHeader peopleCount={resolvedData.length} />}
        </Await>
      </Suspense>
      <PeopleFilters />
      <Suspense fallback={<PeopleTable loading />}>
        <Await
          resolve={data.peopleData}
          errorElement={<p>Something went wrong. Couldn't load people!</p>}
        >
          {(resolvedData) => <PeopleTable loading={busy} people={resolvedData} />}
        </Await>
      </Suspense>
      <LinkPlayground />
    </Container>
  );
}
