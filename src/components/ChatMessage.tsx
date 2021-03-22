import { useContext } from "react";
import { AppContext } from "../state";
import { getTime } from "../utils";

import "./ChatMessage.css";

export const ChatMessage = (props: Message) => {
	const { message, time, sentBy } = props;

	const context = useContext(AppContext);

	const userId = context.state.user?.id;

	console.log({ sentBy, userId });

	const msgPosition = sentBy !== userId ? "pos-left" : "pos-right";
	const msgColor = sentBy === userId ? "color-left" : "color-right";

	console.log({ msgPosition });
	return (
		<div className={`flex ${msgPosition}`}>
			<div className={`chat-message-box ${msgColor}`}>
				{message}
				<div className="message-time">{getTime(time)}</div>
			</div>
		</div>
	);
};
