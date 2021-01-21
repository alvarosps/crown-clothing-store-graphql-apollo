import React, {
	useState,
	useEffect
} from 'react';
import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { default as Header } from './components/header/header.container';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { default as CheckoutPage } from './pages/checkout/checkout.container';

import {
	auth,
	createUserProfileDocument
} from './firebase/firebase.utils';

import { GlobalStyle } from './global.styles';

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth);

			userRef.onSnapshot(snapShot => {
				setCurrentUser({
					id: snapShot.id,
					...snapShot.data()
				});
			});
		}

		setCurrentUser(userAuth);
		});

		return () => {
			unsubscribeFromAuth();
		}
	}, []);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
				<Route exact path='/checkout' component={CheckoutPage} />
			</Switch>
		</div>
	);
}

export default App;
