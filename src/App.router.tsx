import React from 'react';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserList, UserDetail } from './routes';

// yes, I know what u are thinking...
const token = '51e30ae2fdad19e4c7883f3590937fbe41ddce28';
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
