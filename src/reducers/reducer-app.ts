export const reducerApp = (state: State, action: any) => {
	switch (action.type) {
		case "setAppName":
			return { ...state, appName: action.payload };

		case "loadUser":
			const user = action.payload;
			localStorage.setItem("whatsapp-clone-user", JSON.stringify(user));
			return { ...state, user };

		case "setShowTabs":
			return { ...state, showTabs: action.payload };

		case "setChatWith":
			return { ...state, chatWith: action.payload };

		default:
			console.error("reducer Error", { state }, { action });
			return { ...state };
	}
};
