import { IonRouterOutlet, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { runSeeder } from "../firebase/seed";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import "../theme/variables.css";
import "../app/App.css";

export const UserPage = () => {
	return (
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/tab1">
						<Tab1 />
					</Route>
					<Route exact path="/tab2">
						<Tab2 />
					</Route>
					<Route path="/tab3">
						<Tab3 />
					</Route>
					<Route exact path="/">
						<Redirect to="/tab1" />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="top" className="menu-bar">
					<IonTabButton tab="tab1" href="/tab1" className="tab-button">
						<IonLabel onClick={() => runSeeder()}>CHATS</IonLabel>
					</IonTabButton>
					<IonTabButton tab="tab2" href="/tab2" className="tab-button">
						<IonLabel>STATUS</IonLabel>
					</IonTabButton>
					<IonTabButton tab="tab3" href="/tab3" className="tab-button">
						<IonLabel>CALLS</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	);
};
