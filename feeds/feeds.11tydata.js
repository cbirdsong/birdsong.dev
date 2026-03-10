export default function () {
	let data = {
		permalink: "/feed/{{ page.fileSlug }}.xml",
		eleventyExcludeFromCollections: true,
	};

	return data;
}