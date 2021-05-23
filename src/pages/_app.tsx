import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import SplashScreen from '../components/Splash';

import { FundsProvider } from 'contexts/Funds';

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
        <ToastContainer />
        {isLoading ? <SplashScreen /> : <Component {...pageProps} />}
      </FundsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
