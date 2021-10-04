import React, {Fragment} from 'react';
import type {AppProps} from 'next/app';
import {GlobalStyles} from 'twin.macro';
import ThemeProvider from '../theme/theme-provider';
import ThemeStyles from '../theme/theme';
import 'tailwindcss/tailwind.css';
import store from 'src/redux/store';
import {Provider} from 'react-redux';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
