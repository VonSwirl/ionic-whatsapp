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
import "../theme/variables.css";

import { useContext } from "react";
import { IonApp } from "@ionic/react";
import { AppContext } from "../state";
import { Login } from "../pages/Login";
import { UserPage } from "../pages/UserPage";

const App: React.FC = () => {
	const { state } = useContext(AppContext);

	return <IonApp>{!state.user ? <Login /> : <UserPage />}</IonApp>;
};

export default App;
