import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';


const createApolloClient = () => {
  // http link
  const httpTerminatingLink = createHttpLink({
    uri: process.env.REACT_APP_HTTP_LINK,
    credentials: 'include',
  });

  // apollo client
  const client = new ApolloClient({
    uri: process.env.REACT_APP_HTTP_LINK,
    cache: new InMemoryCache({
    }),
    link: httpTerminatingLink,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
    },
  });

  return client;
};


const client = createApolloClient();


export default client;
