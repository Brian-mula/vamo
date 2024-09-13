import { Link as LinkRRD, } from 'react-router-dom';
import { useState, } from 'react';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import PhoneBox from './PhoneBox';
import DesktopBox from './DesktopBox';
import { useUser } from 'Tools/auth';


const PANEL_WIDTH = 230;


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: 'hidden',
  },
  toolbar: {
    position: 'relative',
  },
  logoImg: {
    height: '1.5rem',
  },
  phoneBox: {
    width: PANEL_WIDTH,
    minWidth: PANEL_WIDTH,
    maxWidth: PANEL_WIDTH,
  },
  buttonCloseMenu: {
    marginLeft: 'auto',
  },
  mobilePaper: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));


const Header: React.FC = () => {
  const classes = useStyles();
  const user = useUser();


  const [ isOpenMenu, changeOpenMenu, ] = useState<boolean>(false);


  const handleToggleMenu = () => changeOpenMenu(!isOpenMenu);
  const handleCloseMenu = () => changeOpenMenu(false);


  return (
    <AppBar position="fixed" component="header" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar} disableGutters>

          <LinkRRD to="/">
            <img
              className={classes.logoImg}
              src="https://vamos.bet/files/webexIconsDesktop/assets/image/header/vamos-logo-desctop-white.svg"
              alt="logo"
            />
          </LinkRRD>

          <Hidden smDown>
            <DesktopBox user={user} />
          </Hidden>

          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={isOpenMenu}
              onClose={handleCloseMenu}
              ModalProps={{
                keepMounted: true,
              }}
              classes={{
                paper: classes.mobilePaper,
              }}
            >
              <div className={classes.phoneBox}>
                <PhoneBox
                  user={user}
                  onClose={handleCloseMenu}
                />
              </div>
            </Drawer>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              className={classes.buttonCloseMenu}
              edge="start"
              color="inherit"
              onClick={handleToggleMenu}
            >
              {isOpenMenu ? <CloseIcon/> : <MenuIcon />}
            </IconButton>
          </Hidden>

        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Header;
