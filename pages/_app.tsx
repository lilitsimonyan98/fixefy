import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from '../styles/global';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (<CacheProvider value={muiCache}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles styles={globalStyles}/>
    </ThemeProvider>
  </CacheProvider>)

}

export default MyApp
