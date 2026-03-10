// Add anchorHeadings filter (WIP)
// based on https://11ty.rocks/eleventyjs/content/#markdown-filter
// might've been replaced by native markdown-it-anchor functionality

import slugify from "slugify";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAnchor from "markdown-it-anchor";

export default async function (content) {
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
};
