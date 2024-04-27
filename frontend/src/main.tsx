import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@modules/App';
import { Provider } from 'react-redux';
import { store } from '@app';
import muiTheme from '@theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />

          <App />
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
);
