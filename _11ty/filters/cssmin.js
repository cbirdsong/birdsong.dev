// Minify CSS

const CleanCSS = require("clean-css");

module.exports = function (code) {
	if (process.env.ELEVENTY_ENV === "prod") {
		return new CleanCSS({}).minify(code).styles;
	}
	return code;
};
