import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import {store} from '../store'
import '../components/customer/details/css/PageTable.css'
import '../components/customer/details/css/Collapsible.css'
import '../index.css'
import '../components/customer/details/css/detail_navbar.css'
import '../components/customer/details/css/RXFood.css'
import "../components/customer/details/css/Garmin.css"
import '../components/customer/details/css/GarminOverallSummary.css'
import '../components/customer/details/css/GarminNavbar.css'
import "../components/customer/details/css/RXFoodSummary.css"
import "../components/customer/details/css/MocapOverallSummary.css"
import "../components/customer/details/css/Sleep.css"
import "../components/customer/details/css/hrvChart.css"
import "../components/customer/details/css/mocapMetricsTable.css"
import { Provider } from 'react-redux';






const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Material Kit Pro
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
