import { makeStyles, Theme, } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Footer from '../Footer';
import Header from '../Header';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  fakeToolbar: {
    background: theme.palette.primary.main,
  },
}));


const Layout: React.FC = ({ children, }) => {
  // utils
  const classes = useStyles();


  return (
    <div className={classes.root}>

      <Header />

      <main className={classes.main}>
        <Toolbar className={classes.fakeToolbar} />
        {children}
      </main>

      <Footer />

    </div>
  );
};


export default Layout;
