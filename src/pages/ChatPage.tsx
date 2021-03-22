import {
	IonAvatar,
	IonButton,
	IonCol,
	IonContent,
	IonFooter,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from "@ionic/react";
import { useContext, useState } from "react";
import { AppContext } from "../state";
import { happyOutline, linkOutline, sendSharp } from "ionicons/icons";
import { uniqueString, getTimestamp } from "../utils";
import { Messages } from "../firebase/firestore/messages";

export const ChatPage = (state: State) => {
	const { dispatch } = useContext(AppContext);
	const [message, setMessage] = useState<string | null>(null);
	const [chatMessages, setChatMessages] = useState<Message[]>([]);

	useIonViewWillEnter(async () => {
		if (state && state.user && state.chatWith) {
			const userA = state.user.id;
			const userB = state.chatWith.userId;
			Messages.subscribe(userA, userB, setChatMessages);
		}
	});

	useIonViewWillLeave(() => {
		dispatch({ type: "setShowTabs", payload: true });
		Messages.unSubscribe();
	});

	const sendMessage = async () => {
		if (message && state.user && state.chatWith) {
			Messages.sendMessage({
				id: uniqueString(),
				type: "text",
				sentBy: state.user.id,
				time: getTimestamp(),
				channel: `${state.user.id},${state.chatWith.userId}`,
				message: message,
			});

			setMessage(null);
		}
	};

	const onChangeMessage = (message: string | null | undefined) => {
		console.log(state.chatWith);

		if (message) setMessage(message);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className="menu-bar">
					<IonAvatar
						slot="start"
						style={{ width: "40px", height: "40px", marginLeft: "10px" }}
					>
						<img
							src={
								state.chatWith
									? state.chatWith.avatar
									: "https://www.jea.com/cdn/images/avatar/avatar-alt.svg"
							}
							alt="icon"
						/>
					</IonAvatar>
					<IonTitle className="text-align-start">
						{state.chatWith ? state.chatWith.name : ""}
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{chatMessages.map((chat) => (
					<div key={chat.id}>{chat.message}</div>
				))}
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonGrid>
						<IonRow>
							<IonCol size="10">
								<IonGrid>
									<IonRow>
										<IonCol size="2">
											<IonIcon size="large" icon={happyOutline}></IonIcon>
										</IonCol>
										<IonCol size="8">
											<IonInput
												value={message}
												placeholder="Type a message"
												onIonChange={(evt) => onChangeMessage(evt.detail.value)}
											></IonInput>
										</IonCol>
										<IonCol size="2">
											<IonIcon
												className="media-icon"
												size="large"
												icon={linkOutline}
											></IonIcon>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCol>
							<IonCol size="2">
								<IonButton
									onClick={() => sendMessage()}
									className="chat-send-button"
								>
									<IonIcon icon={sendSharp}></IonIcon>
								</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};
