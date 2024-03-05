import React from 'react';
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './route.config';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const router = (route = '/') =>
  createMemoryRouter(routes, {
    initialEntries: [route],
    initialIndex: 1,
  });

export const renderWithRouter = (route) => render(<RouterProvider router={router(route)} />);

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
