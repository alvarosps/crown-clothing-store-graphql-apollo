import React, {
	useState,
	useEffect,
	lazy,
	Suspense
} from 'react';
import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import { default as Header } from './components/header/header.container';

import {
	auth,
	createUserProfileDocument
} from './firebase/firebase.utils';

import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.container'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));

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
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
						<Route exact path='/checkout' component={CheckoutPage} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
}

export default App;
