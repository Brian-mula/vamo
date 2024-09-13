import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, } from '@material-ui/core/styles';

import { useBracketQuery, BracketQuery, } from 'Apollo/graphql';
import { BracketStore, useBracketStore, } from 'Components/Bracket/BracketStore';
import { useToken } from 'Tools/auth';
import View from './View';
import { DEFAULT_DATA } from 'Components/Bracket/constants';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));


const selectResetStore = (store: BracketStore) => store.resetStore;
const selectFetchCompleted = (store: BracketStore) => store.fetchCompleted;
const selectFetchError = (store: BracketStore) => store.fetchError;
const selectFetchState = (store: BracketStore) => store.fetchState;
const selectIsEmpty = (store: BracketStore) => store.data.isEmpty;


const TournamentPage = () => {
  const classes = useStyles();
  const { t, } = useTranslation();
  const token = useToken();

  const fetchState = useBracketStore(selectFetchState);
  const resetStore = useBracketStore(selectResetStore);
  const fetchCompleted = useBracketStore(selectFetchCompleted);
  const fetchError = useBracketStore(selectFetchError);
  const isEmpty = useBracketStore(selectIsEmpty);


  useEffect(
    () => () => resetStore(),
    [],
  );


  const handleCompleted = (response: BracketQuery) => fetchCompleted(response.getBracket);


  const { data, } = useBracketQuery({
    fetchPolicy: 'no-cache',
    variables: {
      token: token || '',
    },
    onCompleted: handleCompleted,
    onError: fetchError,
  });


  return (
    <Container className={classes.container}>
      <Typography
        variant="h4"
        align="center"
      >
        {t('tournament:title')}
      </Typography>

      <View
        loading={fetchState.loading}
        error={fetchState.error}
        isChallengeOver={data?.configuration.isChallengeOver}
        result={data?.configuration.bracket}
        isEmpty={isEmpty}
        userResult={data?.getBracket}
      />
    </Container>
  );
};


export default TournamentPage;
