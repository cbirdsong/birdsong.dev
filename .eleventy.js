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
	const markdownRenderFilter = new markdownIt(markdownItOptions);

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
		if (process.env.ELEVENTY_ENV === "prod") {
			return new CleanCSS({}).minify(code).styles;
		}
		return code;
	});

	// Fake an excerpt
	// https:11ty.rocks/eleventyjs/content/#excerpt-filter
	eleventyConfig.addFilter("excerpt", (content) => {
		if (!content || typeof content !== "string") {
			return;
		}

		let excerpt = content.replace(/(<([^>]+)>)/gi, "");
		return excerpt.substr(0, excerpt.lastIndexOf(" ", 200)) + "...";
	});

	// Add markdown filter
	// based on https://11ty.rocks/eleventyjs/content/#markdown-filter
	eleventyConfig.addFilter("markdown", (content) => {
		if (!content || typeof content !== "string") {
			return;
		}

		if (content.indexOf("\n") < 0) {
			// console.log(content.indexOf("\n") + ": " + content);
			return markdownRenderFilter.renderInline(content);
		}
		return markdownRenderFilter.render(content);
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
	eleventyConfig.addFilter("addNbsp", (content) => {
		if (!content || typeof content !== "string") {
			return;
		}

		let title = content;
		// title = title.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
		// title = title.replace(/"(.*)"/g, '\\"$1\\"');
		return title;
	});

	// Add collections
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
	eleventyConfig.addPassthroughCopy("robots.txt");
	eleventyConfig.addPassthroughCopy("manifest.json");

	eleventyConfig.addPassthroughCopy({ "src/themes/1977/*.ico": "/" });
	eleventyConfig.addPassthroughCopy({ "src/themes/1977/*.png": "/" });
	eleventyConfig.addPassthroughCopy({ "src/themes/1977/*.svg": "/" });

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
			layouts: "_includes/layouts",
			data: "_data",
			output: "dist",
		},
	};
};
