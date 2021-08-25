import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';

import store from './store';

const theme = createTheme({
  palette: {
    primary: {
      light: '#66ffa6',
      main: '#00e676',
      dark: '#00b248',
      contrastText: '#4e342e',
    },
    secondary: {
      light: '#b2fef7',
      main: '#80cbc4',
      dark: '#4f9a94',
      contrastText: '#6d4c41',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
