declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		PUBLIC_URL: string;
		REACT_APP_HASH: string;
		REACT_APP_API_URI: string;
		REACT_APP_WS_URI: string;
		REACT_APP_FIREBASE_API_KEY: string;
		REACT_APP_FIREBASE_AUTH_DOMAIN: string;
		REACT_APP_FIREBASE_PROJ_ID: string;
		REACT_APP_FIREBASE_STORAGE_BUCKET: string;
		REACT_APP_FIREBASE_MSG_SENDER_ID: string;
		REACT_APP_FIREBASE_APP_ID: string;
		REACT_APP_FIREBASE_MEASUREMENT_ID: string;
		REACT_APP_FIREBASE_DB_URL: string;
	}
}

type IReducer<S, A> = (prevState: S, action: A) => S;
type IDispatch<IAppAction> = (value: IAppAction) => void;

interface Action {
	type: string;
	payload: string;
}

interface AppContextProvider {}

interface State {
	appName: string;
	user: any | undefined;
}

interface IAppAction {
	type: "setAppName" | "addMore";
	payload: string;
}

interface Contact {
	userId: string;
	name: string;
	avatar: string;
}
interface User {
	id: string;
	name: string;
	avatar: string;
	lastSeen: Date;
	contacts: Contact[];
}
interface Message {
	id: string;
	sentBy: string;
	channel: string;
	type: string;
	message: string;
	fileUrl: string;
	time: Date;
}

type FirestoreData = Message | User;

type CollectionName = "users" | "messages";

interface AppConfig {
	state: State;
}
