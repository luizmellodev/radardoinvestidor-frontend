import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import SplashScreen from '../components/Splash';

import { SelectedFundsProvider } from 'contexts/SelectedFunds';

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
      <SelectedFundsProvider>
        {isLoading ? (
            <SplashScreen/>
          ) :
        <Component {...pageProps} />}
      </SelectedFundsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
