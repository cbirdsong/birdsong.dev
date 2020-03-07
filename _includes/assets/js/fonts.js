(function() {
	// Optimization for Repeat Views
	if (sessionStorage.fontsLoadedCriticalFoftPreload) {
		document.documentElement.className += " fonts-loaded";
		return;
	}

	if ("fonts" in document) {
		Promise.all([document.fonts.ready]).then(function() {
			document.documentElement.className += " fonts-loaded";

			// Optimization for Repeat Views
			sessionStorage.fontsLoadedFoutWithClass = true;
		});
	}
})();
