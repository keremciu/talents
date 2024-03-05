import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import Header from './components/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
