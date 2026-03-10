import { DateTime } from "luxon";

export default async function (dateObj) {
	return DateTime.fromJSDate(dateObj).toLocaleString({
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
	});
};
