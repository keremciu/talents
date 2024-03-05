import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routes } from 'route.config';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (request.url?.includes('/api')) {
        print.warning(`Unhandled ${request.method} request to ${request.url}`);
      }
      return;
    },
  });
}

enableMocking().then(() => {
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  const router = createBrowserRouter(routes);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<div>Loading the app...</div>} />
    </React.StrictMode>,
  );
});
