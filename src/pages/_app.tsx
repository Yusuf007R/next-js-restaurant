import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {GlobalStyles} from 'twin.macro';
import ThemeProvider from '../theme/theme-provider';
import ThemeStyles from '../theme/theme';
import 'tailwindcss/tailwind.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
