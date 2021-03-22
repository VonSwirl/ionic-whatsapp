import { db } from "./db";

const collectionName = "messages";

const sendMessage = async (message: Message) => {
	await db.collection(collectionName).add(message);
};

const subscribe = (userA: string, userB: string, callback: any) => {
	db.collection(collectionName)
		.where("channel", "in", [`${userA},${userB}`, `${userB},${userA}`])
		.orderBy("time")
		.limit(100)
		.onSnapshot((snap) => {
			if (!snap.empty) {
				let msg: Message[] = [];
				snap.forEach((doc) => msg.push(doc.data() as Message));
				callback(msg);
			}
		});
};

const unSubscribe = db.collection("cities").onSnapshot(() => {});

export const Messages = {
	sendMessage,
	subscribe,
	unSubscribe,
};
