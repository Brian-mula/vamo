import { Trans, useTranslation } from 'react-i18next';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import HomeBanner from './HomeBanner';
import { ConfigurationQuery, useConfigurationQuery } from 'Apollo/graphql';
import TournamentResults from './TournamentResults';
import { BracketStore, useBracketStore, } from 'Components/Bracket/BracketStore';
import { useEffect } from 'react';
import { useUser } from 'Tools/auth';
import ButtonLink from 'Components/ButtonLink';
import { ROUTES } from 'Utils/globals';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  topBanner: {
    marginBottom: theme.spacing(3),
  },
  card: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  bottomBanner: {
    marginBottom: theme.spacing(3),
  },
  transLi: {
    margin: theme.spacing(1, 0),
  },
}));


const selectResetStore = (store: BracketStore) => store.resetStore;
const selectFetchCompleted = (store: BracketStore) => store.fetchCompleted;
const selectFetchError = (store: BracketStore) => store.fetchError;


const HomePage = () => {
  const classes = useStyles();
  const { t, } = useTranslation();
  const user = useUser();

  const resetStore = useBracketStore(selectResetStore);
  const fetchCompleted = useBracketStore(selectFetchCompleted);
  const fetchError = useBracketStore(selectFetchError);


  useEffect(
    () => () => resetStore(),
    [],
  );


  const handleCompleted = (response: ConfigurationQuery) => fetchCompleted(response.configuration.bracket);


  const { data, } = useConfigurationQuery({
    fetchPolicy: 'cache-and-network',
    onCompleted: handleCompleted,
    onError: fetchError,
  })
  return (
    <Container className={classes.container}>

      <div className={classes.topBanner}>
        <HomeBanner
          buttonLink={data?.configuration.mainBannerUrl}
          buttonText={data?.configuration.mainBannerButtonText}
          imageSrc={data?.configuration.mainBanner}
          isButton={true}
        />
      </div>

      <Card className={classes.card}>
        <Typography
          variant="h4"
        >
          {t('home:howItWorksTitle')}
        </Typography>
        <Typography
          variant="body1"
          component="section"
        >
          <Trans
            i18nKey="home:howItWorksRuleList"
            components={{
              ol: <ol />,
              li: <li className={classes.transLi} />,
            }}
          />
        </Typography>
        {user && (
          <ButtonLink
            to={`/${ROUTES.TOURNAMENT}`}
            variant="contained"
            size="large"
            color="primary"
          >
            {t('home:buttonStartTournament')}
          </ButtonLink>
        )}
      </Card>

      <div className={classes.bottomBanner}>
        <HomeBanner
          buttonLink={data?.configuration.bonusBannerUrl}
          buttonText={data?.configuration.bonusBannerButtonText}
          imageSrc={data?.configuration.bonusBanner}
          isButton={false}
        />
      </div>

      <div>
        <TournamentResults />
      </div>

    </Container>
  );
};


export default HomePage;
