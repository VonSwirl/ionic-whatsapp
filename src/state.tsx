import { createContext, useReducer } from "react";
import { reducerApp } from "./reducers/reducer-app";
import { initState } from "./appConfig";
interface IContextProps {
	state: State;
	dispatch: Dispatch;
}
export const AppContext = createContext({
	state: initState,
	dispatch: () => {},
} as IContextProps);

export const AppContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducerApp, { ...initState });

	const values = { state, dispatch };

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
