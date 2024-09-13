import { createMuiTheme, } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/indigo';
import secondary from '@material-ui/core/colors/purple';


export default createMuiTheme({
  palette: {
    primary: {
      main: '#013972',
    },
    secondary,
  },
  overrides: {
    MuiTableHead: {
      root: {
        '& > tr:not(:last-child) > th': {
          paddingBottom: 1,
          borderBottom: 'none',
        },
        '& > tr:not(:first-child) > th': {
          paddingTop: 1,
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
    },
    MuiCircularProgress: {
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
      fullWidth: true,
    },
    MuiDialog: {
      scroll: 'body',
      fullWidth: true,
      disableBackdropClick: true,
    },
  },
});
