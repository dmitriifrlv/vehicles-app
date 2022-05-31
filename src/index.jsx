import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavbarProvider } from './context/navbar.context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const hasuraUrl = process.env.REACT_APP_URI;
const clientValue = process.env.REACT_APP_CLIENT_VALUE;

const client = new ApolloClient({
  uri: hasuraUrl,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': clientValue,
  },
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </ApolloProvider>
  </React.StrictMode>
);


