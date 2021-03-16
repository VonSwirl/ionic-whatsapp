import { dummyUsers, dummyMessages } from "./data";
import { db } from "./app";
import { addToCollection } from "./lib";

export const runSeeder = async () => {
	if (db) {
		const usersEmpty = await db
			.collection("users")
			.get()
			.then((docs) => docs.empty);

		const messagesEmpty = await db
			.collection("messages")
			.get()
			.then((docs) => docs.empty);

		if (!usersEmpty && !messagesEmpty) {
			console.log(`Seeder not required`);
			return;
		}

		if (usersEmpty) {
			dummyUsers.forEach((user) => addToCollection(db, user, "users"));
			console.log("Users Data Added");
		} else {
			console.log("Users Data Already Exists");
		}

		if (messagesEmpty) {
			dummyMessages.forEach((msg) => addToCollection(db, msg, "messages"));
		} else {
			console.log("Messages Data Already Exists");
		}
	}
};
