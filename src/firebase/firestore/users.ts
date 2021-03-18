import { db } from "./db";

const getByPasscode = async (passcode: string): Promise<User | undefined> => {
	console.log("qqqq");

	const docs = await db
		.collection("users")
		.where("passcode", "==", passcode)
		.get();

	if (docs.empty) return undefined;
	else if (docs.size !== 1) {
		console.error("To many users returned", {
			docCount: docs.size,
			docs: docs.forEach((user) => console.log(user.data())),
		});
		return undefined;
	} else {
		const user: User = docs.docs[0].data() as User;

		if (user.id !== docs.docs[0].id) {
			user.id = docs.docs[0].id;
		}

		return user;
	}
};

export const Users = {
	getByPasscode: (passcode: string) => getByPasscode(passcode),
};
//
