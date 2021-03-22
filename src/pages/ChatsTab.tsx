import { IonContent, IonList, IonPage } from "@ionic/react";
import { useContext } from "react";
import { ChatItem } from "../components/ChatItem";
import { AppContext } from "../state";

interface Props {}

export const ChatsTab = (props: Props) => {
	const { state } = useContext(AppContext);

	console.log({ state });
	return (
		<IonPage>
			<IonContent className="chat-page">
				<IonList>
					{state.user!.contacts.map((contact) => (
						<ChatItem
							userId={contact.userId}
							key={contact.name}
							avatar={contact.avatar}
							name={contact.name}
							lastMessage={contact.lastMessage}
						/>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};
