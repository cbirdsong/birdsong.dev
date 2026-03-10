// Add markdown filter
// based on https://11ty.rocks/eleventyjs/content/#markdown-filter

import markdownIt from "markdown-it";

const markdownItOptions = {
	html: true,
	breaks: true,
	linkify: true,
	typographer: true,
};

const markdownRenderFilter = new markdownIt(markdownItOptions);

export default async function (content) {
	if (!content || typeof content !== "string") {
		return;
	}

	if (content.indexOf("\n") < 0) {
		// console.log(content.indexOf("\n") + ": " + content);
		return markdownRenderFilter.renderInline(content);
	}
	return markdownRenderFilter.render(content);
};
