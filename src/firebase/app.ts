import firebase from "firebase/app";
import { config } from "./config";
import "firebase/firestore";

export declare type FireBaseApp = firebase.app.App;
export declare type Firestore = firebase.firestore.Firestore;

// let app: FireBaseApp;

// export const fireBaseApp = async (): Promise<FireBaseApp> => {
// 	if (!firebase.apps.length) {
// 		return (app = firebase.initializeApp(config));
// 	}
// 	return app;
// };
const fireBaseApp: FireBaseApp = firebase.initializeApp(config);

export const db = fireBaseApp.firestore();
