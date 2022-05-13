let data = {
	layout: "_base",
	// permalink: "/test/{{ page.filePath | slugify }}/",
	permalink: false,
};

if (process.env.ELEVENTY_ENV === "prod") {
	data.permalink = false;
}

module.exports = data;
