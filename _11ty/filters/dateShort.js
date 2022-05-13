const { DateTime } = require("luxon");

module.exports = function (dateObj) {
	return DateTime.fromJSDate(dateObj).toLocaleString({
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
