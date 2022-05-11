let data = {
	layout: "post.njk",
	permalink: "blog/{{ title | slugify }}/",
	tags: "post",
	// dateModified: "Last Modified",
};

if (process.env.NODE_ENV === "production") {
	// data.dateModified = "git Last Modified";
}

module.exports = data;
