import { AppContext } from "../state";
import { useState, useContext } from "react";
import { Users } from "../firebase/firestore/users";
import {
	IonButton,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonLoading,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

export const Login = () => {
	const { dispatch } = useContext(AppContext);
	const [passcode, setPasscode] = useState("");
	const [showLoading, setShowLoading] = useState(false);

	const handlePasscode = (value: string) => {
		if (passcode !== value) setPasscode(value);
	};

	const handleLogin = async () => {
		setShowLoading(true);
		const authUser = (await Users.getByPasscode(passcode)) as User;

		if (authUser && authUser.id) {
			setTimeout(() => {
				setShowLoading(false);
				dispatch({ type: "loadUser", payload: authUser });
			}, 2600);
		} else {
			setTimeout(() => {
				alert("Wrong passcode provided");
				setShowLoading(false);
			}, 2600);
		}
	};

	const loginDisabled = passcode.length !== 6;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className="login-bar">
					<IonTitle>Two-step verification</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="passcode-txt">
					Enter a six digit passcode which you'll be asked for when you register
					your phone number with WHAZZAP!.
				</div>
				<div className="passcode-input-block">
					<IonItem className="passcode-input">
						<IonInput
							value={passcode}
							onIonChange={(evt) =>
								evt.detail.value ? handlePasscode(evt.detail.value) : undefined
							}
						></IonInput>
					</IonItem>
				</div>

				<IonButton
					disabled={loginDisabled}
					className="login-button"
					onClick={handleLogin}
				>
					Login
				</IonButton>
				<IonLoading
					isOpen={showLoading}
					onDidDismiss={() => setShowLoading(false)}
					message={"Please wait..."}
				/>
			</IonContent>
		</IonPage>
	);
};
export default Login;
