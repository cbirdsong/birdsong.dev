import eleventyNavigation from "@11ty/eleventy-navigation";
import eleventySyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyRss from "@11ty/eleventy-plugin-rss";
import eleventyInclusiveLanguage from "@11ty/eleventy-plugin-inclusive-language";

import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
const markdownItOptions = {
	html: true,
	breaks: true,
	linkify: true,
	typographer: true,
};

// Filters

import addNbsp from  "./_11ty/filters/addNbsp.js";
import cssmin from  "./_11ty/filters/cssmin.js";
import excerpt from  "./_11ty/filters/excerpt.js";
import markdown from  "./_11ty/filters/markdown.js";
import dateShort from  "./_11ty/filters/dateShort.js";
import dateLong from  "./_11ty/filters/dateLong.js";
import timeShort from  "./_11ty/filters/timeShort.js";
import timeLong from  "./_11ty/filters/timeLong.js";
import datetimeShort from  "./_11ty/filters/datetimeShort.js";
import datetimeLong from  "./_11ty/filters/datetimeLong.js";
import datetimeAttr from  "./_11ty/filters/datetimeAttr.js";

export default async function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(eleventyNavigation);
	eleventyConfig.addPlugin(eleventySyntaxHighlight);
	eleventyConfig.addPlugin(eleventyRss);

	// Configuration
	eleventyConfig.setQuietMode(true);

	const markdownLib = markdownIt(markdownItOptions).use(markdownItFootnote).disable("code");
	eleventyConfig.setLibrary("md", markdownLib);

	// Filters
	eleventyConfig.addFilter("addNbsp", addNbsp);

	eleventyConfig.addFilter("cssmin", cssmin);

	eleventyConfig.addFilter("excerpt", excerpt);

	eleventyConfig.addFilter("markdown", markdown);
	// eleventyConfig.addFilter("markdownAnchorHeadings", require("./_11ty/filters/markdownAnchorHeadings.js"));

	eleventyConfig.addFilter("dateShort", dateShort);
	eleventyConfig.addFilter("dateLong", dateLong);
	eleventyConfig.addFilter("timeShort", timeShort);
	eleventyConfig.addFilter("timeLong", timeLong);
	eleventyConfig.addFilter("datetimeShort", datetimeShort);
	eleventyConfig.addFilter("datetimeLong", datetimeLong);
	eleventyConfig.addFilter("datetimeAttr", datetimeAttr);

	// Collections
	eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getAllSorted().filter(function (item) {
			return item.inputPath.match(/^\.\/posts\//) !== null;
		});
	});

	// Shortcodes
	eleventyConfig.addShortcode("year", function() { return `${new Date().getFullYear()}`; });

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
