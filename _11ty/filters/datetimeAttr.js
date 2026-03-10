import { DateTime } from "luxon";

export default async function (dateObj) {
	return DateTime.fromJSDate(dateObj).toISO();
};
