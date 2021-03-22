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

type DispatchTypes = "setAppName" | "loadUser" | "setShowTabs" | "setChatWith";

interface State {
	appName: string;
	user: User | undefined;
	showTabs: boolean;
	chatWith: Contact | undefined;
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
	time: Date;
	type: string;
	sentBy: string;
	channel: string;
	message: string;
	fileUrl?: string;
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

interface IContextProps {
	state: State;
	dispatch: Dispatch;
}
