import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';

import EighteenPlusIcon from 'Utils/icons/EighteenPlus';


const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  gridContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  gridWrapper: {
    padding: theme.spacing(2, 0),
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textIcon: {
    marginRight: 4,
  },
}));


const Footer: React.FC = () => {
  const classes = useStyles();
  const { t, } = useTranslation();

  // TODO fb text
  return (
    <AppBar position="relative" component="footer" className={classes.appBar}>
      <Container>
        <div className={classes.gridWrapper}>
          <Grid
            className={classes.gridContainer}
            container
            justify="space-between"
            alignItems="center"
            spacing={2}
          >

            <Grid item xs={12} md="auto">
              <Link
                color="inherit"
                href={(t('links:facebook'))}
              >
                <span className={classes.textContainer}>
                  <FacebookIcon className={classes.textIcon} />
                  <span>{t('common:footerFacebook')}</span>
                </span>
              </Link>
            </Grid>

            <Grid item xs={12} md="auto">
              <span className={classes.textContainer}>
                <EighteenPlusIcon className={classes.textIcon} />
                <span>{t('common:footerDisclaimer18Plus')}</span>
              </span>
            </Grid>

            <Grid item xs={12} md="auto">
              <Link
                color="inherit"
                href={(t('links:hq'))}
              >
                {t('common:footerLinkHQ')}
              </Link>
            </Grid>

          </Grid>
        </div>
      </Container>
    </AppBar>
  );
};


export default Footer;
