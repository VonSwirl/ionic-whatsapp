import { db } from "./db";

const collectionName = "messages";

export const messageDB = db.collection(collectionName);

const sendMessage = async (message: Message) => {
	await messageDB.add(message).then((doc) => doc.update({ id: doc.id }));
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

const listenToLastMessage = async (params: LastMessagesListener) => {
	const { set, userA, userB } = params;
	return messageDB
		.where("channel", "in", [`${userA},${userB}`, `${userB},${userA}`])
		.orderBy("time", "desc")
		.limit(1)
		.onSnapshot((snap) => {
			if (!snap.empty) {
				const { message } = snap.docs[0].data() as Message;
				set(message);
			}
		});
};

export const Messages = {
	sendMessage,
	listenToLastMessage,
	listenToChatMessages,
};
