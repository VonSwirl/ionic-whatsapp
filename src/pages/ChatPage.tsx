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
import { useContext } from "react";
import { AppContext } from "../state";
import { happyOutline, linkOutline, sendSharp } from "ionicons/icons";

export const ChatPage = () => {
	const { state, dispatch } = useContext(AppContext);

	useIonViewWillLeave(() => dispatch({ type: "setShowTabs", payload: true }));

	if (!state.chatWith) return <></>;

	const { avatar, name } = state.chatWith;

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
								avatar ||
								"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
							}
							alt="icon"
						/>
					</IonAvatar>
					<IonTitle className="text-align-start">{name}</IonTitle>
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
											<IonInput placeholder="Type a message"></IonInput>
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
								<IonButton className="chat-send-button">
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
