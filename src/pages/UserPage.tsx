import { IonRouterOutlet, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { runSeeder } from "../firebase/seed";
import { ChatsTab } from "./ChatsTab";
import { StatusTab } from "./StatusTab";
import { CallsTab } from "./CallsTab";
import { ChatPage } from "./ChatPage";
import "../theme/variables.css";
import "../app/App.css";
import { useContext } from "react";
import { AppContext } from "../state";

export const UserPage = () => {
	const { state } = useContext(AppContext);

	return (
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/chats">
						<ChatsTab />
					</Route>
					<Route exact path="/status">
						<StatusTab />
					</Route>
					<Route exact path="/calls">
						<CallsTab />
					</Route>
					<Route exact path="/">
						<Redirect to="/chats" />
					</Route>
					<Route exact path="/chat-page">
						<ChatPage {...state} />
					</Route>
				</IonRouterOutlet>
				{state.showTabs ? (
					<IonTabBar slot="top" className="menu-bar">
						<IonTabButton tab="chat" href="/chats" className="tab-button">
							<IonLabel onClick={() => runSeeder()}>CHATS</IonLabel>
						</IonTabButton>
						<IonTabButton tab="status" href="/status" className="tab-button">
							<IonLabel>STATUS</IonLabel>
						</IonTabButton>
						<IonTabButton tab="calls" href="/calls" className="tab-button">
							<IonLabel>CALLS</IonLabel>
						</IonTabButton>
					</IonTabBar>
				) : (
					<IonTabBar />
				)}
			</IonTabs>
		</IonReactRouter>
	);
};
