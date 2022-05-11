const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");

const eleventyNavigation = require("@11ty/eleventy-navigation");
const eleventySyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addWatchTarget("./src/css/");
	eleventyConfig.addWatchTarget("./src/sass/");
	eleventyConfig.addWatchTarget("./src/js/");

	/* MarkdownIt Plugins */
	const markdownIt = require("markdown-it");
	const markdownItAnchor = require("markdown-it-anchor");
	const markdownItFootnote = require("markdown-it-footnote");
	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	};
	const markdownLib = markdownIt(markdownItOptions).use(markdownItFootnote);
	const markdownRender = new markdownIt({
		html: true,
	});

	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addPlugin(eleventyNavigation);
	eleventyConfig.addPlugin(eleventySyntaxHighlight);
	eleventyConfig.addPlugin(eleventyRss);

	// Date display filters
	// Date formatting (human readable)
	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
	});

	// Date formatting (machine readable)
	eleventyConfig.addFilter("machineDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
	});

	eleventyConfig.addFilter("dateShort", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
	});

	eleventyConfig.addFilter("dateFull", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
	});

	eleventyConfig.addFilter("datetimeAttr", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO();
	});

	eleventyConfig.addFilter("time", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.TIME_SIMPLE);
	});

	// Minify CSS
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// Fake an excerpt
	// https:11ty.rocks/eleventyjs/content/#excerpt-filter
	eleventyConfig.addFilter("excerpt", (post) => {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	});

	// Add markdown filter
	// https://11ty.rocks/eleventyjs/content/#markdown-filter
	eleventyConfig.addFilter("markdown", (content) => {
		return markdownRender.render(content);
	});

	// Add nbsp; between the last two words
	// https://11ty.rocks/eleventyjs/content/#addnbsp-filter
	eleventyConfig.addFilter("addNbsp", (str) => {
		if (!str) {
			return;
		}
		let title = str.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
		title = title.replace(/"(.*)"/g, '\\"$1\\"');
		return title;
	});

	// Add posts collection
	eleventyConfig.addCollection("posts", function (collection) {
		return collection.getAllSorted().filter(function (item) {
			return item.inputPath.match(/^\.\/posts\//) !== null;
		});
	});

	// Add year shortcode
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Pass through stuff
	eleventyConfig.addPassthroughCopy({
		"./src/fonts": "fonts",
		"./node_modules/@fontsource/*/files/*.woff2": "fonts",
		"./node_modules/@fontsource/*/files/*.woff": "fonts",
	});
	eleventyConfig.addPassthroughCopy({ "src/images": "images" });
	eleventyConfig.addPassthroughCopy({ "src/js": "js" });
	eleventyConfig.addPassthroughCopy({ "src/themes": "themes" });

	// Various other things in the root
	eleventyConfig.addPassthroughCopy("_redirects");
	eleventyConfig.addPassthroughCopy("favicon.ico");
	eleventyConfig.addPassthroughCopy("favicon.png");

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
