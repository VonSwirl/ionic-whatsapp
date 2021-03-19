import { IonRouterOutlet, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { runSeeder } from "../firebase/seed";
import { ChatsTab } from "./ChatsTab";
import { StatusTab } from "./StatusTab";
import { CallsTab } from "./CallsTab";
import "../theme/variables.css";
import "../app/App.css";

export const UserPage = () => {
	return (
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/chat">
						<ChatsTab />
					</Route>
					<Route exact path="/status">
						<StatusTab />
					</Route>
					<Route path="/calls">
						<CallsTab />
					</Route>
					<Route exact path="/">
						<Redirect to="/chat" />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="top" className="menu-bar">
					<IonTabButton tab="chat" href="/chat" className="tab-button">
						<IonLabel onClick={() => runSeeder()}>CHATS</IonLabel>
					</IonTabButton>
					<IonTabButton tab="status" href="/status" className="tab-button">
						<IonLabel>STATUS</IonLabel>
					</IonTabButton>
					<IonTabButton tab="calls" href="/calls" className="tab-button">
						<IonLabel>CALLS</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	);
};
