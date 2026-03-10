// Minify CSS

import CleanCSS from "clean-css";

export default async function (code) {
	if (process.env.ELEVENTY_ENV === "prod") {
		return new CleanCSS({}).minify(code).styles;
	}
	return code;
};
