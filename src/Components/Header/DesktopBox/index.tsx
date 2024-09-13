import { makeStyles, Theme, } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'Utils/globals';
import { User, } from 'Tools/auth';
import ButtonLinkOutside from 'Components/ButtonLinkOutside';
import ButtonLink from 'Components/ButtonLink';
import UserMenu from './UserMenu';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: '15%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5%',
    },
  },
  navButton: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 13,
  },
  autoLeft: {
    marginLeft: 'auto',
  }
}));


interface Props {
  user: User | null,
}


const DesktopBox: React.FC<Props> = ({
  user,
}) => {
  const classes = useStyles();
  const { t, } = useTranslation();


  return (
    <Grid
      className={classes.root}
      container
      spacing={1}
      component="nav"
      alignItems="center"
    >

      <Grid item>
        <ButtonLink
          to="/"
          variant="text"
          color="inherit"
        >
          {t('common:navLinkHome')}
        </ButtonLink>
      </Grid>

      {user && (
        <Grid item>
          <ButtonLink
            to={`/${ROUTES.TOURNAMENT}`}
            variant="text"
            color="inherit"
          >
            {t('common:navLinkTournament')}
          </ButtonLink>
        </Grid>
      )}

      <Grid item>
        <ButtonLink
          to={`/${ROUTES.RULES}`}
          variant="text"
          color="inherit"
        >
          {t('common:navLinkRules')}
        </ButtonLink>
      </Grid>

      <Grid>
        <ButtonLinkOutside
          variant="text"
          color="inherit"
          href={(t('links:hq'))}
          rel="noopener noreferrer"
        >
          {t('common:navLinkBets')}
        </ButtonLinkOutside>
      </Grid>
      
      {user && (
        <Grid className={classes.autoLeft}>
          <UserMenu user={user} />
        </Grid>
      )}

    </Grid>
  );
};


export default DesktopBox;
