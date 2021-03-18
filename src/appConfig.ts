const user = localStorage.getItem("whatsapp-clone-user");

export const initState: State = {
	appName: "WHAZZAP!",
	user: user ? JSON.parse(user) : undefined,
};
