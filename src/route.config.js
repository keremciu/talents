import { useRouteError, Navigate } from 'react-router-dom';

import App from './App';
import Playground from './pages/Playground';
import People, { loader as peopleLoader } from './pages/People';
import AddEditPeople from './pages/AddEditPeople';

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Something went wrong.</div>;
}

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        path: 'people',
        element: <People />,
        loader: peopleLoader,
      },
      {
        path: 'people/new',
        element: <AddEditPeople />,
      },
      {
        path: 'people/edit/:id',
        element: <AddEditPeople />,
      },
      {
        path: 'playground',
        element: <Playground />,
      },
      {
        path: '*',
        element: <Navigate to="/people" replace />,
      },
    ],
  },
  {
    index: true,
    element: <Navigate to="/people" replace />,
  },
];
