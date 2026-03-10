export default function () {
	let data = {
		layout: "page",
		permalink: "{{ title | slugify }}/",
		tags: "page",
	};

	return data;
}