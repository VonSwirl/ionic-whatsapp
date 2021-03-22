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
	useIonViewWillLeave,
} from "@ionic/react";
import { useContext, useState } from "react";
import { AppContext } from "../state";
import { happyOutline, linkOutline, sendSharp } from "ionicons/icons";
import { uniqueString, getTimestamp } from "../utils";
import { Messages } from "../firebase/firestore/messages";

export const ChatPage = () => {
	const { state, dispatch } = useContext(AppContext);

	const [message, setMessage] = useState<string | null>(null);

	useIonViewWillLeave(() => dispatch({ type: "setShowTabs", payload: true }));

	if (!state) return <></>;
	if (!state.user) return <></>;
	if (!state.chatWith) return <></>;

	const chattingWithUser = state.chatWith;
	const appUser = state.user;

	const sendMessage = async () => {
		if (message) {
			let messageBody: Message = {
				id: uniqueString(),
				type: "text",
				sentBy: appUser.id,
				time: getTimestamp(),
				channel: `${appUser.id},${chattingWithUser.userId},`,
				message: message,
			};
			Messages.sendMessage(messageBody);
			setMessage(null);
		}
	};

	const onChangeMessage = (message: string | null | undefined) => {
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
								chattingWithUser.avatar ||
								"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
							}
							alt="icon"
						/>
					</IonAvatar>
					<IonTitle className="text-align-start">
						{chattingWithUser.name}
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>Chattty ness</IonContent>
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
