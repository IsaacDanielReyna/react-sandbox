import { createTheme } from '@material-ui/core/styles';

const CyberTheme = createTheme({
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
