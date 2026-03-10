// Fake an excerpt
// https:11ty.rocks/eleventyjs/content/#excerpt-filter

export default async function (content) {
	if (!content || typeof content !== "string") {
		return;
	}

	let excerpt = content.replace(/(<([^>]+)>)/gi, "");
	return excerpt.substr(0, excerpt.lastIndexOf(" ", 200)) + "...";
};
