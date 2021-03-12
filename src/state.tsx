import { createContext, useReducer } from "react";
import { reducerApp } from "./reducers/reducer-app";

export const initState = { appName: "name" };

export const AppContext = createContext({});

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducerApp, { ...initState });

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
