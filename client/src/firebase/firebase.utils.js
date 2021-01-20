import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfg2Q99ADH5d_o1pgzgAyok0R4FV2o3_4",
    authDomain: "sps-db-d4d40.firebaseapp.com",
    projectId: "sps-db-d4d40",
    storageBucket: "sps-db-d4d40.appspot.com",
    messagingSenderId: "830392778813",
    appId: "1:830392778813:web:8b9429c8faa57af3a9ea54"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (e) {
			console.log('error creating user', e);
		}
	}

	return userRef;
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'  // Always trigger the google popup when using google auth
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
