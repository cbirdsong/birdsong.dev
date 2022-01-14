const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addWatchTarget("./src/css/");
	eleventyConfig.addWatchTarget("./src/sass/");
	eleventyConfig.addWatchTarget("./src/js/");

	// Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Date formatting (human readable)
	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
	});

	// Date formatting (machine readable)
	eleventyConfig.addFilter("machineDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
	});

	// Minify CSS
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// Add posts collection
	eleventyConfig.addCollection("posts", function (collection) {
		return collection.getAllSorted().filter(function (item) {
			return item.inputPath.match(/^\.\/posts\//) !== null;
		});
	});

	// Pass through stuff
	eleventyConfig.addPassthroughCopy({
		"./src/fonts": "fonts",
		"./node_modules/@fontsource/*/files/*-latin-variable-*.woff2": "fonts",
		"./node_modules/@fontsource/*/files/*-latin-ext-variable-*.woff2": "fonts",
	});
	eleventyConfig.addPassthroughCopy({ "src/images": "images" });
	eleventyConfig.addPassthroughCopy({ "src/js": "js" });
	eleventyConfig.addPassthroughCopy({ "src/themes": "themes" });

	// Various other things in the root
	eleventyConfig.addPassthroughCopy("_redirects");

	/* Markdown Plugins */
	let markdownIt = require("markdown-it");
	let markdownItAnchor = require("markdown-it-anchor");
	let options = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	};
	let opts = {
		permalink: false,
	};

	eleventyConfig.setLibrary("md", markdownIt(options));

	return {
		templateFormats: ["md", "njk", "html"],

		pathPrefix: "/",

		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: ".",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data",
			output: "dist",
		},
	};
};
