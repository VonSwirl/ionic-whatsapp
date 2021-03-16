const user = localStorage.getItem("whatsapp-clone-user");

const appConfig: AppConfig = {
	state: {
		appName: "WHAZZAP!",
		user: user ? JSON.parse(user) : undefined,
	},
};

export default appConfig;
