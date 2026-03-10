import { DateTime } from "luxon";

export default async function (dateObj) {
	return DateTime.fromJSDate(dateObj).toLocaleString({
		year: "numeric",
		month: "short",
		day: "numeric",
		weekday: "short",
		hour: "numeric",
		minute: "numeric",
	});
};
