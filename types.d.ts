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

interface State {
	appName: string;
	user: User | undefined;
}

interface AppActions {
	type: "setAppName" | "loadUser";
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
	passcode: string;
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

type IFirestoreData = Message | User;

type CollectionName = "users" | "messages";

type Dispatch = ({
	type,
	payload,
}: {
	type: DispatchTypes;
	payload: any;
}) => void;

type DispatchTypes = "setAppName" | "loadUser";

interface IContextProps {
	state: State;
	dispatch: Dispatch;
}
