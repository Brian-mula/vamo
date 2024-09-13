import { useEffect, useState } from 'react';
import { Route, Switch, } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import RulesPage from 'Modules/Basic/pages/RulesPage';
import Layout from 'Components/Layout';
import HomePage from 'Modules/Basic/pages/HomePage';
import { ROUTES, } from 'Utils/globals';
import LoginPage from './pages/LoginPage';
import { AuthStore, useAuthStore } from 'Tools/auth';
import { DecodedToken, getAuthTokenLS } from 'Tools/localStorage';
import AuthRoute from 'Components/AuthRoute';
import TournamentPage from 'Modules/Tournament/pages/TournamentPage';


const selectSetAuthStore = (store: AuthStore) => store.setAuthStore;


const MainCore = () => {
  const [ loading, setLoading, ] = useState<boolean>(true);

  const setAuthStore = useAuthStore(selectSetAuthStore);

  useEffect(
    () => {
      const parseToken = () => {
        try {
          const token = getAuthTokenLS();
          if (!token) throw new Error('init: no token');
          const { id, username, } = jwtDecode(token) as DecodedToken;
  
          if (!id || !username) throw new Error('init: token has no id or username');
  
          setAuthStore(
            token,
            {
              id,
              name: username,
            },
          );
        } catch {
          // ignore error
        }
      };

      parseToken();
      setLoading(false);
    },
    [],
  );


  if (loading) return null;


  return (
    <Layout>
      <Switch>
        <Route exact path={`/${ROUTES.LOGIN}`} component={LoginPage} />
        <Route exact path={`/${ROUTES.RULES}`} component={RulesPage} />
        <AuthRoute exact path={`/${ROUTES.TOURNAMENT}`} component={TournamentPage} />
        <Route component={HomePage} />
      </Switch>
    </Layout>
  );
};


export default MainCore;
