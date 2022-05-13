// Add nbsp; between the last two words
// https://11ty.rocks/eleventyjs/content/#addnbsp-filter

module.exports = function (content) {
	if (!content || typeof content !== "string") {
		return;
	}

	let title = content;
	// title = title.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
	// title = title.replace(/"(.*)"/g, '\\"$1\\"');
	return title;
};
