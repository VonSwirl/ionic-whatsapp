// TODO: remove
// Reading https://momentjs.com/docs/#/parsing/
import moment from "moment";

export const getToday = () => {
	return moment().format("YYY-MM-DD");
};

export const Now = () => new Date();

export const getTime = (timestamp: any) => {
	const date = new Date(timestamp * 1000);

	const hours = date.getHours();

	const minutes = "0" + date.getMinutes();

	const formattedTime = hours + ":" + minutes.substr(-2);

	return formattedTime;
};
