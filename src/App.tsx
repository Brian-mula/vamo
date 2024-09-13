import { BrowserRouter as Router, } from 'react-router-dom';
import { ApolloProvider, } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, } from '@material-ui/core/styles';

import client from 'Apollo';
import theme from 'Utils/theme';
import MainCore from 'Modules/Main/MainCore';
import GlobalStyles from 'Utils/GlobalStyles';


const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>

    <CssBaseline />
    <GlobalStyles />

    <ApolloProvider client={client}>
      <Router>
        <MainCore />
      </Router>
    </ApolloProvider>

  </MuiThemeProvider>
);


export default App;
