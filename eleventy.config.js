const eleventyNavigation = require("@11ty/eleventy-navigation");
const eleventySyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyRss = require("@11ty/eleventy-plugin-rss");
const eleventyInclusiveLanguage = require("@11ty/eleventy-plugin-inclusive-language");

const markdownIt = require("markdown-it");
const markdownItOptions = {
	html: true,
	breaks: true,
	linkify: true,
	typographer: true,
};
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(eleventyNavigation);
	eleventyConfig.addPlugin(eleventySyntaxHighlight);
	eleventyConfig.addPlugin(eleventyRss);

	// Configuration
	eleventyConfig.setQuietMode(true);

	const markdownLib = markdownIt(markdownItOptions).use(markdownItFootnote).disable("code");
	eleventyConfig.setLibrary("md", markdownLib);

	// Filters
	eleventyConfig.addFilter("addNbsp", require("./_11ty/filters/addNbsp.js"));

	eleventyConfig.addFilter("cssmin", require("./_11ty/filters/cssmin.js"));

	eleventyConfig.addFilter("excerpt", require("./_11ty/filters/excerpt.js"));

	eleventyConfig.addFilter("markdown", require("./_11ty/filters/markdown.js"));
	// eleventyConfig.addFilter("markdownAnchorHeadings", require("./_11ty/filters/markdownAnchorHeadings.js"));

	eleventyConfig.addFilter("dateShort", require("./_11ty/filters/dateShort.js"));
	eleventyConfig.addFilter("dateLong", require("./_11ty/filters/dateLong.js"));
	eleventyConfig.addFilter("timeShort", require("./_11ty/filters/timeShort.js"));
	eleventyConfig.addFilter("timeLong", require("./_11ty/filters/timeLong.js"));
	eleventyConfig.addFilter("datetimeShort", require("./_11ty/filters/datetimeShort.js"));
	eleventyConfig.addFilter("datetimeLong", require("./_11ty/filters/datetimeLong.js"));
	eleventyConfig.addFilter("datetimeAttr", require("./_11ty/filters/datetimeAttr.js"));

	// Collections
	eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getAllSorted().filter(function (item) {
			return item.inputPath.match(/^\.\/posts\//) !== null;
		});
	});

	// Shortcodes
	eleventyConfig.addShortcode("year", require("./_11ty/shortcodes/year.js"));

	// Passthrough
	eleventyConfig.addPassthroughCopy({
		"./node_modules/@fontsource/*/files/*.woff2": "fonts",
		"./node_modules/@fontsource/*/files/*.woff": "fonts",
	});
	eleventyConfig.addPassthroughCopy({ "src/images": "images" });
	eleventyConfig.addPassthroughCopy({ "src/js": "js" });
	eleventyConfig.addPassthroughCopy({ "src/css": "css" });

	eleventyConfig.addPassthroughCopy("_redirects");
	eleventyConfig.addPassthroughCopy("robots.txt");
	eleventyConfig.addPassthroughCopy("manifest.json");

	eleventyConfig.addPassthroughCopy({ "src/themes/1976/css/*": "css" });
	eleventyConfig.addPassthroughCopy({ "src/themes/1976/fonts/*": "fonts" });
	eleventyConfig.addPassthroughCopy({ "src/themes/1976/root/*": "/" });

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
