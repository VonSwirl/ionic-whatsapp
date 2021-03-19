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
			<IonContent className="chat-page" fullscreen>
				<IonList>
					{state.user!.contacts.map((contact) => (
						<ChatItem
							key={contact.name}
							avatar={contact.avatar}
							name={contact.name}
							message={contact.userId}
						/>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};
