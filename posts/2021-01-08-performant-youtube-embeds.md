---
title: Ways to embed YouTube videos
description: Because you probably don't want to use the default.
date: 2021-01-08
tags:
  - youtube
  - vimeo
  - embeds
  - performance
---

## Option 1: The Default Embed

You just grab it off a video. Be sure to add `loading="lazy"` and customize the title attribute.

```html
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/hpDRlLnLWGg"
	title="The best video game trailer ever made"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	loading="lazy"
></iframe>
```

**Pros:**

- Easy!
- Somewhat customizable via [URL parameters](https://developers.google.com/youtube/player_parameters).

**Cons:**

- Extremely slow.

## Option 2: The [iframe API](https://developers.google.com/youtube/iframe_api_reference)

Google's starter code to load it:

```js
function setupYoutubeIframe() {
	var tag = document.createElement("script");
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName("script")[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
```

Once loaded, the API automatically calls a global function named `onYouTubeIframeAPIReady`. Some sample code:

```html
<div id="sample-youtube-player" data-video-id="hpDRlLnLWGg">
	<a href="https://www.youtube.com/watch?v=hpDRlLnLWGg">View Video</a>
</div>
```

```js
function onYouTubeIframeAPIReady() {
	var video_id = document.getElementById("sample-youtube-player").getAttribute("data-video-id");

	youtube_player = new YT.Player("sample-youtube-player", {
		height: "315",
		width: "560",
		videoId: video_id,
		playerVars: {
			enablejsapi: 1,
			iv_load_policy: 3,
			modestbranding: 1,
			playsinline: 1,
			rel: 0,
		},
	});
}
```

`playerVars` are the same as the [player parameters](https://developers.google.com/youtube/player_parameters) for the regular iframe.

**Pros:**

- You can defer this until after page load to some degree.
- It's progressively enhanceable.
- The player emits Javascript events on play/pause/etc.

**Cons:**

- It's still rather slow once loaded.
- Calling a specific global function on load feels pretty archaic and makes me wonder if this might be deprecated sooner rather than later.
- I'm not sure how you do a title attribute.
- There are [weird browser-specific caveats](https://developers.google.com/youtube/iframe_api_reference#Mobile_considerations).

## Option 3: An iframe with `srcdoc`

via [Arthur Corenzan](https://dev.to/haggen/lazy-load-embedded-youtube-videos-520g)

Puts an iframe on the page with embedded markup to display a thumbnail and a play button.

Code sample:

```html
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/hpDRlLnLWGg"
	srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;background:black}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/hpDRlLnLWGg?autoplay=1><img src=https://img.youtube.com/vi/hpDRlLnLWGg/hqdefault.jpg alt='Tetris Effect: Announce trailer' loading='lazy'><span aria-label='Play'>▶</span></a>"
	frameborder="0"
	title="The best video game trailer ever made"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	loading="lazy"
></iframe>
```

**Pros:**

- Fast. Before playback, the only external request to YouTube is the thumbnail.
- No dependencies.

**Cons:**

- No support in older browsers, but it's easily progressively enhanceable.
- Kind of a weird hack?

## Option 4: A custom web component like `<lite-youtube>`

**lite-youtube-embed**: [site](https://paulirish.github.io/lite-youtube-embed/), [repo](https://github.com/paulirish/lite-youtube-embed), [npm](https://www.npmjs.com/package/lite-youtube-embed) (`npm install lite-youtube-embed`)

**lite-youtube**: [repo](https://github.com/justinribeiro/lite-youtube), [npm](https://www.npmjs.com/package/@justinribeiro/lite-youtube) (`npm install @justinribeiro/lite-youtube`)

**Pros:**

- Fast. Before playback, the only external request to YouTube is the thumbnail.

**Cons**

- Not sure about scriptability (as in, starting/stopping playback with JS).
- Requires adding a dependency.

<aside>

## What about Vimeo?

Its default embed is also slow, but it does have [an API](https://developer.vimeo.com/api) that could be used similar to option 2 and some `<lite-youtube>`-style web components are out there:

- [slightlyoff/lite-vimeo](https://github.com/slightlyoff/lite-vimeo)
- [luwes/lite-vimeo-embed](https://github.com/luwes/lite-vimeo-embed)

</aside>
