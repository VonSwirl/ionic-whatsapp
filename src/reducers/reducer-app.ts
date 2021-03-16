export const reducerApp: IReducer<State, Action> = (
	state: any,
	action: Action
) => {
	switch (action.type) {
		case "setAppName":
			return { ...state, appName: action.payload };
		case "loadUser":
			const user = action.payload;
			localStorage.setItem("whatsapp-clone-user", JSON.stringify(user));
			return { ...state, user };
		default:
			console.error("reducer Error", { state }, { action });
			return { ...state };
	}
};
