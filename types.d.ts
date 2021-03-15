type IReducer<S, A> = (prevState: S, action: A) => S;
type IDispatch<IAppAction> = (value: IAppAction) => void;

interface Action {
	type: string;
	payload: string;
}

interface AppContextProvider {}

interface State {
	appName: string;
}

interface IAppAction {
	type: "setAppName" | "addMore";
	payload: string;
}

interface IAppContextProvider {}

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		PUBLIC_URL: string;
		REACT_APP_HASH: string;
		REACT_APP_API_URI: string;
		REACT_APP_WS_URI: string;
	}
}
