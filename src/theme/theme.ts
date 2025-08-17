import { createTheme } from '@mui/material/styles';

// Brand colors from plan.md
const brandColors = {
  midnightIndigo: '#2E2A5E',
  electricBlue: '#3DA9FC',
  seaTeal: '#2CB9B0',
  coralPop: '#FF7A59',
  backgroundDefault: '#0B0F1A',
  backgroundPaper: '#11162A',
  textPrimary: '#F6F7FB',
  textSecondary: '#C6CBDF',
  borders: '#21263A',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: brandColors.electricBlue,
      dark: brandColors.midnightIndigo,
    },
    secondary: {
      main: brandColors.seaTeal,
    },
    error: {
      main: brandColors.coralPop,
    },
    background: {
      default: brandColors.backgroundDefault,
      paper: brandColors.backgroundPaper,
    },
    text: {
      primary: brandColors.textPrimary,
      secondary: brandColors.textSecondary,
    },
    divider: brandColors.borders,
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: {
      fontFamily: 'Sora, Inter, system-ui, sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.14,
      '@media (max-width:768px)': {
        fontSize: '2.25rem',
        lineHeight: 1.22,
      },
    },
    h2: {
      fontFamily: 'Sora, Inter, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '1.75rem',
        lineHeight: 1.29,
      },
    },
    h3: {
      fontFamily: 'Sora, Inter, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: 'Sora, Inter, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      fontWeight: 400,
    },
  },
  spacing: 4, // 4px grid
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 25px rgba(61, 169, 252, 0.25)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${brandColors.electricBlue} 0%, ${brandColors.seaTeal} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${brandColors.electricBlue} 0%, ${brandColors.seaTeal} 100%)`,
            filter: 'brightness(1.1)',
          },
        },
        outlined: {
          borderColor: brandColors.electricBlue,
          color: brandColors.electricBlue,
          '&:hover': {
            borderColor: brandColors.seaTeal,
            color: brandColors.seaTeal,
            backgroundColor: 'rgba(61, 169, 252, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundImage: 'none',
          border: `1px solid ${brandColors.borders}`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            borderColor: brandColors.electricBlue,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '96px',
          paddingBottom: '96px',
          '@media (max-width:768px)': {
            paddingTop: '64px',
            paddingBottom: '64px',
          },
        },
      },
    },
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 8px rgba(0, 0, 0, 0.15)',
    '0 8px 16px rgba(0, 0, 0, 0.2)',
    '0 12px 24px rgba(0, 0, 0, 0.25)',
    '0 16px 32px rgba(0, 0, 0, 0.3)',
    '0 20px 40px rgba(0, 0, 0, 0.35)',
    '0 24px 48px rgba(0, 0, 0, 0.4)',
    '0 28px 56px rgba(0, 0, 0, 0.45)',
    '0 32px 64px rgba(0, 0, 0, 0.5)',
    '0 36px 72px rgba(0, 0, 0, 0.55)',
    '0 40px 80px rgba(0, 0, 0, 0.6)',
    '0 44px 88px rgba(0, 0, 0, 0.65)',
    '0 48px 96px rgba(0, 0, 0, 0.7)',
    '0 52px 104px rgba(0, 0, 0, 0.75)',
    '0 56px 112px rgba(0, 0, 0, 0.8)',
    '0 60px 120px rgba(0, 0, 0, 0.85)',
    '0 64px 128px rgba(0, 0, 0, 0.9)',
    '0 68px 136px rgba(0, 0, 0, 0.95)',
    '0 72px 144px rgba(0, 0, 0, 1)',
    '0 76px 152px rgba(61, 169, 252, 0.15)',
    '0 80px 160px rgba(61, 169, 252, 0.2)',
    '0 84px 168px rgba(61, 169, 252, 0.25)',
    '0 88px 176px rgba(61, 169, 252, 0.3)',
    '0 92px 184px rgba(61, 169, 252, 0.35)',
  ],
});

export default theme;
export { brandColors };