import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Routes from './containers/Routes';
import { ThemeProvider } from '@mui/material';
import {theme} from './ui/Theme';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
