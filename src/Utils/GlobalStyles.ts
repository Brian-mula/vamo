import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) => createStyles({
  '@global': {
    '.fontWeight-bold': {
      fontWeight: 'bold',
    },
    '.mb-1': {
      marginBottom: theme.spacing(1),
    },
    '.mb-2': {
      marginBottom: theme.spacing(2),
    },
    '.mb-3': {
      marginBottom: theme.spacing(3),
    },
    '.mb-4': {
      marginBottom: theme.spacing(4),
    },
    '.mb-5': {
      marginBottom: theme.spacing(5),
    },
    '.mb-6': {
      marginBottom: theme.spacing(6),
    },
    '.tableCell-action': {
      padding: theme.spacing(0.5, 2),
    },
    '.button-error': {
      background: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
      '&:hover': {
        background: theme.palette.error.main,
      },
    },
    '.button-success': {
      background: theme.palette.success.dark,
      color: theme.palette.common.white,
      '&:hover': {
        background: theme.palette.success.main,
      },
    },
    '.iconButton-error': {
      color: theme.palette.error.dark,
    },
  },
}));


const GlobalStyles: React.FC = () => {
  useStyles();

  return null;
};


export default GlobalStyles;
