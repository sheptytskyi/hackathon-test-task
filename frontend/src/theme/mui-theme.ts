import { createTheme } from '@mui/material';

const muiTheme = createTheme({
  palette: {
    primary: { main: '#1f78ff' },
    common: {
      white: '#ffffff',
      black: '#444750',
    },
    grey: {
      900: '#636362',
      800: '#7c7c7c',
      700: '#c3c3c2',
      600: '#c7c7c7',
      500: '#ececeb',
      400: '#fbfbfa',
    },
  },
  typography: {
    allVariants: {
      color: '#1f78ff',
    },
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 32,
      lineHeight: '38px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    h3: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    h4: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    h5: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 10,
      lineHeight: '12px',
      letterSpacing: 0,
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            ::-webkit-scrollbar {
              width: 20px;
            }

            ::-webkit-scrollbar-track {
              background-color: transparent;
            }

            ::-webkit-scrollbar-thumb {
              background-color: #d6dee1;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #d6dee1;
              border-radius: 20px;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #d6dee1;
              border-radius: 20px;
              border: 6px solid transparent;
              background-clip: content-box;
            }
        `,
    },
  },
});

export default muiTheme;
