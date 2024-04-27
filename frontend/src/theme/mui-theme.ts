import { createTheme } from '@mui/material';

export const pallete = {
  primary: {
    main: '#1f78ff',
    light: '#f6f9fc',
  },
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
  background: {
    default: '#f7f8fa',
    paper: '#ffffff',
  },
  error: {
    main: '#f44336',
  },
};

const muiTheme = createTheme({
  spacing: 4,
  palette: pallete,
  typography: {
    allVariants: { color: pallete.common.black },
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
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

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '12px 24px',
        },

        contained: {
          boxShadow: 'none',
          backgroundColor: pallete.primary.light,
          color: pallete.primary.main,

          '&:hover': {
            backgroundColor: pallete.primary.light,
            color: pallete.primary.main,
            boxShadow: 'none',
          },
        },

        text: {
          color: pallete.common.black,
          backgroundColor: pallete.common.white,

          '&:hover': {
            backgroundColor: pallete.primary.light,
            color: pallete.primary.main,
          },
        },

        sizeSmall: {
          padding: '8px 16px',
        },
      },
    },

    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          border: `1px solid ${pallete.grey[500]}`,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
          minWidth: 170,
          marginTop: 12,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          fontSize: 13,
          lineHeight: '24px',
        },
      },
    },
  },
});

export default muiTheme;
