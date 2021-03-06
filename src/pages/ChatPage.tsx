import {
	IonAlert,
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
import { Now, uniqueString } from "../utils";
import { AppContext } from "../state";
import { useContext, useRef, useState } from "react";
import { Messages } from "../firebase/firestore/messages";
import { ChatMessage } from "../components/ChatMessage";
import { happyOutline, linkOutline, sendSharp } from "ionicons/icons";
import { Plugins, CameraResultType } from "@capacitor/core";

export const ChatPage = () => {
	const { state, dispatch } = useContext(AppContext);
	const [showAlert, setShowAlert] = useState(false);
	const [message, setMessage] = useState<string | null>(null);
	const [chatMessages, setChatMessages] = useState<Message[]>([]);

	let unsub = useRef(undefined);

	const { Camera } = Plugins;

	useIonViewWillEnter(async () => {
		if (state && state.user && state.chatWith) {
			const userA = state.user.id;
			const userB = state.chatWith.userId;
			// @ts-ignore
			unsub.current = await Messages.listenToChatMessages({
				userA,
				userB,
				set: setChatMessages,
			});
		}
	});

	useIonViewWillLeave(() => {
		//@ts-ignore
		if (unsub && unsub.current) unsub.current();

		dispatch({ type: "setShowTabs", payload: true });
	});

	const sendMessage = async (type: MediaTypes, fileUrl?: string) => {
		if ((message || type === "media") && state.user && state.chatWith) {
			let messageTxt = message;
			if (!message && type === "media") messageTxt = "View file";
			Messages.sendMessage({
				id: uniqueString(),
				type,
				time: Now(),
				fileUrl: fileUrl || null,
				message: messageTxt || "...",
				sentBy: state.user.id,
				channel: `${state.user.id},${state.chatWith.userId}`,
			});

			setMessage(null);
		}
	};

	const onChangeMessage = (message: string | null | undefined) => {
		if (message) setMessage(message);
	};

	const getImage = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
		});

		await sendMessage(
			"media",
			`data:image/${image.format};base64,${image.base64String}`
		);
	};

	const EmojiPicker = () => {
		/**
		 * TODO:
		 * @see - https://ionicframework.com/docs/api/alert
		 * @see - https://capacitorjs.com/docs/apis/keyboard
		 */
		return (
			<IonAlert
				isOpen={showAlert}
				onDidDismiss={() => setShowAlert(false)}
				cssClass="my-custom-class"
				header={"Emoji Selector"}
				subHeader={"Coming Soon!"}
				message={"View comments for more info."}
				buttons={["Cancel"]}
			/>
		);
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
			<IonContent className="chat-page-content">
				{chatMessages.map((chat, i) => (
					<ChatMessage key={i + chat.sentBy} {...chat} />
				))}
				<EmojiPicker />
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonGrid>
						<IonRow>
							<IonCol size="10">
								<IonGrid>
									<IonRow>
										<IonCol size="2">
											<IonIcon
												size="large"
												icon={happyOutline}
												onClick={() =>
													!showAlert ? setShowAlert(true) : undefined
												}
											></IonIcon>
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
												onClick={() => getImage()}
											></IonIcon>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCol>
							<IonCol size="2">
								<IonButton
									onClick={() => sendMessage("text")}
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
