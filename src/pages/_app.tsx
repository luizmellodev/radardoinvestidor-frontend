import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import SplashScreen from '../components/Splash';

import { FundsProvider } from 'contexts/Funds';
import { FilterProvider } from 'contexts/Filters';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FundsProvider>
        <FilterProvider>
          <ToastContainer />
          {isLoading ? <SplashScreen /> : <Component {...pageProps} />}
        </FilterProvider>
      </FundsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
