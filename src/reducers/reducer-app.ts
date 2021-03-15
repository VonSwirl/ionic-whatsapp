export const reducerApp: IReducer<State, Action> = (
	state: any,
	action: Action
) => {
	switch (action.type) {
		case "setAppName":
			return { ...state, appName: action.payload };
		default:
			console.error("reducer Error", { state }, { action });
			return { ...state };
	}
};
