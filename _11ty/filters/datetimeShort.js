const { DateTime } = require("luxon");

module.exports = function (dateObj) {
	return DateTime.fromJSDate(dateObj).toLocaleString({
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	});
};
