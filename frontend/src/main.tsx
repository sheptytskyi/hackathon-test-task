import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@modules/App';
import { Provider } from 'react-redux';
import { store } from '@app';
import muiTheme from '@theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
