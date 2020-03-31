import React from 'react';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserList, UserDetail } from './routes';

/*
// add your own GitHub personal access token
//scopes/permissions you need to check: user,repo
const token = '';
const client = new ApolloClient({
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'https://api.github.com/graphql',
});
*/

//This is the same API but trough MY aws-gateway.
const client = new ApolloClient({
  uri: 'https://kc8xol64vj.execute-api.us-east-2.amazonaws.com/fsdfds',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route component={UserList} exact path="/" />
              <Route component={UserDetail} exact path="/user/:login" />
            </Switch>
          )}
        />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
