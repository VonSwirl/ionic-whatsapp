import {
	IonAvatar,
	IonBadge,
	IonItem,
	IonLabel,
	useIonViewDidEnter,
	useIonViewDidLeave,
} from "@ionic/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { messageDB } from "../firebase/firestore/messages";
import { AppContext } from "../state";

export const ChatItem = (props: Contact) => {
	const { avatar, name, userId } = props;

	const history = useHistory();

	let unsub = useRef(undefined);

	const { state, dispatch } = useContext(AppContext);
	const [newMessagesCount, setNewMessagesCount] = useState(0);
	const [previous, setPrevious] = useState<Message | null>(null);
	const [lastMessage, setLastMessage] = useState<Message | null>(null);

	useEffect(() => {
		if (lastMessage && previous) {
			if (lastMessage.id !== previous.id) {
				if (lastMessage.sentBy !== state.user?.id) {
					setNewMessagesCount(newMessagesCount + 1);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastMessage, previous]);

	useIonViewDidEnter(async () => {
		if (state && state.user) {
			const userA = state.user.id;
			const userB = userId;

			//@ts-ignore
			unsub.current = messageDB
				.where("channel", "in", [`${userA},${userB}`, `${userB},${userA}`])
				.orderBy("time", "desc")
				.limit(1)
				.onSnapshot((snap) => {
					if (!snap.empty) {
						const newMessage = snap.docs[0].data() as Message;
						setPrevious(lastMessage || newMessage);
						setLastMessage(newMessage);
					}
				});
		}
	});

	useIonViewDidLeave(() => {
		//@ts-ignore
		if (unsub && unsub.current) unsub.current();
	});

	const goToChat = () => {
		// Disables the IonTabs for chat-page
		dispatch({ type: "setShowTabs", payload: false });

		// Provides contact to chat-page
		dispatch({ type: "setChatWith", payload: props });

		// Reset counter when viewing chat
		setNewMessagesCount(0);

		// Navigate to chat-page
		history.push("/chat-page", state);
	};

	if (!previous && lastMessage) {
		setPrevious(lastMessage);
	}

	return (
		<IonItem onClick={() => goToChat()}>
			<IonAvatar slot="start">
				<img
					src={
						avatar ||
						"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
					}
					alt="chat"
				/>
			</IonAvatar>
			<IonLabel>
				<h2>{name}</h2>
				<p>{lastMessage ? lastMessage.message : "..."}</p>
			</IonLabel>
			{newMessagesCount > 0 && (
				<IonBadge color="success" slot="end">
					{newMessagesCount}
				</IonBadge>
			)}
		</IonItem>
	);
};
