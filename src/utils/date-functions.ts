// Reading https://momentjs.com/docs/#/parsing/
import moment from "moment";

export const getToday = () => {
	return moment().format("YYY-MM-DD");
};
