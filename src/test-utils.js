import React from 'react';
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './route.config';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from './theme';

export const queryClient = new QueryClient({
  defaultOptions: {
    enabled: false,
    retry: false,
    queries: {
      gcTime: 0,
    },
  },
});

const router = (route = '/') =>
  createMemoryRouter(routes(queryClient), {
    initialEntries: [route],
    initialIndex: 1,
  });

export const renderWithRouter = (route) =>
  render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router(route)} />
    </QueryClientProvider>,
  );

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

export const createTextContentMatcher = (expectedContent) => {
  return (_, node) => {
    const hasText = (node) => node.textContent === expectedContent;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

    return nodeHasText && childrenDontHaveText;
  };
};
