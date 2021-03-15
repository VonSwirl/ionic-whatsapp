import { createContext, useReducer } from "react";
import { reducerApp } from "./reducers/reducer-app";
import appConfig from "./appConfig";

export const AppContext = createContext(appConfig.state);

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducerApp, {
		...appConfig.state,
	});

	const values = { ...state, dispatch };

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
