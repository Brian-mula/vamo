import React from 'react';
import { Redirect, Route, RouteProps, } from 'react-router-dom';

import { useAuthStore, AuthStore, } from 'Tools/auth';


// selector
const selectUser = (state: AuthStore) => state.user;


interface Props extends RouteProps {}


const AuthRoute = ({
  ...routeProps
}: Props): JSX.Element => {
  // store
  const user = useAuthStore(selectUser);


  // auth
  if (!user) return <Redirect to="/" />;


  return (
    <Route {...routeProps} />
  );
};


export default AuthRoute;
