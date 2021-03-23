import { db } from "./db";

const collectionName = "messages";

export const messageDB = db.collection(collectionName);

const sendMessage = async (message: Partial<Message>) => {
	await messageDB
		.add(message)
		.then(() => console.log("message sent"))
		.catch((e) => console.error(e));
};

const listenToChatMessages = async (params: MessagesListener) => {
	const { set, userA, userB } = params;

	return messageDB
		.where("channel", "in", [`${userA},${userB}`, `${userB},${userA}`])
		.orderBy("time")
		.limit(100)
		.onSnapshot((snap) => {
			if (!snap.empty) {
				let msg: Message[] = [];
				snap.forEach((doc) => msg.push(doc.data() as Message));
				set(msg);
			}
		});
};

export const Messages = {
	sendMessage,
	listenToChatMessages,
};
