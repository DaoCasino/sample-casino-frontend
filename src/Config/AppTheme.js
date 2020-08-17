import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#494954',
      main: '#21222b',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6cfff7',
      main: '#17e6c4',
      dark: '#00b394',
      contrastText: '#000',
    },
    green: {
      main: '#20BC62',
    },
    yellow: {
      main: '#FFBF00',
    },
    red: {
      main: '#EF3E36',
    },
    header: {
      main: '#1B1F26',
    },
    content: {
      main: '#161920',
      contrastText: '#ffffff',
      secondaryText: '#7a7f95',
    },
  },
});
