import { Redirect, Route } from "react-router-dom";
import {
	IonApp,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { runSeeder } from "./firebase-seeder/seed";

const App: React.FC = () => (
	<IonApp>
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
	</IonApp>
);

export default App;
