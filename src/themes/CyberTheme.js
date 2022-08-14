import {createTheme} from '@material-ui/core/styles';

const CyberTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
        },
        // Container
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0)',
        },
        // Bar
        '*::-webkit-scrollbar-thumb': {
          background: '#1a76d2',
          // outline: '2px solid pink',
          borderRadius: '2px',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: '#0e172d',
    },
    primary: {
      light: '#5472d3',
      main: '#0d47a1',
      dark: '#002171',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5681e8',
      main: '#0055b5',
      dark: '#002e84',
      contrastText: '#ffffff',
    },
  },
});

export default CyberTheme;
