import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { RouteComponentProps, } from 'react-router-dom';
import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import CircularProgress from '@material-ui/core/CircularProgress';
import queryString from 'query-string';

import { AuthStore, useAuthStore } from 'Tools/auth';
import { addAuthTokenLS, DecodedToken, } from 'Tools/localStorage';


const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));


interface Props extends RouteComponentProps {};


const selectSetAuthStore = (store: AuthStore) => store.setAuthStore;


const LoginPage = ({
  history,
  location,
}: Props) => {
  const classes = useStyles();
  const setAuthStore = useAuthStore(selectSetAuthStore);

  
  useEffect(
    () => {
      const parseToken = async () => {
        try {
          const parsed = queryString.parse(location.search);
          const token = parsed.token as string;
          const { id, username, } = jwtDecode(token) as DecodedToken;
  
          if (!id || !username) throw new Error('login: token has no id or username');
  
          setAuthStore(
            token,
            {
              id,
              name: username,
            },
          );
          addAuthTokenLS(token);
        } catch {
          // ignore error
        }
        history.push('/');
      };

      parseToken();
    },
    [],
  );


  return (
    <Container className={classes.container}>
      <CircularProgress />
    </Container>
  );
}


export default LoginPage;
