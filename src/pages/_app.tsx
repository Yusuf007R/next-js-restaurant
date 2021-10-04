import React, {Fragment} from 'react';
import type {AppProps} from 'next/app';
import {GlobalStyles} from 'twin.macro';
import ThemeProvider from '../theme/theme-provider';
import ThemeStyles from '../theme/theme';
import 'tailwindcss/tailwind.css';
import store from 'src/redux/store';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeStyles />
      <ThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
