import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3', // Material Blue 500
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  secondary: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121', // Material Grey 900 (Black)
  },
  white: '#ffffff',
  black: '#000000',
  gradient: {
    hero: 'linear-gradient(135deg, #2196f3 0%, #212121 100%)', // Blue to Black
    buttonPrimary: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
    buttonSecondary: 'linear-gradient(45deg, #2196f3 30%, #1976d2 90%)',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[500],
    },
    secondary: {
      main: colors.secondary[900],
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: colors.secondary[900],
      secondary: colors.secondary[700],
    },
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;