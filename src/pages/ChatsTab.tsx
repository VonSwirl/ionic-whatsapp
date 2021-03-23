import { IonContent, IonList, IonPage } from "@ionic/react";
import { useContext } from "react";
import { ChatItem } from "../components/ChatItem";
import { AppContext } from "../state";

export const ChatsTab = () => {
	const { state } = useContext(AppContext);

	const { user } = state;

	return (
		<IonPage>
			<IonContent className="chat-page">
				<IonList>
					{user &&
						user.contacts &&
						user.contacts.map((contact) => (
							<ChatItem
								userId={contact.userId}
								key={contact.name}
								avatar={contact.avatar}
								name={contact.name}
							/>
						))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};
