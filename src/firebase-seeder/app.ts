import firebase from "firebase/app";
import "firebase/firestore";

export declare type FireBaseApp = firebase.app.App;
export declare type Firestore = firebase.firestore.Firestore;

let app: FireBaseApp;

export const fireBaseApp = async (): Promise<FireBaseApp> => {
	if (!firebase.apps.length) {
		return (app = firebase.initializeApp({
			apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
			authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.REACT_APP_FIREBASE_PROJ_ID,
			storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
			appId: process.env.REACT_APP_FIREBASE_APP_ID,
			measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
		}));
	}
	return app;
};
