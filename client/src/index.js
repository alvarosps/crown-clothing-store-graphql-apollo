import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

const httpLink = createHttpLink({
	uri: 'https:///crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
	cache
});

client.writeData({
	data: {
		cartHidden: true
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<CartProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartProvider>
	</ApolloProvider>,
	document.getElementById('root')
);
