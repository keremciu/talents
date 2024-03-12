import { Suspense } from 'react';
import { Await, useLoaderData, defer, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

import { peopleQuery } from './People.fetcher';
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

export const loader =
  (queryClient) =>
  async ({ request }) =>
    defer({
      peopleData: queryClient.ensureQueryData(peopleQuery(request)),
    });

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
