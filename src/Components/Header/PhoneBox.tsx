import { fade, makeStyles, Theme, } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { ROUTES } from 'Utils/globals';
import ListItemLink from 'Components/ListItemLink';
import ListItemLinkOutside from 'Components/ListItemLinkOutside';
import { AuthStore, useAuthStore, User, } from 'Tools/auth';
import { removeAuthTokenLS } from 'Tools/localStorage';


const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(1.5),
    textAlign: 'right',
  },
  closeIcon: {
    fontSize: 28,
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 3, 3, 3),
  },
  userIcon: {
    marginRight: 4,
  },
  userName: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  navList: {
    padding: 0,
  },
  mainListItem: {
    padding: theme.spacing(3),
    '&.MuiListItem-divider': {
      borderColor: fade(theme.palette.grey[400], 0.15),
    },
  },
  divider: {
    backgroundColor: fade(theme.palette.grey[400], 0.15),
  },
}));


const selectSetAuthStore = (store: AuthStore) => store.setAuthStore;



interface Props {
  user: User | null,
  onClose: () => void,
}


const PhoneBox = ({
  user,
  onClose,
}: Props) => {
  const classes = useStyles();
  const { t, } = useTranslation();
  const setAuthStore = useAuthStore(selectSetAuthStore);


  const handleClick = () => onClose();

  const handleLogout = () => {
    setAuthStore(null, null);
    removeAuthTokenLS();
    handleClick();
  };


  return (
    <>

      <div className={classes.header}>
        <IconButton
          onClick={onClose}
          color="inherit"
        >
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      </div>

      {user && (
        <div className={classes.user}>
          <AccountCircleIcon className={classes.userIcon} />
          <span className={classes.userName}>
            {user.name}
          </span>
        </div>
      )}

      <Divider className={classes.divider}/>

      <List className={classes.navList}>
        <ListItemLink
          to="/"
          className={classes.mainListItem}
          divider
          onClick={handleClick}
        >
          {t('common:navLinkHome')}
        </ListItemLink>
        {user && (
          <ListItemLink
            to={`/${ROUTES.TOURNAMENT}`}
            className={classes.mainListItem}
            divider
            onClick={handleClick}
          >
            {t('common:navLinkTournament')}
          </ListItemLink>
        )}
        <ListItemLink
          to={`/${ROUTES.RULES}`}
          className={classes.mainListItem}
          divider
          onClick={handleClick}
        >
          {t('common:navLinkRules')}
        </ListItemLink>
        <ListItemLinkOutside
          className={classes.mainListItem}
          divider
          href={(t('links:hq'))}
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {t('common:navLinkBets')}
        </ListItemLinkOutside>
        {user && (
          <ListItem
            className={classes.mainListItem}
            divider
            button
            onClick={handleLogout}
          >
            {t('common:logout')}
          </ListItem>
        )}
      </List>

    </>
  );
};


export default PhoneBox;
