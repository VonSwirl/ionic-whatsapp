import firebase from "firebase/app";
import { config } from "./config";
import "firebase/firestore";

export declare type IFireBaseApp = firebase.app.App;
export declare type IFirestore = firebase.firestore.Firestore;

export const fireBaseApp: IFireBaseApp = firebase.initializeApp(config);
