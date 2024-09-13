import { useTranslation } from 'react-i18next';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';

import { AuthStore, useAuthStore, User, } from 'Tools/auth';
import { removeAuthTokenLS } from 'Tools/localStorage';


const useStyles = makeStyles(() => createStyles({
  button: {
    fontSize: '0.75rem',
  },
  buttonText: {
    maxWidth: 125,
    textOverflow: 'ellipsis',
    overflow: 'hidden', 
    whiteSpace: 'nowrap',
  },
}));


const selectSetAuthStore = (store: AuthStore) => store.setAuthStore;


interface Props {
  user: User
}


const UserMenu = ({
  user,
}: Props) => {
  const classes = useStyles();
  const { t, } = useTranslation();
  const setAuthStore = useAuthStore(selectSetAuthStore);
  const popupState = usePopupState({ variant: 'popover', popupId: 'menuLogout' });

  const handleLogout = () => {
    setAuthStore(null, null);
    removeAuthTokenLS();
  };


  return (
    <>
      <Button
        className={classes.button}
        {...bindTrigger(popupState)}
        variant="text"
        color="inherit"
        endIcon={<AccountCircleIcon />}
      >
        <span className={classes.buttonText}>
          {user.name}
        </span>
      </Button>

      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleLogout}>
          {t('common:logout')}
        </MenuItem>
      </Menu>
    </>
  );
};


export default UserMenu;
