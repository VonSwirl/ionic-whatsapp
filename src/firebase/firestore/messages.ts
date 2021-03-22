import { db } from "./db";

const collectionName = "messages";

const sendMessage = async (message: Message) => {
	await db.collection(collectionName).add(message);
};

export const Messages = {
	sendMessage,
};
