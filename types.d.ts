// NAMESPACES
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

// TYPES
type DispatchTypes = "setAppName" | "loadUser" | "setShowTabs" | "setChatWith";
type MediaTypes = "text" | "media";
type IFirestoreData = Message | User;
type CollectionName = "users" | "messages";
type MessageSortingOptions =
	| "time"
	| "type"
	| "sentBy"
	| "fileUrl"
	| "channel"
	| "message";
type Dispatch = ({
	type,
	payload,
}: {
	type: DispatchTypes;
	payload: any;
}) => void;

// INTERFACES
interface State {
	appName: string;
	showTabs: boolean;
	user: User | undefined;
	chatWith: Contact | undefined;
}

interface Contact {
	name: string;
	userId: string;
	avatar: string;
}

interface User {
	id: string;
	name: string;
	avatar: string;
	lastSeen: Date;
	passcode: string;
	contacts: Contact[];
}

interface Message {
	id: string;
	sentBy: string;
	channel: string;
	message: string;
	type: MediaTypes;
	fileUrl: string | null;
	time: { seconds: number; nanoseconds: number } | Date;
}

interface Channel {
	userA: string;
	userB: string;
}

interface MessagesListener extends Channel {
	set: React.Dispatch<React.SetStateAction<Message[]>>;
}

interface LastMessagesListener extends Channel {
	setLastMessage: React.Dispatch<React.SetStateAction<Message[]>>;
	setPrevious: React.Dispatch<React.SetStateAction<Message[]>>;
	lastMessage: Message[];
}

interface IContextProps {
	state: State;
	dispatch: Dispatch;
}
