import React, { useState, useRef, } from 'react';
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

import { LocalizedText, translationKeys, } from 'Tools/localization';
import { useLogout, useUser, } from 'Tools/auth';


const useStyles = makeStyles(() => createStyles({
  button: {
    fontSize: '0.75rem',
  },
}));


const UserMenu: React.FC = () => {
  // classes
  const classes = useStyles();


  // popup state
  const popupState = usePopupState({ variant: 'popover', popupId: 'menuLogout' });


  // logout
  const logout = useLogout();


  // user
  const user = useUser();


  // menu
  const handleLogout = () => logout();


  return (
    <div>
      <Button
        className={classes.button}
        {...bindTrigger(popupState)}
        variant="text"
        color="inherit"
        endIcon={<AccountCircleIcon />}
      >
        {user?.email}
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
          <LocalizedText textKey={translationKeys.headerMenuLogout} />
        </MenuItem>
      </Menu>
    </div>
  );
};


export default UserMenu;
