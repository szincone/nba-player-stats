import { createMuiTheme } from '@material-ui/core/styles';

//breakpoint values {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}

export default createMuiTheme({
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
    body1: { color: 'inherit' },
    body2: { color: 'inherit' },
  },
  palette: {
    primary: {
      main: '#0b2742', // dark navy blue
      contrastText: '#F03A47', // bright red
      contrastTextLight: '#F25D68', // lighter shade for hover
    },
    secondary: {
      main: '#FFFFFF',
      textColor: '#000000', // used for delete button text
      contrastText: '#276FBF', // cool blue
      contrastTextLight: '#4E89CA', // lighter shade for hover
    },
    background: {
      default: '#0b2742',
      paper: '#0b2742',
    },
    tonalOffset: 0.2,
  },
});
