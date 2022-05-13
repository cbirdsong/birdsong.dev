const { DateTime } = require("luxon");

module.exports = function (dateObj) {
	return DateTime.fromJSDate(dateObj).toLocaleString({
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
	});
};
