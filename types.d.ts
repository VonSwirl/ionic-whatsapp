type IReducer<S, A> = (prevState: S, action: A) => S;
interface State {
	appName: string;
}

interface Action {
	type: string;
	payload: string;
}

interface AppContextProvider {}
