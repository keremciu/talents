import { queryOptions } from '@tanstack/react-query';

export const peopleURLObject = new URL('people', process.env.REACT_APP_API_URL);

export const peopleQuery = (request) => {
  const params = new URL(request.url).searchParams;
  const copySearchParams = Array.from(params);
  for (const [key, value] of copySearchParams) {
    if (value === '') {
      params.delete(key);
    }
  }
  return queryOptions({
    queryKey: ['people', 'list', params.toString()],
    queryFn: async () => {
      const updatedURLObject = new URL(peopleURLObject.toString());
      updatedURLObject.search = params;
      return fetch(updatedURLObject.toString(), { signal: request.signal }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('GET /people Network response failed!');
        }
      });
    },
  });
};
