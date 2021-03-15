import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useContext } from "react";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../state";
import "./Tab1.css";

const Tab1: React.FC = () => {
	const state = useContext(AppContext);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{state.appName}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 1</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 1 page" />
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
