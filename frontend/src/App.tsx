import { RouterProvider } from 'react-router-dom';
import { RouterSettings } from '@router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import muiTheme from '@theme';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <RouterProvider
        router={RouterSettings}
        fallbackElement={<>Loading...</>}
      />
    </ThemeProvider>
  );
};

export default App;
