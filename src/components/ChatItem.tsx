import { IonAvatar, IonItem, IonLabel } from "@ionic/react";

interface Props {
	name: string;
	avatar: string;
	message: string;
}

export const ChatItem = (props: Props) => {
	const { avatar, name, message } = props;

	return (
		<IonItem>
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
				<p>{message}</p>
			</IonLabel>
		</IonItem>
	);
};
