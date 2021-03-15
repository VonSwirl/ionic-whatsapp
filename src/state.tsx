import { createContext, useReducer } from "react";
import { reducerApp } from "./reducers/reducer-app";

export const initState: State = { appName: "WHAZZ" };

export const AppContext = createContext(initState);

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducerApp, {
		...initState,
	});

	const values = { ...state, dispatch };

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
