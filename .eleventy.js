const { DateTime } = require("luxon");

const CleanCSS = require("clean-css");

const slugify = require("slugify");

const eleventyNavigation = require("@11ty/eleventy-navigation");
const eleventySyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyRss = require("@11ty/eleventy-plugin-rss");
const eleventyInclusiveLanguage = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addWatchTarget("./src/");

	/* MarkdownIt Plugins */
	const markdownIt = require("markdown-it");
	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	};

	const markdownItFootnote = require("markdown-it-footnote");

	const markdownLib = markdownIt(markdownItOptions).use(markdownItFootnote).disable("code");
	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addPlugin(eleventyNavigation);
	eleventyConfig.addPlugin(eleventySyntaxHighlight);
	// eleventyConfig.addPlugin(eleventyInclusiveLanguage);
	eleventyConfig.addPlugin(eleventyRss);

	// Date display filters

	eleventyConfig.addFilter("datetimeAttr", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO();
	});

	eleventyConfig.addFilter("dateShort", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
	});

	eleventyConfig.addFilter("dateLong", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
	});

	eleventyConfig.addFilter("datetimeFull", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
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
	// based on https://11ty.rocks/eleventyjs/content/#markdown-filter
	eleventyConfig.addFilter("markdown", (content) => {
		const markdownRender = new markdownIt(markdownItOptions);

		if (content.indexOf("\n") < 0) {
			// console.log(content.indexOf("\n") + ": " + content);
			return markdownRender.renderInline(content);
		}
		return markdownRender.render(content);
	});

	// Add anchorHeadings filter (WIP)
	// based on https://11ty.rocks/eleventyjs/content/#markdown-filter
	eleventyConfig.addFilter("anchorHeadings", (content) => {
		const markdownItAnchor = require("markdown-it-anchor");
		const markdownItAnchorLinkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
			class: "anchor",
			symbol: "<span hidden>#</span>",
			style: "aria-labelledby",
		});
		const markdownItAnchorOptions = {
			level: [2, 3, 4],
			slugify: (str) =>
				slugify(str, {
					lower: true,
					strict: true,
					remove: /["]/g,
				}),
			tabIndex: false,
			permalink(slug, opts, state, idx) {
				state.tokens.splice(
					idx,
					0,
					Object.assign(new state.Token("div_open", "div", 1), {
						// Add class "header-wrapper [h1 or h2 or h3]"
						attrs: [["class", "heading-wrapper"]],
						block: true,
					})
				);

				state.tokens.splice(
					idx + 4,
					0,
					Object.assign(new state.Token("div_close", "div", -1), {
						block: true,
					})
				);

				markdownItAnchorLinkAfterHeader(slug, opts, state, idx + 1);
			},
		};

		const markdownRenderAnchors = new markdownIt(markdownItOptions)
			.use(markdownItAnchor, markdownItAnchorOptions)
			.use(markdownItFootnote);

		return markdownRenderAnchors.render(content);
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
