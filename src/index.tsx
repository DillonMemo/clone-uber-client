import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
