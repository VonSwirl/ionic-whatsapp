import { IonAvatar, IonItem, IonLabel, useIonViewDidEnter } from "@ionic/react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Messages } from "../firebase/firestore/messages";
import { AppContext } from "../state";

export const ChatItem = (props: Contact) => {
	const { avatar, name, lastMessage, userId } = props;

	const history = useHistory();

	const [lastMessageSent, setLastMessageSent] = useState({});
	const { state, dispatch } = useContext(AppContext);

	useIonViewDidEnter(async () => {
		if (state && state.user && state.chatWith) {
			const userA = state.user.id;
			const userB = userId;

			//@ts-ignore
			unsub.current = await Messages.listenToLastMessage({
				userA,
				userB,
				set: setLastMessageSent,
			});
		}
	});

	const goToChat = () => {
		// Disables the IonTabs for chat-page
		dispatch({ type: "setShowTabs", payload: false });

		// Provides contact to chat-page
		dispatch({ type: "setChatWith", payload: props });

		// Navigate to chat-page
		history.push("/chat-page", state);
	};

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
				<p>{lastMessage}</p>
			</IonLabel>
		</IonItem>
	);
};
