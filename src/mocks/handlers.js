import { http, HttpResponse, delay } from 'msw';

import db from 'server/db.json';
import { peopleURLObject } from 'pages/People/People.fetcher';

const IS_NODE_PROCESS = typeof process !== 'undefined';

export const handlers = [
  http.get(peopleURLObject.toString(), async ({ request }, ...everything) => {
    const url = new URL(request.url);
    const name_like_param = url.searchParams.get('name_like');
    const employment_params = url.searchParams.getAll('employment');
    await delay(IS_NODE_PROCESS ? 0 : 500);

    if (name_like_param || employment_params) {
      const filteredData = db.people.filter((person) => {
        const nameMatch =
          !name_like_param || person.name.toLowerCase().includes(name_like_param.toLowerCase());
        const employmentMatch =
          !employment_params.length || employment_params.includes(person.employment);
        return nameMatch && employmentMatch;
      });
      return HttpResponse.json(filteredData);
    }
    return HttpResponse.json(db.people);
  }),
];
