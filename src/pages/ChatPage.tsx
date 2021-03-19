import {
	IonAvatar,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

export const ChatPage = () => {
	const avatar = "";
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className="menu-bar">
					<IonAvatar slot="start">
						<img
							src={
								avatar ||
								"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
							}
							alt="icon"
						/>
						<IonTitle className="text-align-start">Fred</IonTitle>
					</IonAvatar>
				</IonToolbar>
			</IonHeader>
			<IonContent></IonContent>
		</IonPage>
	);
};
