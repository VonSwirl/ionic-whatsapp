import { db } from "./db";

const collectionName = "users";

const getByPasscode = async (passcode: string): Promise<User | undefined> => {
	const docs = await db
		.collection(collectionName)
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
			db.collection(collectionName)
				.doc(docs.docs[0].id)
				.update({ id: docs.docs[0].id });
			user.id = docs.docs[0].id;
		}

		return user;
	}
};

export const Users = {
	getByPasscode,
};
